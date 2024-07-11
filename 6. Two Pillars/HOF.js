const title = document.getElementById('title');
let user = {
    found: false,
    name: undefined,
    role: undefined
}
const users = [
    {
      username: 'johnDoe',
      password: 'password1',
      role: 'admin'
    },
    {
      username: 'Bilal',
      password: 'admin',
      role: 'admin'
    },
    {
      username: 'bilal',
      password: 'bilal',
      role: 'employee'
    },
    {
      username: 'emmaJohnson',
      password: 'password4',
      role: 'employee'
    },
    {
      username: 'williamBrown',
      password: 'password5',
      role: 'employee'
    },
    {
      username: 'oliviaJones',
      password: 'password6',
      role: 'employee'
    },
    {
      username: 'jamesGarcia',
      password: 'password7',
      role: 'employee'
    },
    {
      username: 'sophiaMartinez',
      password: 'password8',
      role: 'employee'
    },
    {
      username: 'benjaminLee',
      password: 'password9',
      role: 'employee'
    },
    {
      username: 'miaWilson',
      password: 'password10',
      role: 'employee'
    }
];

function verifyUser(_username, _password) {
    for (let i = 0; i < users.length; i++) {
        if(users[i].password === _password && users[i].username === _username) {
            if (users[i].role === 'admin')
                title.innerHTML = `Welcome Admin ${_username}!`;
            else
                title.innerHTML = `Welcome Employee ${_username}!`;
            user.found = true;
            user.name = _username;
            user.role = users[i].role;
            break;

        }
    }
    if (!user.found) title.innerHTML = 'User not found!'
}

function showProfile(_username) {
    title.innerHTML = `Profile page of ${user.name}, Role: ${user.role}`;
}

function system(fn, _username, _password = null) {
    if (_password === null)
        fn(_username);
    else
        fn(_username, _password);
}