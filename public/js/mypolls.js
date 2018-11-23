let _user = JSON.parse(localStorage.getItem("user"))

fetch('/api/myPolls/' + _user.id)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data)
    let cardContainer = document.getElementById('cardContainer')
   
    data.forEach(polls => {
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
            pollDiv = `
            <div data-optionId="${polls.pollOptions[0].id}" class="stars">
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
            <input type="radio" name="options" value="${polls.pollOptions[0].id}" class="left"> ${polls.pollOptions[0].name} <br>
            <input type="radio" name="options" value="${polls.pollOptions[1].id}" class="left"> ${polls.pollOptions[1].name} <br>  
            `
        }
            cardContainer.insertAdjacentHTML('afterbegin',
            `<div class="medium-6 cell">
            <div data-pollType="${polls.type}" data-pollId="${polls.id}" class="card">
                <div class="card-divider">
                    <img class="avatar" src="${_user.photoURL}">
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

    //Delete eventlistener and fetch Delete method
      let deleteBtn = document.getElementsByClassName('delete') 
      for (let i = 0; i < deleteBtn.length; i++) {
          deleteBtn[i].addEventListener('click', function() {
              console.log(this.parentElement.parentElement.getAttribute('data-pollId'))
            fetch('/api/poll/' + this.parentElement.parentElement.getAttribute('data-pollId'), {
                method: 'DELETE'
              })
              .then(res => location.reload())
           })   
      } 
      //Vote eventlistener and fetch PUT method
      let voteBtn = document.getElementsByClassName('vote') 
      for (let i = 0; i < voteBtn.length; i++) {
          voteBtn[i].addEventListener('click', function() {
              console.log(this.parentElement.previousElementSibling.querySelector('input[name = "options"]:checked').value)
              console.log(this.parentElement.parentElement.getAttribute('data-pollType'))
            fetch('/api/pollOption/' + this.parentElement.previousElementSibling.querySelector('input[name = "options"]:checked').value, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify({
                        userId: _user.id,
                        starRating: null,
                })
              })
              .then(res => console.log(res))
           })   
      } 
      
    });
  });

