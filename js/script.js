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

let lastScrollTop = 0; // Переменная для хранения последней позиции прокрутки
const header = document.querySelector('header'); // Находим header

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Текущая позиция прокрутки

    if (scrollTop > lastScrollTop) {
        // Прокрутка вниз — скрываем header
        header.classList.add('hidden');
    } else {
        // Прокрутка вверх — показываем header
        header.classList.remove('hidden');
    }

    lastScrollTop = scrollTop; // Обновляем последнюю позицию прокрутки
});