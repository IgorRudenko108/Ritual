const searchButton = document.getElementById('searchButton');
const searchInputBox = document.getElementById('searchInputBox');
const searchInput = document.getElementById('searchInput');

// Відкриваємо поле вводу при натисканні на кнопку
searchButton.addEventListener('click', () => {
    if (searchInputBox.classList.contains('visible')) {
        // Якщо поле вводу вже відкрите, очищуємо його
        searchInput.value = ''; // Очищаємо поле вводу
    } else {
        // Якщо поле вводу не відкрите, відкриваємо його
        searchInputBox.classList.add('visible');
        searchInput.focus();  // Фокус на поле вводу після відкриття
    }
});

// Закриваємо поле вводу, якщо клікнути за межами
document.addEventListener('click', (event) => {
    if (!searchButton.contains(event.target) && !searchInputBox.contains(event.target)) {
        searchInputBox.classList.remove('visible');
    }
});

// ----------------------------------------------------------------------------------------------

const searchButton2 = document.getElementById('searchButton2');
const searchInputBox2 = document.getElementById('searchInputBox2');
const searchInput2 = document.getElementById('searchInput2');

// Відкриваємо поле вводу при натисканні на кнопку
searchButton2.addEventListener('click', () => {
    if (searchInputBox2.classList.contains('visible')) {
        // Якщо поле вводу вже відкрите, очищуємо його
        searchInput2.value = ''; // Очищаємо поле вводу
    } else {
        // Якщо поле вводу не відкрите, відкриваємо його
        searchInputBox2.classList.add('visible');
        searchInput2.focus();  // Фокус на поле вводу після відкриття
    }
});

// Закриваємо поле вводу, якщо клікнути за межами
document.addEventListener('click', (event) => {
    if (!searchButton2.contains(event.target) && !searchInputBox2.contains(event.target)) {
        searchInputBox2.classList.remove('visible');
    }
});

// ----------------------------------------------------------------------
