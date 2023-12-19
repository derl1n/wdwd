const slider = document.querySelector('.slider');// Отримання посилання на елемент з класом "slider" (сам слайдер) за допомогою методу document.querySelector
let currentIndex = 0;// Змінна "currentIndex" відстежує поточний індекс слайда
function nextSlide() { // Визначає, який слайд буде показаний далі
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSlider(); 
}
function updateSlider() { // Оновлює відображення слайдера залежно від поточного індексу
    const offset = currentIndex * -100; // У цьому рядку обчислюється зміщення (offset), яке вказує, на скільки відсотків потрібно перемістити слайдер у бік
    slider.style.transform = `translateX(${offset}%)`; // Ця стрічка коду встановлює анімаційне перетворення "transform" для зсуву слайдера
}
setInterval(nextSlide, 13500); // Змінює слайд кожні 13,5 секунд
updateSlider(); // Ініціалізуємо слайдер при завантаженні сторінки

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("vidguk-forma");
    const thanks = document.getElementById("thanks");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Запобігаємо відправленню форми
        thanks.style.display = "block"; // Показуємо повідомлення подяки

        // Через 4 секунди приховуємо повідомлення подяки
        setTimeout(function() {
            thanks.style.display = "none";
        }, 11000);

       form.reset();  // Очищуємо форму
    });
});

var audio;

function playAudio(audioPath) {
  if (audio && !audio.paused) {
    stopAudio();
  }

  if (!audio) {
    audio = new Audio();
  }

  audio.src = audioPath;

  audio.play();
}

function stopAudio() {
  if (audio) {
    audio.pause();
    document.getElementById('audioPath').innerText = '';
  }
}
