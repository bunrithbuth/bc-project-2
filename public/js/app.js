document.getElementById('submit').addEventListener('click', function() {
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