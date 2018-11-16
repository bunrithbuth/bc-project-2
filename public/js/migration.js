let polls = {
    user: 'bunrith',
    name: 'test poll',
    type: 'star',
    is_private: 0,
    duration_days: 2,
    poll_options: [
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

fetch('/api/polls', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(polls)
}).then(r => {
    console.log(r)  
}).catch(e => 
    console.error(e)
)