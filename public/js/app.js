//Elements Variables
const submit = document.getElementById('submit')
const pollsForm = document.getElementById('pollsForm')
const stars = document.getElementsByClassName('stars')[0]
const multiple = document.getElementById('multiple')
const twoChoices = document.getElementById('twoChoices')



document.addEventListener("DOMContentLoaded", () => {
//Hiding all the polloptions input forms when content loaded
    multiple.style.display = "none"
    twoChoices.style.display = "none"
    stars.style.display = "none"    
// Retrieve local storage for user photoURL
    if (typeof(Storage) !== "undefined") {
        let user = JSON.parse(localStorage.getItem("user"))
        document.querySelector(".avatar").setAttribute('src', user.photoURL)
    } else {
        console.log("Not Logged In")
    }
   
})

//Submit eventlistener
submit.addEventListener('click', function() {
    let optionCount = document.getElementsByClassName('options').length
    event.preventDefault()
    let optionArr = []
    if (submit.getAttribute('data-type') === 'stars') {
        optionArr = [{
                name: 'starRating',
                description: null,
                starRating: 0,
                starRatingCount: 0,
                votes: 0
        }]
    } else if (submit.getAttribute('data-type') === 'twoChoices') {
        optionArr = [
            {
                name: document.querySelector('#a').value,
                description: null,
                starRating: 0,
                starRatingCount: 0,
                votes: 0
            },
            {
                name: document.querySelector('#b').value,
                description: null,
                starRating: 0,
                starRatingCount: 0,
                votes: 0
            }
        ]

    } else {
        for (let i = 0; i < optionCount; i++) {
            optionArr.push(
                {
                    name: document.querySelector('#option' + (i + 1)).value,
                    description: null,
                    starRating: 0,
                    starRatingCount: 0,
                    votes: 0
                }
            )
    }
    }

//Fetch POST request to the database   
    fetch('/api/poll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          type: document.querySelector('#submit').getAttribute('data-type'),
          name: document.querySelector('#statement').value,
          user: JSON.parse(localStorage.getItem("user")).id,
          pollOption: optionArr,
          isPrivate: document.querySelector('#isPrivate').checked,
          time: document.querySelector('#time').value,
          duration: document.querySelector('#duration').value,
        })
      })
        .then(r => {
        
          document.querySelector('#statement').value = '';
          document.querySelector('#isPrivate').checked = false;
          document.querySelector('#time').value = '';
          for (let i = 0; i < optionCount; i++) {
            document.querySelector('#option' + (i + 1)).value = ''
          }
          document.querySelector('#a').value = ''
          document.querySelector('#b').value = ''
          
          r.json()
          .then(r => {
            if (!r.isPrivate) {
                window.location.href = '/poll/' + r.id
            } else {
                window.location.href = '/poll/' + r.uId
            }
          })
        })
        .catch(e => console.error(e))
})

//Eventlistener for different type of input forms

document.getElementById('starForm').addEventListener('click', () => {
    pollsForm.style.display = "block"
    multiple.style.display = "none"
    twoChoices.style.display = "none"
    stars.style.display = "inline-block"
    submit.setAttribute("data-type", "stars")
})

document.getElementById('multipleForm').addEventListener('click', () => {
    pollsForm.style.display = "block"
    multiple.style.display = "block"
    twoChoices.style.display = "none"
    stars.style.display = "none"
    submit.setAttribute("data-type", "multiple")
})

document.getElementById('twoChoicesForm').addEventListener('click', () => {
    pollsForm.style.display = "block"
    multiple.style.display = "none"
    twoChoices.style.display = "block"
    stars.style.display = "none"
    submit.setAttribute("data-type", "twoChoices")
})

document.getElementById('add').addEventListener('click', (event) => {
    event.preventDefault()
    let optionCount = document.getElementsByClassName('options').length + 1
    let newOption = document.getElementById('multipleInput');
    newOption.insertAdjacentHTML('beforeend', `<input id="option${optionCount}" class="input-group-rounded options" type="text" placeholder="Option ${optionCount}">`);    
})

document.getElementById('remove').addEventListener('click', (event) => {
    event.preventDefault()
    let optionCount = document.getElementsByClassName('options').length
    let newOption = document.getElementById('option' + optionCount);
    newOption.remove(`<input id="option${optionCount}" class="input-group-rounded options" type="text" placeholder="Option ${optionCount}">`);
})
