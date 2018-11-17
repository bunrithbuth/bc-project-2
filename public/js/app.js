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
    console.log('Clicked')
    fetch('/api/polls', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          type: document.querySelector('#submit').getAttribute('data-type'),
          user_name: 'Mearat',
          is_private: document.querySelector('#isPrivate').checked
        })
      })
        .then(r => {
          document.querySelector('#statement').value = ''
          document.querySelector('#isPrivate').checked = false
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

document.getElementById('add').addEventListener('click', () => {
    let optionCount = document.getElementsByClassName('options').length + 1
    let newOption = document.getElementById('multipleInput');
    newOption.insertAdjacentHTML('beforeend', `<input id="option${optionCount}" class="input-group-rounded options" type="text" placeholder="Option ${optionCount}">`);    
})
