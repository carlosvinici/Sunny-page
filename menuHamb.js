const menuHam = document.getElementById("btnMobl");

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    console.log("ok")
}

menuHam.addEventListener('click', toggleMenu);
menuHam.addEventListener('touchstart', toggleMenu);