function orderTour() {
    alert("Функция заказа тура в разработке!");
}
document.querySelector('.quad-order-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    this.reset();
});

function openOrderModal(routeName) {
    const modal = document.getElementById('orderModal');
    const selectedRoute = document.getElementById('selectedRoute');
    selectedRoute.textContent = `Вы выбрали: ${routeName}`;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'none';
}

document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Ваш заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.');
    closeModal();
    this.reset();
});

window.addEventListener('click', function (e) {
    const modal = document.getElementById('orderModal');
    if (e.target === modal) {
        closeModal();
    }
});

window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

let lastScroll = 0;
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

// Добавляем отступ для body, чтобы контент не прыгал
document.body.style.paddingTop = headerHeight + 'px';

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('header-hidden');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('header-hidden')) {

        header.classList.add('header-hidden');
    } else if (currentScroll < lastScroll && header.classList.contains('header-hidden')) {

        header.classList.remove('header-hidden');
    }
    
    lastScroll = currentScroll;
});

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-section');
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
});

const backToTopButton = document.createElement('div');
backToTopButton.className = 'back-to-top';
backToTopButton.innerHTML = '↑';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function orderTour(tourName = '') {
    const modal = document.getElementById('orderModal');
    const selectedRoute = document.getElementById('selectedRoute');
    
    if (tourName) {
        selectedRoute.textContent = `Вы выбрали: ${tourName}`;
    } else {
        selectedRoute.textContent = 'Заказ тура';
    }
    
    modal.style.display = 'flex';
}
