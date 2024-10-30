const toggleMenu = () => {
    let classname = 'menuDesplegableActive'
    menuDesplegable.classList.toggle(classname)
};
const menuDesplegable = document.getElementById('menuDesplegableInactive')
const toggleButton = document.getElementById('toggle'); 
toggleButton.addEventListener('click', () => {
    toggleMenu();
});
