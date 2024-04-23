//Индексный файл в котором расположена логика скриптов


// !!! ФУНКЦИЯ ОТСЧЁТА !!!
function updateCounter(targetDate, counter, interval){
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    const hours = Math.floor(timeDifference % (1000 * 60 * 60 * 24) / (1000* 60 * 60))
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000).toString().padStart(2, '0');

    counter.textContent = `${hours}:${minutes}:${seconds}`

    if (timeDifference <= 0) {
        clearInterval(interval);
      }
}

export { updateCounter }