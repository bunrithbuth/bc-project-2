//Elements Variables
const submit = document.getElementById('submit')
const pollsForm = document.getElementById('pollsForm')
const stars = document.getElementsByClassName('stars')[0]
const multiple = document.getElementById('multiple')
const twoChoices = document.getElementById('twoChoices')

//Hiding all the polloptions input forms when content loaded
document.addEventListener("DOMContentLoaded", () => {
    multiple.style.display = "none"
    twoChoices.style.display = "none"
    stars.style.display = "none"
})

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
            document.querySelector('#statement').value = '';
            document.querySelector('#isPrivate').checked = false;
            document.querySelector('#time').value = '';
            for (let i = 0; i < optionCount; i++) {
                document.querySelector('#option' + (i + 1)).value = ''
            }
            if (data.type == "stars"){

            }
            if (data.type == "twoChoices"){

            }
            if (data.type == "multiple"){

            }

            for (var i = 0; i < data.length; i++) {
                // Create a parent div to hold book data
                var wellSection = $("<div>");
                // Add a class to this div: 'well'
                wellSection.addClass("well");
                // Add an id to the well to mark which well it is
                wellSection.attr("id", "book-well-" + i);
                // Append the well to the well section
                $("#well-section").append(wellSection);
            
                // Now  we add our book data to the well we just placed on the page
                $("#book-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");
                $("#book-well-" + i).append("<h3>Author: " + data[i].author + "</h4>");
                $("#book-well-" + i).append("<h3>Genre: " + data[i].genre + "</h4>");
                $("#book-well-" + i).append("<h3>Pages: " + data[i].pages + "</h4>");
            }
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
