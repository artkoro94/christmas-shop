/* Burger */

    // появление бургер-блока

        const body = document.body;
        const burger = document.querySelector('#burger_toggle');

        burger.addEventListener('click', () => {
            body.classList.toggle('body_overflow');

            if (burger.checked) {
                body.style.overflow = "hidden";
            } else {
                body.style.overflow = "";
            }
        });

    // сокрытие бургер-блока при нажатии на якорь

        const menuIcon = document.querySelector('.burger_menu');
        const burgerMenu = document.querySelector('ul');
        const burgerOverflowVisible = document.querySelector('.body_overflow_visible');
        const menuLinks = document.querySelectorAll('ul a');

        burgerMenu.addEventListener('click', (event) => {
            menuIcon.classList.toggle('burger_hidden');
            body.classList.toggle('body_overflow_visible');
            burger.checked = false;
        }
        )

        burger.addEventListener('change', () => {
            if (burger.checked) {
                menuIcon.classList.remove('burger_hidden'); // Показываем бургер
                body.classList.add('body_overflow');
            } else {
                menuIcon.classList.add('burger_hidden');
                body.classList.remove('body_overflow'); // Прячем бургер
                body.style.removeProperty('overflow');
            }
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                burger.checked = false; // Закрываем бургер
                burger.dispatchEvent(new Event('change')); // Принудительно вызываем событие "change"
            });
        });


/* Carousel */

const sliderLine = document.querySelector('.carousel');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
let offset = 0; // Текущее смещение
let moveDistance = 0; // Движение за один клик
let maxOffset = 0; // Максимальное смещение
let paddingStart = 0; // Начальный отступ карусели

// Функция для расчёта параметров

function calculateSliderParams() {
    const visibleWidth = sliderLine.parentElement.offsetWidth; // Видимая ширина
    const totalWidth = sliderLine.scrollWidth; // Полная ширина слайдера
    const numClicks = window.innerWidth >= 769 ? 3 : 6; // Количество кликов для полного скролла

    const style = window.getComputedStyle(sliderLine); // Получаем стили карусели
    paddingStart = parseInt(style.paddingLeft) || 0; // Отступ в начале (padding-left)

    moveDistance = Math.ceil((totalWidth - visibleWidth + paddingStart) / numClicks); // Шаг движения
    maxOffset = -(totalWidth - visibleWidth + paddingStart); // Максимально допустимое смещение

    if (moveDistance < 1) moveDistance = visibleWidth;
}

// Функция для обновления кнопок

function updateButtons() {

    // Правая кнопка

    if (offset <= maxOffset) {
        rightButton.disabled = true;
        rightButton.classList.add('button_right_disabled');
        rightButton.classList.add('button_disabled');
    } else {
        rightButton.disabled = false;
        rightButton.classList.remove('button_right_disabled');
        rightButton.classList.remove('button_disabled');
    }

    // Левая кнопка

    if (offset >= -1) {
        leftButton.disabled = true;
        leftButton.classList.add('button_left_enabled');
        leftButton.classList.add('button_disabled');
    } else {
        leftButton.disabled = false;
        leftButton.classList.remove('button_left_enabled');
        leftButton.classList.remove('button_disabled');
    }
}

// Обработчик для кнопки "Вправо"

rightButton.addEventListener('click', () => {
    if (offset > maxOffset) { // Проверяем, можно ли двигаться дальше
        offset -= moveDistance; // Сдвигаем вправо
        if (offset < maxOffset) offset = maxOffset; // Ограничиваем крайнюю точку
        sliderLine.style.transform = `translateX(${offset}px)`; // Применяем смещение
    }
    updateButtons();
});

// Обработчик для кнопки "Влево"

leftButton.addEventListener('click', () => {
    if (offset < 0) { // Проверяем, можно ли двигаться влево
        offset += moveDistance; // Сдвигаем влево
        if (offset > 0) offset = 0; // Ограничиваем начальную точку
        sliderLine.style.transform = `translateX(${offset}px)`; // Применяем смещение
    }
    updateButtons();
});

// Функция инициализации

function initializeSlider() {
    calculateSliderParams(); // Рассчитываем параметры
    offset = 0;
    updateButtons(); // Устанавливаем состояние кнопок
    sliderLine.style.transform = `translateX(${offset}px)`; // Обнуляем позицию слайдера
}

// Обновляем слайдер при загрузке страницы и изменении размеров окна

window.addEventListener('load', initializeSlider);
window.addEventListener('resize', initializeSlider);

/* Timer */

let date = new Date('Jan 01 2026 00:00:00');

function counts(){
    let now = new Date();
    gap = date - now;
    console.log(gap);

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;
    console.log(days);

    if (gap < 0) {
        document.querySelector('.CTA_timer_container').innerText = 'Happy New Year!';
    } else {
    document.getElementById('days_number').innerText = days;
    document.getElementById('hours_number').innerText = hours;
    document.getElementById('minutes_number').innerText = minutes;
    document.getElementById('seconds_number').innerText = seconds;
    }
}
counts();

setInterval(counts, 1000);