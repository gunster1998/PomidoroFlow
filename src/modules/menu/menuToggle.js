export function menuToggle () {
    const mainMenuElement = document.querySelector('.sidebar') 
    const miniMenuElement = document.querySelector('.sidebarMini')
    
    const contentElement = document.querySelector('#content')

    miniMenuElement.addEventListener ('mouseover', (event) => {
        mainMenuElement.classList.add('open')
        contentElement.classList.add('shifted')
    })
    mainMenuElement.addEventListener ('mouseover', (event) => {
        mainMenuElement.classList.add('open')
        contentElement.classList.add('shifted')
    })

    mainMenuElement.addEventListener ('mouseout', (event) => {
        mainMenuElement.classList.remove('open')
        contentElement.classList.remove('shifted')
    })

}