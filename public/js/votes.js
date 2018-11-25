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

function displayResult(result) {
        document.getElementsByClassName('avatar')[0].setAttribute('src', result.user.photoURL)
        document.getElementById('userName').innerText = result.user.name.split(' ')[0]
        console.log(result)
        // if (results.type == "not star") {
            //     getResult(pollOptionId)
                // let name = results.name
                // let percentage = results.percentage
                // for (let i = 0; i < name.length; i++) {
                //     console.log(name)
                //     var outputDiv = $('<div>')
                //     var ul = $('<ul>')
                //     var optionLabel = $('<label class="radio radio-1" htmlFor="radio-1">' + name[i] + '</label>')
                //     var progBar = $('<div class="progress" role="progressbar" tabindex="0" aria-valuenow="' + parseInt(percentage[i]) + '" aria-valuemin="0" aria-valuetext="' + parseInt(percentage[i]) + '" aria-valuemax="100"></div>')
                //     var spanBar = $('<span class="progress-meter" style="width: ' + parseInt(percentage[i]) + '%">')
                //     var parText = $('<p class="progress-meter-text"> '+ parseInt(percentage[i]) + '%</p>')
                //     spanBar.append(parText)
                //     progBar.append(spanBar)
                //     optionLabel.append(progBar)
                //     ul.append(optionLabel)
                //     outputDiv.append(ul)
                //     $('#voteOutput').append(outputDiv)
                // }
                // $('.twoChoices').hide()
                // $('.mutiple').hide()
            //     // $('#submit').hide()
            // } else {
            //     let currentRating = results.average
            //     console.log(currentRating)
            //     // let pollId
            //     // pollId = document.querySelector('div').getAttribute('data-pollOptionId')
            //     // console.log(pollId)
            //     let starResult = ""
            //     for (let i = 1; i < 6; i++) {
            //         if (i <= currentRating) {
            //             starResult += '<i class="fas fa-star"></i>'
            //         } else if (i == currentRating + 0.5) {
            //             starResult += '<i class="fas fa-star-half-alt"></i>'
            //         } else {
            //             starResult += '<i class="far fa-star"></i>'
            //         }
            //     }
            //     $('.stars').hide()
            //     $('#submit').hide()
            //     $('#voteOutput').append(starResult)
            //     console.log(starResult)
            // }
        
}


{/* <p className="progress-meter-text"></p> */}


