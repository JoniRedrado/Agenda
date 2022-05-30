const header = document.querySelector('header');



//Recuperando elementos de LocalStorage para el titulo
const insertTitle = () => {
  const title = document.createElement('h1');
  const username = `${localStorage.getItem('username')} ${localStorage.getItem('lastname')}`;

  title.innerText = username;
  header.insertBefore(title, header.childNodes[0]);
};


//Recuperando el color elegido para el tema del LocalStorage
const setTheme = () => {
  const theme = document.getElementById('background');
  const color = localStorage.getItem('color');

  theme.style.background = color;
};


insertTitle();
setTheme();



const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const domicilio = document.getElementById('domicilio');
const cumple = document.getElementById('cumple');
const agregarContacto = document.getElementById('agregarContacto');



let contador = 1;

  
const contacts = document.getElementById('contactos');



const addContact = () => {
  const contenedor = document.createElement('ul');
  const id = document.createElement('li');
  id.innerText = contador;
  

  const nombreCompleto = `${apellido.value} ${nombre.value}`;
  const fullName = document.createElement('li');
  fullName.innerText = nombreCompleto;


  const email = document.createElement('li');
  email.innerText = correo.value;


  const address = document.createElement('li');
  address.innerText = domicilio.value;


  const birthday = document.createElement('li');
  birthday.innerText = cumple.value;

  
  contenedor.append(id, fullName, email, address, birthday);
  contador++;

  contacts.append(contenedor)
  
  console.log(contenedor);
};

const limpiarCampos = () =>{
  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('correo').value = '';
  document.getElementById('domicilio').value = '';
  document.getElementById('cumple').value = '';
};

const validarCampos = () => {
  if (nombre.value == '' || apellido.value == '' || correo.value == '' || domicilio.value == '' || cumple.value == ''){
  swal({
    title: "Error!",
    text: "Debes completar todos los campos",
    icon: "error",
    button: "Aceptar",
  })} else {
    addContact();
    limpiarCampos();
    swal({
      title: "Listo!",
      text: "El contacto se ha agregado correctamente",
      icon: "success",
      button: "Aceptar",
    });
  }

};


agregarContacto.addEventListener('click', () =>{
  
  validarCampos();
  
  
})

