let _user = JSON.parse(localStorage.getItem("user"))

if(!_user){
    $('#cardContainer').append(`
    <div class="grid-container">
        <div class="grid-x grid-padding-x">
            <div class="medium-12 cell text-center">
                <h2 style="padding-top: 20px">Please Login to See Your Poll</h2>
            </div>
        </div>
    </div>
    `)
}else{
    fetch('/api/myPolls/' + _user.id)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)

        let cardContainer = document.getElementById('cardContainer')
    
        data.forEach(polls => {
            let _id = null
            polls.isPrivate ? _id = polls.uId : _id = polls.id
            let pollDiv = ""
            if (polls.type === "stars") {
                let currentRating = 0
                if (polls.pollOptions[0].starRatingCount == 0) {
                  currentRating = 0
                } else {
                    currentRating = Math.round((polls.pollOptions[0].starRating/polls.pollOptions[0].starRatingCount) *2)/2
                }
                console.log(currentRating)
                let starResult = ""
                for (let i = 1; i < 6; i++) {
                    if (i <= currentRating) {
                        starResult += '<i class="fas fa-star"></i>'
                    } else if (i == currentRating + 0.5) {
                        starResult += '<i class="fas fa-star-half-alt"></i>' 
                    } else {
                        starResult += '<i class="far fa-star"></i>' 
                    }     
                }
                pollDiv = `
                <div data-optionId="${polls.pollOptions[0].id}" class="stars">
                    <div style="padding-bottom: 20px">
                    Rating:
                    ${starResult}
                    </div>
                </div>`
            } else {
                let sum = 0
                // Sum
                polls.pollOptions.forEach(element => {
                    sum += element.votes
                })
                console.log(sum)
                if (sum == 0) {
                    polls.pollOptions.forEach(element => {
                    pollDiv +=
                        `<div data-optionId="${element.id}" >
                        <h3 class="voteOptions">${element.name}</h3>
                            <div class="progress" role="progressbar" tabindex="0">
                            <span class="progress-meter" style="width: 0%">
                                <p class="progress-meter-text"></p>
                            </span>
                            </div>
                            </div>
                            `
                    })
                } else {
                    let percentage = 0
                    // Percentage
                    polls.pollOptions.forEach(element => {
                        percentage = ((element/sum)*100).toFixed(2)
                        pollDiv +=
                    `<div data-optionId="${element.id}" >
                    <h3 class="voteOptions">${element.name}</h3>
                        <div class="progress" role="progressbar" tabindex="0">
                        <span class="progress-meter" style="width: ${percentage}%">
                            <p class="progress-meter-text">${percentage}%</p>
                        </span>
                        </div>
                        </div>
                        `
                    })
                }
            } 
                cardContainer.insertAdjacentHTML('afterbegin',
                `<div class="medium-6 cell">
                <div data-pollType="${polls.type}" data-pollId="${polls.id}" class="card">
                    <div class="card-divider">
                        <img class="avatar" src="${_user.photoURL}" style="padding-bottom: 0px; margin-bottom: 0px;">
                        <div class="text-center" style="margin: auto">
                            <h4>
                                ${polls.name.trim()}
                            </h4>
                        </div>
                    </div>
                    <div class="card-section">
                        ${pollDiv.trim()}
                        <div class="button-group">
                            <a class="secondary button details" href="/poll/${_id}">View Details</a>

                            <a class="alert button delete" onclick="deletePoll(${polls.id})">Delete</a>
                        </div>
                    </div>
                    </div>  
                </div>
                `)
        });
    });
}


function deletePoll(id) {
    event.preventDefault()

    console.log('id is ' + id)
    fetch('/api/poll/' + id, {
        method: 'DELETE'
    })
    .then(res => location.reload())
}