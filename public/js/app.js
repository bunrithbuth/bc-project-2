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
                star_rating: 0,
                star_rating_count: 0,
                votes: 0
            }
        )
    }
    console.log(optionArr)
    console.log('Clicked')
    console.log(document.querySelector('#time').value)
    console.log(document.querySelector('#statement').value)
    console.log(document.querySelector('#isPrivate').checked)
    console.log(document.querySelector('#duration').value)
    fetch('/api/polls', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          type: document.querySelector('#submit').getAttribute('data-type'),
          name: document.querySelector('#statement').value,
          user: 'Mearat',
          poll_options: optionArr,
          is_private: document.querySelector('#isPrivate').checked,
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
