let user = JSON.parse(localStorage.getItem("user"))

fetch('/api/myPolls/' + user.id)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data)
    let cardContainer = document.getElementById('cardContainer')
    let user = JSON.parse(localStorage.getItem("user"))
   
    data.forEach(polls => {
        let pollDiv = ""
        if (polls.type === "multiple") {
            polls.pollOptions.forEach(element => {
                pollDiv +=
               `<div>
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
            pollDiv = `
            <div class="stars">
                <input class="star star-5" id="star-5" type="radio" name="star">
                <label class="star star-5" for="star-5"></label>
                <input class="star star-4" id="star-4" type="radio" name="star">
                <label class="star star-4" for="star-4"></label>
                <input class="star star-3" id="star-3" type="radio" name="star">
                <label class="star star-3" for="star-3"></label>
                <input class="star star-2" id="star-2" type="radio" name="star">
                <label class="star star-2" for="star-2"></label>
                <input class="star star-1" id="star-1" type="radio" name="star">
                <label class="star star-1" for="star-1"></label>
            </div>`
        } else {
            pollDiv = `
            <div class="left">${polls.pollOptions[0].name}</div>
            <div class="right">${polls.pollOptions[1].name}</div>
            `
        }
            cardContainer.insertAdjacentHTML('afterbegin',
            `<div class="medium-6 cell">
            <div class="card">
                <div class="card-divider">
                    <img class="avatar" src="${user.photoURL}">
                    <div>
                        ${polls.name.trim()}
                    </div>
                </div>
                <div class="card-section">
                    ${pollDiv.trim()}
                </div>  
                <div class="button-group">
                <a class="secondary button details">View Details</a>
                <a class="warning button vote">Vote</a>
                <a class="alert button delete">Delete</a>
                </div>
            </div>
        </div>
            `)     
    });
  });
