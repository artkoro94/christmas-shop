const body = document.querySelector('.body');
const burger = document.querySelector('#burger_toggle');

burger.addEventListener('click', (event) => {
    body.classList.toggle('body_overflow');
}
)

// Carousel

let offset = 0;
const sliderLine = document.querySelector('.carousel');

document.querySelector('.button_right').addEventListener('click', function(){
    offset = offset - 182;
    if (offset <= -728) {
        offset = -728;
    }
    sliderLine.style.left = offset + 'px';
});

document.querySelector('.button_left').addEventListener('click', function(){
    offset = offset + 182;
    if (offset > 0) {
        offset = 0;
    }
    sliderLine.style.left = offset + 'px';
});

// Timer

let date = new Date('Jan 01 2025 00:00:00');

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