const body = document.querySelector('.body');
const burger = document.querySelector('#burger_toggle');

burger.addEventListener('click', (event) => {
    body.classList.toggle('body_overflow');
}
)