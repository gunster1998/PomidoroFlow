import './styles/global.css'
import './styles/modern-normalize.css'
import { renderMenu,menuToggle } from './modules/menu/index.js'


document.addEventListener('DOMContentLoaded',() => {
    renderMenu();
    menuToggle();
})
