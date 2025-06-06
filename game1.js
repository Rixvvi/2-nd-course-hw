function getRandomInt(min=1, max=100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const b = Math.floor(Math.random() * (max - min + 1)) + min;
    while (true) {
        let a = prompt('Угадайте число в диапазоне от 1 до 100')
        a = Number(a)
        if (isNaN(a)) {
            alert('Введите корректное число');
            continue;
        }
        if (a > b) {
            alert('Загаданное число меньше');
            continue;
        } else if (a < b) {
            alert('Загаданное число больше');
            continue;
        } else if (a === b) {
            {return alert('Вы выиграли')}
        }
    }
}