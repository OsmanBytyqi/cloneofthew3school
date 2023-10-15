const button = document.getElementById('menu-btn')
const navigation = document.getElementById('menu')
const navbar = document.getElementById("nav-bar")

function navToggle() {
    button.classList.toggle('open');
    navigation.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll')

}
button.addEventListener('click', navToggle)


const darktheme = document.getElementById('dark-mode')
const root = document.querySelector(':root');
let isDarkMode = false;

const lightmode = {
  '--color-primary-20': '#000',
  '--color-primary-10': '#ffff',
  '--color-primary-30': '#E7E9EB',
  '--color-primary-40': '#f1f1f1',
  '--color-primary-50': 'c5c4c2',
};

const darkmode = {
  '--color-primary-10': '#1d2a35',
  '--color-primary-20': '#ddd',
  '--color-primary-30': '#1d2a35',
  '--color-primary-40': '#38444d',
  '--color-primary-50': '#38444d',
};

const toggleMode = () => {
    if (isDarkMode) {
        setVariables(lightmode);
    } else {
        setVariables(darkmode);
    }
    isDarkMode = !isDarkMode; // Toggle the mode
};

const setVariables = vars => {
    Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]));
};

darktheme.addEventListener('click', toggleMode);

