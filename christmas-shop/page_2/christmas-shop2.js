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

    // Открытие модалки с динамическими данными

        document.querySelectorAll(".gift_card").forEach(card => {
            card.onclick = function() {
            const title = card.getAttribute("data-title");
            const text = card.getAttribute("data-text");
            const imgSrc = card.getAttribute("data-img");
            const newText = card.getAttribute("data-new-text");
        
            document.getElementById("modalTitle").textContent = title;
            document.getElementById("modalText").textContent = text;
            document.getElementById("modalExtraText").textContent = newText;
            document.getElementById("modalImg").src = imgSrc;
        
            document.getElementById("modal").style.display = "flex";
            };
        });
        
    // Закрытие модалки

        document.querySelector(".close").onclick = function() {
            document.getElementById("modal").style.display = "none";
        };
    
    // Закрытие при клике вне окна

        window.onclick = function(event) {
            if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
            }
        };



/* 2 page options */

    const optionBlocks = document.querySelectorAll('.options_block');

    optionBlocks.forEach(block => {
        block.addEventListener('click', () => {
            optionBlocks.forEach(item => item.classList.remove('active'));

            block.classList.add('active');
        });
    });