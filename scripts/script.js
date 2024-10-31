const toggleMenu = () => {
    const tdc = document.getElementById('tdc')
    tdc.innerText = "TRABAJA EN TCD" ;
    let classname = 'menuDesplegableActive'
    menuDesplegable.classList.toggle(classname)
};
const menuDesplegable = document.getElementById('menuDesplegableInactive')
const toggleButton = document.getElementById('toggle'); 
toggleButton.addEventListener('click', () => {
    toggleMenu();
});

window.addEventListener('click', (event) => {
    if (menuDesplegable.classList.contains('menuDesplegableActive') && !menuDesplegable.contains(event.target) && !toggleButton.contains(event.target)) {
        menuDesplegable.classList.remove('menuDesplegableActive');
    }
});
