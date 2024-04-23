import { updateCounter } from '../src/scripts/index.js'
//Вызов функции отсчёта

const countDownElement = document.getElementById('clock') //Получаем id блока с куда будет выводится отсчёт
const targetDate = new Date('2024-04-26T12:00:00').getTime()

const intervalId = setInterval(() => {
    updateCounter(targetDate, countDownElement, intervalId)
}, 1000);

