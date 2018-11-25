const submit = document.getElementById('submit')
const share = document.getElementById('share')

//Login user local storage
let _user
document.addEventListener("DOMContentLoaded", () => {

// Retrieve local storage for user photoURL
    if (typeof(Storage) !== "undefined") {
        _user = JSON.parse(localStorage.getItem("user"))
        if (!_user) {
            submit.setAttribute('disabled', "")
            submit.innerText = "Please Log In to Vote!!"
        }
    } else {
        console.log("Not Logged In")
    }
    document.getElementById('copy-link').setAttribute('value', window.location.href)
    let pollId = document.getElementById('userVote').getAttribute('data-pollId')

    fetch(`/api/hasvoted/${pollId}/${_user.id}`)
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            submit.disabled = true
            submit.innerText = "Already Voted"
            let input = document.getElementsByTagName('input')
            for (let i = 0; i < input.length; i++) {
               input[i].disabled = true
            }
        }
    })
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
        return response.json();
    })
    .then(function(results) {
        console.log(results)
        location.reload()
    })
        // $('#userVote').hide()
        // $('#castVote').show()
        // $('#castRoute').show()
        // // Create New Poll
        // $('#castRoute').append('<a class="button small expanded pollOptions" href="/createpolls">Create Polls</a>')
        // // // Go To My Poll
        // $('#castRoute').append('<a class="button small expanded pollOptions" href="/mypolls">My Polls</a>')
        // // // Go To Community Polls
        // $('#castRoute').append('<a class="button small expanded pollOptions" href="/active_polls">Community Polls</a>')
})
