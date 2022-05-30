const username = document.getElementById('nombre');
const lastname = document.getElementById('apellido');
const email = document.getElementById('correo');
const color = document.getElementById('color');
const btn = document.getElementById('boton')

btn.addEventListener('click', (e)=> { 
    
  if (username.value == '' || lastname.value =='' || email.value == ''){
    console.log('Enviar validación custom');
  } else {
    localStorage.setItem("color", color.value)
    localStorage.setItem("username", username.value)
    localStorage.setItem("lastname", lastname.value)
    localStorage.setItem("email", email.value)
  }



});

