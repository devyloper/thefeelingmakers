
// const navbar = document.querySelector('.nav');
// const hero = document.querySelector('.hero');
// const logo = document.querySelector('#logo');
// const heroOptions = {
//   rootMargin: "-170px 0px 0px 0px"
// };
// const heroObserver = new IntersectionObserver(function (
//     entries,
//     heroObserver
//     ) {
//     entries.forEach(entry => {
//       if(!entry.isIntersecting) {
//         navbar.classList.add('nav-scrolled');
//         logo.classList.remove('logo-scrolled');
//       } else {
//         navbar.classList.remove('nav-scrolled');
//         logo.classlist.add('logo-scrolled');
//       }
//   });
// }, 
// heroOptions);

// heroObserver.observe(hero);

// var form = document.getElementById('sheetdb-form');
// form.addEventListener("submit", e => {
//   e.preventDefault();
//   fetch(form.action, {
//       method : "POST",
//       body: new FormData(document.getElementById("sheetdb-form")),
//   }).then(
//       response => response.json()
//   ).then((html) => {
//     // you can put any JS code here
//     window.open('success.html');

//   });
// });



function myFunction() {
  var element = document.getElementById("navtoggle");
  element.classList.toggle("hamopen");
}

function toggleNav() {
  var togglenavigation = document.getElementById("navlink");
  console.log("working");
  togglenavigation.classList.toggle("lists");
}