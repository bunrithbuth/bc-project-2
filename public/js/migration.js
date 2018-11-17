let poll = {
    user: 'bunrith',
    name: 'test poll',
    type: 'star',
    isPrivate: 0,
    time: 2,
    duration: 'weeks',
    pollOption: [
        {
            name: 'McDonalds',
            description: 'Im Lovin It'
        },
        {
            name: 'Burger King',
            description: 'Have it your way'
        }
    ]
}

fetch('/api/poll', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(poll)
}).then(r => {
    console.log(r)  
}).catch(e => 
    console.error(e)
)