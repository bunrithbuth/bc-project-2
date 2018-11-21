fetch('/api/poll/1', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
}).then(r => {
    console.log(r)  
}).catch(e => 
    console.error(e)
)