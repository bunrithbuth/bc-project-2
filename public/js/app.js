//Elements Variables
const submit = document.getElementById('submit')
const pollsOtions = document.getElementById('pollsOptions')
const pollsForm = document.getElementById('pollsForm')
const stars = document.getElementsByClassName('stars')[0]
const multiple = document.getElementsByClassName('multiple')[0]
const twoChoices = document.getElementsByClassName('twoChoices')[0]

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


document.getElementById('starForm').addEventListener('click', () => {
    pollsOtions.style.display = "none"
    pollsForm.style.display = "block"
    console.log(stars)
    stars.style.display = "inline-block"
    submit.setAttribute("data-type", "stars")
})

document.getElementById('multipleForm').addEventListener('click', () => {
    pollsOptions.style.display = "none"
    pollsForm.style.display = "block"
    multiple.style.display = "block"
    submit.setAttribute("data-type", "multiple")
})

document.getElementById('twoChoicesForm').addEventListener('click', () => {
    pollsOptions.style.display = "none"
    pollsForm.style.display = "block"
    twoChoices.style.display = "block"
    submit.setAttribute("data-type", "twoChoices")
})