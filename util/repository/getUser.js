export default function getUser(email, password){
    const user = users.find(user => user.name === email);
    if(user === undefined){
        return;
    }
    if(user.password === password){
        return user;
    } else {
        return;
    }
}
const users = [
    {name: 'admin', password: 'password', userkey: 'admin-key'},
    {name: 'user', password: 'password', userkey: 'user-key'}
]