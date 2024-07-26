import './styles.css';
import menuIcon from './assets/images/menu.svg';
console.log('menuIcon:', menuIcon)
const button = document.getElementById('dropdown-button');

const img = new Image();
img.src = menuIcon;
img.alt = 'menu';
img.width = 40;
img.height = 40;
console.log('Image element:', img);

button.appendChild(img);

const dropDownDiv = document.querySelector('.dropdown-content');
dropDownDiv.classList.add('visible');



