alert("Hey!")

const button = document.querySelector('#enter');
const login = document.querySelector('#login');
const pass = document.querySelector('#pass');

const rightLogin = "Test"
const rightPass = "109030"
function checkLogin() {
  if (login.value == "Test" && pass.value == "109030") {
    alert('Hi!')
    document.querySelector("#Bulb").style.display = "block"
  }
else {
  alert('Bye!')
  }
}


button.addEventListener('click', checkLogin)
