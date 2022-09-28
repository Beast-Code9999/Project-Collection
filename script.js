const footer = document.querySelector('.footer__year');
console.log(footer)
let year = new Date().getFullYear()
footer.textContent = year;