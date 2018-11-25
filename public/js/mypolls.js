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
            if (polls.type === "multiple") {
                polls.pollOptions.forEach(element => {
                    pollDiv +=
                `<div data-optionId="${element.id}" >
                <h4 class="voteOptions">${element.name}</h4>
                    <div class="progress" role="progressbar" tabindex="0">
                    <span class="progress-meter" style="width: 25%">
                        <p class="progress-meter-text">25%</p>
                    </span>
                    </div>
                    </div>
                    `
                })
            } else if (polls.type === "stars") {
                let currentRating = Math.round(polls.pollOptions[0].starRating *2)/2
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
                // <div class="rate">
                //     <input type="radio" id="star5${polls.id}" name="rate${polls.id}" value="5" />
                //     <label for="star5${polls.id}" title="text">5 stars</label>
                //     <input type="radio" id="star4${polls.id}" name="rate${polls.id}" value="4" />
                //     <label for="star4${polls.id}" title="text">4 stars</label>
                //     <input type="radio" id="star3${polls.id}" name="rate${polls.id}" value="3" />
                //     <label for="star3${polls.id}" title="text">3 stars</label>
                //     <input type="radio" id="star2${polls.id}" name="rate${polls.id}" value="2" />
                //     <label for="star2${polls.id}" title="text">2 stars</label>
                //     <input type="radio" id="star1${polls.id}" name="rate${polls.id}" value="1" />
                //     <label for="star1${polls.id}" title="text">1 star</label>
                // </div>
            } else {
                pollDiv = `
                <input type="radio" name="options" value="${polls.pollOptions[0].id}" class="left" disabled> ${polls.pollOptions[0].name} <br>
                <input type="radio" name="options" value="${polls.pollOptions[1].id}" class="left" disabled> ${polls.pollOptions[1].name} <br>  
                `
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
                //<a class="warning button vote">Vote</a>

        //Delete eventlistener and fetch Delete method
        // let deleteBtn = document.getElementsByClassName('delete') 
        // for (let i = 0; i < deleteBtn.length; i++) {
        //     deleteBtn[i].addEventListener('click', function() {
        //         console.log(this.parentElement.parentElement.getAttribute('data-pollId'))
        //         fetch('/api/poll/' + this.parentElement.parentElement.getAttribute('data-pollId'), {
        //             method: 'DELETE'
        //         })
        //         .then(res => location.reload())
        //     })   
        // } 
        //Vote eventlistener and fetch PUT method
        // let voteBtn = document.getElementsByClassName('vote') 
        // for (let i = 0; i < voteBtn.length; i++) {
        //     voteBtn[i].addEventListener('click', function() {

                
        //         //   console.log(this.parentElement.previousElementSibling.querySelector('input[name = "rate"]:checked').value)
        //         //   console.log(this.parentElement.parentElement.getAttribute('data-pollType'))
        //         //   console.log(this.parentElement.previousElementSibling.querySelector('.stars').getAttribute('data-optionId'))
        //         fetch('/api/pollOption/' + this.parentElement.previousElementSibling.querySelector('.stars').getAttribute('data-optionId'), {
        //             method: 'PUT',
        //             headers: {
        //                 "Content-Type": "application/json; charset=utf-8",
        //             },
        //             body: JSON.stringify({
        //                     userId: _user.id,
        //                     starRating: this.parentElement.previousElementSibling.querySelector('input[name = "rate"]:checked').value,
        //             })
        //         })
        //         .then(res => console.log(res))
        //     })   
        // } 
        
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