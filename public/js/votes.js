const submit = document.getElementById('submit')
const share = document.getElementById('share')
let pollId = document.getElementById('userVote').getAttribute('data-pollId')

//Login user local storage
let _user
document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById('copy-link').setAttribute('value', window.location.href)
    getResult(pollId)
    if (typeof(Storage) !== "undefined") {
        _user = JSON.parse(localStorage.getItem("user"))
        if (!_user) {
            submit.disabled = true
            submit.innerText = "Please Log In to Vote!!"
        }
        fetch(`/api/hasvoted/${pollId}/${_user.id}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                $(`input[value=${data[0].pollOptionId}]`).prop('checked', true)
                submit.disabled = true
                submit.innerText = "Voted!!!"
                let input = document.getElementsByTagName('input')
                for (let i = 0; i < input.length; i++) {
                   input[i].disabled = true
                }
            }
        })
    } else {
        console.log("Not Logged In")
    }

})


share.addEventListener('click', function() {
    document.getElementById('copy-link').select()
    document.execCommand("copy")
    share.innerText = "Copied!!"
    setTimeout(function(){ 
        share.innerHTML = '<i class="fas fa-clipboard"></i>'
     }, 1500)
})


// PollOptions and user vote tables

//Submit eventlistener
submit.addEventListener('click', function() {
    event.preventDefault()
    let userVote = {}
    let pollOptionId
    // User Votes Table Update
    if (submit.getAttribute('data-type') === 'stars') {
        pollOptionId = document.querySelector('.rate').getAttribute('data-pollOptionId')
        const stars = document.querySelector('input[name = "rate"]:checked').value
        // Star vote
        userVote = {
            userId: _user.id,
            starRating: stars
        }
    } else if (submit.getAttribute('data-type') === 'twoChoices' || submit.getAttribute('data-type') === 'multiple') {
        // twoChoices and multiple vote
        pollOptionId = document.querySelector('input[name = "radio"]:checked').value
        userVote = {
            userId: _user.id,
            starRating: null
        }
    }

//Fetch PUT request to the database   
    fetch('/api/pollOption/' + pollOptionId, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(userVote)
        })
        .then(function(response) {
            location.reload()
        })       
})

function getResult(pollId) {
    fetch('/api/poll/' + pollId)
    .then(response => response.json())
    .then(results => {
        isExpired(results)
        displayResult(results)
    })
}

function isExpired(results) {
        if (moment.utc(results._poll.expiration) <= moment.utc())  {
            submit.disabled = true
            $('#expired').html("<h3>Poll Expired, Please See The Result!</h3>")
        }
}

function displayResult(results) {
        document.getElementsByClassName('avatar')[0].setAttribute('src', results.user.photoURL)
        document.getElementById('userName').innerText = results.user.name.split(' ')[0]
        if (results._poll.type == "twoChoices" || results._poll.type == "multiple") {
                let sum = 0
                results._poll.pollOptions.forEach(element => {
                    sum += element.votes
                })
                $('#voteCount').text("Vote Count: " + sum)
                let percentage = 0
                if (sum == 0) {
                    for (let i = 0; i < results._poll.pollOptions.length; i++) {
                        $('#progress' + results._poll.pollOptions[i].id).css('width', "0%")
                    }
                } else {
                    // Percentage
                    results._poll.pollOptions.forEach(element => {
                        percentage = ((element.votes/sum) * 100).toFixed(0)
                        if (percentage == 0) {
                            $('#progress' + element.id).css('width', percentage + "%")
                        } else {
                            $('#progress' + element.id).html(`<p class="progress-meter-text">${percentage}%</p>`)
                            $('#progress' + element.id).css('width', percentage + "%")
                        }
                    })
            }
            } else {
                let currentRating = results._poll.pollOptions[0].starRating
                let currentRatingCount = results._poll.pollOptions[0].starRatingCount
                $('#voteCount').text("Vote Count: " + currentRatingCount)
                let calc = currentRating / currentRatingCount
                let starResult = ""
                for (let i = 1; i < 6; i++) {
                    if (i <= calc ) {
                        starResult += '<i class="fas fa-star"></i>'
                    } else if (i == calc + 0.5) {
                        starResult += '<i class="fas fa-star-half-alt"></i>'
                    } else {
                        starResult += '<i class="far fa-star"></i>'
                    }
                }
                $('#voteOutput').show()
                $('#voteOutput').append(`
                ${starResult}
                <h3>Current Star Rating</h3> 
                `)
            }
        
}



