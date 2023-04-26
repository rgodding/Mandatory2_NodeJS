export default function getUser(email, password){
    console.log('checking users');
    const user = users.find(user => user.name === email);
    if(user === undefined){
        return;
    }
    if(user.password === password){
        console.log('same name and password');
        return user;
    } else {
        console.log('same name and password');
        return;
    }
}
const users = [
    {name: 'admin', password: 'password', userkey: 'admin-key'},
    {name: 'user', password: 'password', userkey: 'user-key'}
]