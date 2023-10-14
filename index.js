const button = document.getElementById('menu-btn')
const navigation = document.getElementById('menu')
const darktheme = document.getElementById('dark-mode')
const navbar = document.getElementById("nav-bar")

function navToggle() {
    button.classList.toggle('open');
    navigation.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll')

}
button.addEventListener('click', navToggle)

function darkmode () {
    document.body.classList.toggle('darktheme')
    navbar.body.classList.toggle('darktheme')
}


darktheme.addEventListener("click", darkmode)