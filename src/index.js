import './styles/global.css'
import './styles/modern-normalize.css'
import { renderMenu,menuToggle } from './modules/menu/index.js'
import {renderFormTask} from './modules/task/index.js'


document.addEventListener('DOMContentLoaded',() => {
    renderMenu();
    menuToggle();
    renderFormTask();
})
