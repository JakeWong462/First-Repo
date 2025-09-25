const btn = document.querySelector('btn');
btn.addEventListener('click', submitName )
function submitName()
const btnHide = document.querySelector('#hide')
hamburger.addEventListener('click',() => {
    if (menuOpen == false) {
        navLinks.style.display = "block";
        menuOpen = true;
    }
    else if (menuOpen == true) {
        navLinks.style.display = "none";
        menuOpen = false;
    }
});
