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
        let user = JSON.parse(localStorage.getItem("firebaseui::rememberedAccounts"))
        document.getElementById("avatar").setAttribute('src', user[0].photoUrl)
    } else {
        console.log("Not Logged In")
    }

    multiple.style.display = "none"
    twoChoices.style.display = "none"
    stars.style.display = "none"
})

//Submit eventlistener
submit.addEventListener('click', function() {
    event.preventDefault()
    let optionCount = document.getElementsByClassName('options').length
    let optionArr = []
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
//Fetch POST requet to the database   
    fetch('/api/poll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
            type: document.querySelector('#submit').getAttribute('data-type'),
            name: document.querySelector('#statement').value,
            user: 'Mearat',
            pollOption: optionArr,
            isPrivate: document.querySelector('#isPrivate').checked,
            time: document.querySelector('#time').value,
            duration: document.querySelector('#duration').value,
        })
      })
        .then(r => {
            console.log('check')
            
            function renderPoll(data) {
                if (data.type == "twoChoices" || data.type == "multiple") {
            
                    for (var i = 0; i < data.length; i++) {
                
                        var card = $('<div className="card" style="width: 500px;">');
                        var cardSection = $('<div className="card-divider">');
                
                        cardSection.append('<h2>' + data[i].name + '</h2>');
                        cardSection.append('<input type="radio" name="pokemon"><label htmlFor="pokemonBlue">' + OptionArr[i] + '</label>');

                        card.append(cardSection)

                        $('#showForm').append(card)
                        console.log(card)
                    }

                } else {
                
                    var card = $('<div className="card" style="width: 500px;">')
                    var cardSection = $('<div className="card-divider">')
                    var starSection = $('<div className="stars">')
            
                    starSection.append('<input className="star star-5" id="star-5" type="radio" name="star" /><label className="star star-5" htmlFor="star-5"></label>')
                    starSection.append('<input className="star star-4" id="star-4" type="radio" name="star" /><label className="star star-4" htmlFor="star-4"></label>')
                    starSection.append('<input className="star star-3" id="star-3" type="radio" name="star" /><label className="star star-3" htmlFor="star-3"></label>')
                    starSection.append('<input className="star star-2" id="star-2" type="radio" name="star" /><label className="star star-2" htmlFor="star-2"></label>')
                    starSection.append('<input className="star star-1" id="star-1" type="radio" name="star" /><label className="star star-1" htmlFor="star-1"></label>')

                    cardSection.append(starSection)
                    card.append(cardSection)

                    $('#showForm').append(card)
                    console.log(card)

                }

            }
            document.querySelector('#statement').value = '';
            document.querySelector('#isPrivate').checked = false;
            document.querySelector('#time').value = '';
            for (let i = 0; i < optionCount; i++) {
                document.querySelector('#option' + (i + 1)).value = ''
            }
            multiple.style.display = "none"
            twoChoices.style.display = "none"
            stars.style.display = "none"
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
