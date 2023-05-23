let iconlocation = document.querySelector('.location');
let card = document.querySelector('.card');
let actions = document.querySelector('.actions');


iconlocation.addEventListener('click', ()=>{
    iconlocation.classList.toggle('inactive');
    iconlocation.style.animation = "none";
    card.classList.toggle('active');
})

actions.addEventListener('click', ()=>{
    iconlocation.classList.toggle('inactive');
    card.classList.toggle('active');
})