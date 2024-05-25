const container = document.querySelector('.page-container');
const pages = [...document.querySelectorAll('.page')];
const toggleBtn = document.querySelector('.toggle-btn');
const ul = document.querySelector('.nav-list');
const overlay = document.querySelector('.overlay');
const links = [...document.querySelectorAll('.link')];

let currentPageIndex = 0;

const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

toggleBtn.addEventListener('click', debounce(() => {
    toggleBtn.classList.toggle('active');
    container.classList.toggle('active');
    ul.classList.toggle('show');
}, 100));

const changePage = (i) => {
    overlay.style.animation = `slide 0.3s linear 1`;
    setTimeout(() => {
        pages[currentPageIndex].classList.remove('active');
        pages[i].classList.add('active');
        currentPageIndex = i;
    }, 150);
    setTimeout(() => {
        overlay.style.animation = null;
    }, 300);
}

links.forEach((item, i) => {
    item.addEventListener('click', debounce(() => {
        changePage(i);
    }, 100));
});