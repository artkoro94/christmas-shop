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
