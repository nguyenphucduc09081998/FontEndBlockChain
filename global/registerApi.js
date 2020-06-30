import domain from '../global/domain';

const register = (email, password) => (

    fetch('http://' + domain +'/auth/register',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
);

module.exports = register;