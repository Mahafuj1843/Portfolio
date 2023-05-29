const humburger = document.querySelector('#humburger');
const menu = document.querySelector('#menu');
const opens = document.querySelector('#open');
const closes = document.querySelector('#close');
const hLink = document.querySelectorAll('#hLink');

const moon = document.querySelector('#moon');
const sun = document.querySelector('#sun');
const black = document.querySelector('#black');
const white = document.querySelector('#white');

humburger.addEventListener("click", ()=>{
    menu.classList.toggle("active");
    opens.classList.toggle("hidden");
    closes.classList.toggle('hidden');
})

hLink.forEach(link=>{
    link.addEventListener("click", ()=>{
        menu.classList.toggle("active");
        opens.classList.toggle("hidden");
        closes.classList.toggle('hidden');
    })
  })

moon.addEventListener("click", ()=>{
    body.classList.toggle("dark");
    sun.classList.toggle("hidden");
    moon.classList.toggle("hidden");
    black.classList.toggle("hidden");
    white.classList.toggle("hidden");
})
sun.addEventListener("click", ()=>{
    body.classList.toggle("dark");
    sun.classList.toggle("hidden");
    moon.classList.toggle("hidden");
    black.classList.toggle("hidden");
    white.classList.toggle("hidden");
})