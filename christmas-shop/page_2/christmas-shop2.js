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


/* Modal */

    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const openCards = document.querySelectorAll(".openModal");
    const closeBtn = document.getElementById("closeModal");

    // Открытие модалки

        openCards.forEach((card) => {
        card.addEventListener("click", () => {
            modalTitle.textContent = card.getAttribute("data-title");
            modalText.textContent = card.getAttribute("data-text");

            modal.style.display = "flex";
        });
        });

    // Закрытие по крестику

        closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        });

    // Закрытие по клику на затемнение

        window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
        });
