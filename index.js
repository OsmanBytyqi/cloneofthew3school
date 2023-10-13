const button = document.getElementById('menu-btn')
const navigation = document.getElementById('menu')

function navToggle() {
    button.classList.toggle('open');
    navigation.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll')

}
button.addEventListener('click', navToggle)


