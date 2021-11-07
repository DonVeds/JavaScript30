function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // заносим в переменную соотносящийся аудиофайл на странице
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // заносим в переменную соотносящуюся клавишу на странице
  if (!audio) return; // если data-key клавиши не находит соотносящегося аудиофайла - прерываем функцию
  audio.currentTime = 0; // создаем возможность не ждать полного проигрыша звука
  
  audio.play(); // воспроизводим звук

  key.classList.add("playing"); // добавляем класс к клавише на экране для старта визуального эффекта
};

function removeTransition(e){
  if (e.propertyName !== "transform") return; // не учитываем время выполнения других изменений
  
  this.classList.remove("playing"); // убираем класс чтобы вызвать обратные изменения вида
};

const keys = document.querySelectorAll(".key"); // заносим в переменную все клавиши на экране
keys.forEach(key => key.addEventListener("transitionend", removeTransition)); // добавляем на каждую клавишу по ловцу события при изменениях

window.addEventListener('keydown', playSound); // ловим сыбытия нажатия на клавиши и запускаем функцию playSound