window.addEventListener('load', function() {
    window.scrollTo(0, 0); // عندما يتم تحميل الصفحة، سيقوم بالتمرير إلى أعلى
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const firebaseConfig = {
    apiKey: "AIzaSyDfkQvGcjxM0ZiW_tpmistxhdFUcNPBvCw",
    authDomain: "turkar-foods.firebaseapp.com",
    databaseURL: "https://turkar-foods-default-rtdb.firebaseio.com",
    projectId: "turkar-foods",
    storageBucket: "turkar-foods.firebasestorage.app",
    messagingSenderId: "704665773139",
    appId: "1:704665773139:web:a6ba131261fb42457212a6"
    
  };


  const container = document.getElementById('container');
  const registerBtn = document.getElementById('register');
  const loginBtn = document.getElementById('login');
  
  registerBtn.addEventListener('click', () => {
      container.classList.add("active");
  });
  
  loginBtn.addEventListener('click', () => {
      container.classList.remove("active");
  });