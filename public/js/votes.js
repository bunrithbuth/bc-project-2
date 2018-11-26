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
            submit.setAttribute('disabled', "")
            submit.innerText = "Please Log In to Vote!!"
        }
        fetch(`/api/hasvoted/${pollId}/${_user.id}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
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
    console.log(window.location.href)
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
        console.log(stars)
        console.log(pollOptionId)
        // Star vote
        userVote = {
            userId: _user.id,
            starRating: stars
        }
    } else if (submit.getAttribute('data-type') === 'twoChoices' || submit.getAttribute('data-type') === 'multiple') {
        // twoChoices and multiple vote
        pollOptionId = document.querySelector('input[name = "radio"]:checked').value
        console.log(pollOptionId)
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
    .then(result => displayResult(result))
}

function displayResult(results) {
        document.getElementsByClassName('avatar')[0].setAttribute('src', result.user.photoURL)
        document.getElementById('userName').innerText = result.user.name.split(' ')[0]
        console.log(results)
        if (results._poll.type == "twoChoices" || results._poll.type == "multiple") {
                let sum = 0
                results._poll.pollOptions.forEach(element => {
                    sum += element.votes
                })
                console.log(sum)
                if (sum == 0) {
                    for (let i = 0; i < results._poll.pollOptions.length; i++) {
                        $('#progress' + results._poll.pollOptions[i].id).text("0%")
                        $('#progress' + results._poll.pollOptions[i].id).css('width', "0%")
                    }
                } else {
                    let percentage = 0
                    // Percentage
                    results._poll.pollOptions.forEach(element => {
                        percentage = ((element.votes/sum) * 100).toFixed(0)
                        console.log(percentage)
                        if (percentage == 0) {
                            $('#progress' + element.id).text("0%")
                            $('#progress' + element.id).css('width', percentage + "%")
                        } else {
                            $('#progress' + element.id).text(percentage + '%')
                            $('#progress' + element.id).css('width', percentage + "%")
                        }
                    })
                // for (let i = 0; i < results._poll.pollOptions.length; i++) {
                //     var outputDiv = $('<div>')
                //     var ul = $('<ul>')
                //     var optionLabel = $('<label class="radio radio-1" htmlFor="radio-1">' + results._poll.pollOptions[i].name + '</label>')
                //     var progBar = $('<div class="progress" role="progressbar" tabindex="0" aria-valuenow="' + results._poll.pollOptions[i].votes / sum + '" aria-valuemin="0" aria-valuetext="' + results._poll.pollOptions[i].votes + '" aria-valuemax="100"></div>')
                //     var spanBar = $('<span class="progress-meter" style="width: ' + results._poll.pollOptions[i].votes / sum + '%">')
                //     var parText = $('<p class="progress-meter-text"> '+ results._poll.pollOptions[i].votes / sum + '%</p>')
                //     spanBar.append(parText)
                //     progBar.append(spanBar)
                //     optionLabel.append(progBar)
                //     ul.append(optionLabel)
                //     outputDiv.append(ul)
                //     $('#voteOutput').append(outputDiv)
                //     console.log(outputDiv)
                // }
            }
            } else {
                let type = results._poll.type
                console.log(type)
                let currentRating = results._poll.pollOptions[0].starRating
                let currentRatingCount = results._poll.pollOptions[0].starRatingCount
                let calc = currentRating / currentRatingCount
                console.log(currentRating)
                console.log(currentRatingCount)
                console.log(calc)
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
                console.log(starResult)
                $('#voteOutput').append(starResult)
            }
        
}

{/* <p className="progress-meter-text"></p> */}


