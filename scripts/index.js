// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: 'Steve Jobs',
      email: 'steve@jobs.com',
      password: 'Steve123',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'shanna@melissa.tv',
      password: 'Ervin345',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'nathan@yesenia.net',
      password: 'Floppy39876',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'julianne.oconner@kory.org',
      password: 'MysuperPassword345',
    },
  ],
};

// ACTIVIDAD

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.

const form = document.querySelector('form');
const h1 = document.querySelector('h1');
const welcome = document.querySelector('#welcome');
const btnLogin = document.querySelector('.login-btn');
const email = document.querySelector('.input-container #email-input');
const password = document.querySelector('.input-container #password-input');
const statusSesion = document.querySelector('#status-container #loader');
const errorTitle = document.querySelector('#status-container #error-container');

// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.
// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."

// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.

let errBad = [];

email.addEventListener('change', () => {
  errBad = [];
  validateEmail(email.value);
  errormessage();
  console.log(errBad);
});

password.addEventListener('change', () => {
  errBad = [];
  validatePassword(password.value);
  errormessage();
  console.log(errBad);
});

function validateEmail(email) {
  if (
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
      email
    )
  ) {
    console.log('email bueno');
  } else {
    errBad.push('Por favor ingrese un email valido');
  }
  // console.log(errBad);
}

// 2) Que la contraseña tenga al menos 5 caracteres.

function validatePassword(password) {
  if (password.length < 5) {
    errBad.push('La contraseña debe tener al menos 5 caracteres');
  } else {
    errBad = [];
  }
  // console.log(errBad);
}

function errormessage() {
  if (errBad.length !== 0) {
    errorTitle.classList.remove('hidden');
    errorTitle.innerHTML = `<small> ${errBad}</small>`;
  } else {
    errorTitle.classList.add('hidden');
  }
}
// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"

// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.

btnLogin.addEventListener('click', () => {
  statusSesion.classList.remove('hidden');
  setTimeout(() => {
    statusSesion.classList.add('hidden');
  }, 3000);
  searchData();
});

function searchData() {
  baseDeDatos.usuarios.forEach((user) => {
    if (email.value == user.email && password.value == user.password) {
      welcome.classList.remove('hidden');
      form.classList.add('hidden');
      h1.classList.add('hidden');
    } else {
      console.log('The email or the password is wrong, please checked again');
    }
  });
}
