//Login user local storage
let _user
document.addEventListener("DOMContentLoaded", () => {

// Retrieve local storage for user photoURL
    if (typeof(Storage) !== "undefined") {
        _user = JSON.parse(localStorage.getItem("user"))
        document.querySelector(".avatar").setAttribute('src', _user.photoURL)
    } else {
        console.log("Not Logged In")
    }
})

const submit = document.getElementById('submit')


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
    })
    // fetch('/api/pollOption/:id', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json; charset=utf-8' },
    //     body: JSON.stringify({
    //         starRating: document.querySelector('.options').value,
    //         starRatingCount: 1,
    //         votes: 1,
    //         userVote: userVoteArr
    //     })
    //   })

    //     .then(r => {
            // $('#userVote').hide()
            // $('#castVote').show()
            // $('#castRoute').show()
            // // Create New Poll
            // $('#castRoute').append('<a class="button small expanded" href="/creatpolls">Create Polls</a>')
            // // Go To My Poll
            // $('#castRoute').append('<a class="button small expanded" href="/mypolls">My Polls</a>')
            // // Go To Community Polls
            // $('#castRoute').append('<a class="button small expanded" href="/communityPolls">Community Polls</a>')
        // })
        // .catch(e => console.error(e))
})
