//Elements Variables
const submit = document.getElementById('submit')
const pollsForm = document.getElementById('pollsForm')
const stars = document.getElementsByClassName('stars')[0]
const multiple = document.getElementById('multiple')
const twoChoices = document.getElementById('twoChoices')


//Hiding all the polloptions input forms when content loaded
document.addEventListener("DOMContentLoaded", () => {

// Retrieve local storage for user photoURL
    if (typeof(Storage) !== "undefined") {
        let user = JSON.parse(localStorage.getItem("user"))
        console.log(user.photoURL)
        document.querySelector(".avatar").setAttribute('src', user.photoURL)
    } else {
        console.log("Not Logged In")
    }

    multiple.style.display = "none"
    twoChoices.style.display = "none"
    stars.style.display = "none"
})

//Submit eventlistener
submit.addEventListener('click', function() {
    let optionCount = document.getElementsByClassName('options').length
    event.preventDefault()
    let optionArr = []
    if (submit.getAttribute('data-type') === 'stars') {
        optionArr = [{
                name: document.querySelector('#statement').value,
                description: 'starRating',
                starRating: 0,
                starRatingCount: 0,
                votes: 0
        }]
    } else if (submit.getAttribute('data-type') === 'twoChoices') {
        optionArr = [
            {
                name: document.querySelector('#statement').value,
                description: document.querySelector('#a').value,
                starRating: 0,
                starRatingCount: 0,
                votes: 0
            },
            {
                name: document.querySelector('#statement').value,
                description: document.querySelector('#b').value,
                starRating: 0,
                starRatingCount: 0,
                votes: 0
            }
        ]

    } else {
        for (let i = 0; i < optionCount; i++) {
            optionArr.push(
                {
                    name: document.querySelector('#statement').value,
                    description: document.querySelector('#option' + (i + 1)).value,
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
            description: optionArr,
            user: 1,
            pollOption: optionArr,
            isPrivate: document.querySelector('#isPrivate').checked,
            time: document.querySelector('#time').value,
            duration: document.querySelector('#duration').value,
        })
      })
      .then(r => {
        console.log('check')
        console.log(optionArr)
        if (document.querySelector('#submit').getAttribute('data-type') == "twoChoices") {
            
            var card = $('<div class="card">');
            var cardSection = $('<div class="card-section">');
    
            cardSection.append('<h2>' + document.querySelector('#statement').value + '</h2>');

            for (let i = 0; i < optionArr.length; i++) {
                cardSection.append('<input type="radio" name="pokemon"><label for="pokemonBlue">' + optionArr[i].name + '</label>');
                console.log(optionArr[i])
            }

            card.append(cardSection)

            $('#showForm').append(card)

        } else if (document.querySelector('#submit').getAttribute('data-type') == "multiple") {

            var card = $('<div class="card">');
            var cardSection = $('<div class="card-section">');
    
            cardSection.append('<h2>' + document.querySelector('#statement').value + '</h2>');

            for (let i = 0; i < optionArr.length; i++) {
                cardSection.append('<input type="radio" name="pokemon"><label for="pokemonBlue">' + optionArr[i].name + '</label>');
                console.log(optionArr[i])
            }

            card.append(cardSection)

            $('#showForm').append(card)

        } else {
        
            var card = $('<div class="card">');
            var cardSection = $('<div class="card-section">')
            var starSection = $('<div class="stars">')

            cardSection.append('<h2>' + document.querySelector('#statement').value + '</h2>');
    
            starSection.append('<input class="star star-5" id="star-5" type="radio" name="star" /><label class="star star-5" for="star-5"></label>')
            starSection.append('<input class="star star-4" id="star-4" type="radio" name="star" /><label class="star star-4" for="star-4"></label>')
            starSection.append('<input class="star star-3" id="star-3" type="radio" name="star" /><label class="star star-3" for="star-3"></label>')
            starSection.append('<input class="star star-2" id="star-2" type="radio" name="star" /><label class="star star-2" for="star-2"></label>')
            starSection.append('<input class="star star-1" id="star-1" type="radio" name="star" /><label class="star star-1" for="star-1"></label>')

            cardSection.append(starSection)
            card.append(cardSection)

            $('#showForm').append(card)

        }
        document.querySelector('#statement').value = '';
        document.querySelector('#isPrivate').checked = false;
        document.querySelector('#time').value = '';
        for (let i = 0; i < optionCount; i++) {
            document.querySelector('#option' + (i + 1)).value = ''
        }
        pollsForm.style.display = "none"
        pollsOptions.style.display = "none"
        showForm.style.display = "block"
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
    console.log('add')
})

//Foundation init

$(document).foundation();
