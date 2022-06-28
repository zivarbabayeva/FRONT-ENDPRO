
function check() {
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('psw');

    var userName = document.getElementById('userName');
    var userPsw = document.getElementById('userPsw');
    var userRemember = document.getElementById("rememberMe");

    if (userName.value == storedName && userPsw.value == storedPsw) {
        alert('You are logged in.');
    } else {
        alert('Error on login');
    }
}
function Submit() {
    let value = document.getElementById('input').value;
    localStorage.setItem('user', value);
}
let username = document.getElementById('username');
let login_user = localStorage.getItem('user');
username.innerHTML = login_user;
if (localStorage.getItem === null) {
    localStorage.setItem('users', JSON.stringify([]));
}

function Register() {
    let userName = document.getElementById('username').value
    let email = document.getElementById('email').value
    let password = document.getElementById('psw').value
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (userName === '' || email === '' || password === '') {
        alert('Butun melumatlari doldurun!!!!');
    }
    else if (psw.value.length > 8) {
        alert('Max of 8');

    } else if (!psw.value.match(numbers)) {
        alert('please add 1 number');

    } else if (!psw.value.match(upperCaseLetters)) {
        alert('please add 1 uppercase letter');

    } else if (!psw.value.match(lowerCaseLetters)) {
        alert('please add 1 lovercase letter');
    }
    else {
        let basket = JSON.parse(localStorage.getItem('users'));
        basket.push({
            name: userName,
            email: email,
            password: password
        })
        localStorage.setItem('users', JSON.stringify(basket));
        alert(`${username} adli istifadeci elave edildi`)
    }
}
function GetUsers() {
    let basket = JSON.parse(localStorage.getItem('users'))
    console.log(basket);
    let user = '';
    basket.forEach(x => {
        user += `
        <ul>
                <li>Username:${x.name}</li>
                <li>Email:${x.email}</li>
        </ul>
        `
    });
    document.getElementById('list').innerHTML = user;
}
GetUsers();


function login() {
    var inputUsername = localStorage.getItem("username");
    var inputPassword = localStorage.getItem("password");
   
    if (username != "undefined" || username != "null" || password != "undefined" || password !="null")
    {
       document.getElementByID('welcomeMessage').innerHTML = "Welcome " + username + "!";
       } else
        document.getElementById('welcomeMessage').innerHTML = "Hello!";
        }