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
    .then(result => {
        isExpired(result)
        displayResult(result)
    })
}

function isExpired(result) {
        if (moment.utc(result._poll.expiration) <= moment.utc())  {
            submit.disabled = true
            submit.innerText = "Poll is expired"
        }
}

function displayResult(result) {
        document.getElementsByClassName('avatar')[0].setAttribute('src', result.user.photoURL)
        document.getElementById('userName').innerText = result.user.name.split(' ')[0]
        console.log(result)
        if (result._poll.type == "stars") {
            // Code for star rating here
        } else {
            // Code for twoChoices and multiple here

            let sum = 0
            // Sum
            result._poll.pollOptions.forEach(element => {
                sum += element.votes
            })

            if (sum == 0) {
                // Display empty progress bar
            } else {
                let percentage = 0
                // Percentage
                result._poll.pollOptions.forEach(element => {
                    percentage = ((element/sum)*100).toFixed(2)
                    //Push this to its own corresponding progress bar
                    $('#progress' + element.id).html(`<p className="progress-meter-text">${percentage}</p>`)
                    $('#progress' + element.id).attr('style', 'width:' + percentage)
                })
            }           
        }
}



