

let menu = document.getElementById('open-arrow');
let navlist = document.getElementById('nav_list');
let close = document.getElementById('close');

menu.onclick = () => {
    navlist.classList.toggle('open')
}
close.onclick = () => {
    navlist.classList.remove('open')
}