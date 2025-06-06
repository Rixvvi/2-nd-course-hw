function less(a, b) {
    if (a > b) {return a} else if (b > a) {return b} else {return a}
}
console.log(less(8, 4))
console.log(less(4, 9))
console.log(less(6, 6))

function parity(c) {
    if (c % 2 == 0) {return 'Число четное'} else {return 'Число нечетное'}
}
console.log(parity(9))
console.log(parity(8))

function square(d) {
    console.log(d**2);
}
square(2)
function squarecons(d) {
    let cons = d ** 2;
    return cons;
}
console.log(squarecons(4))

function foo() {
    a = prompt('Сколько вам лет?')
    if (a < 0) {return 'Вы ввели неправильное значение'} else if (0 < a && a < 13) {return 'Привет, друг!'} else {return 'Добро пожаловать!'}
}
console.log(foo())

function check(v, n) {
    if (isNaN(v) || isNaN(n)) {return 'Одно или оба значения не являются числом'} else if (typeof v !== 'number' || typeof n !== 'number') {return 'Одно или оба значения не являются числом'} else {return v*n}
}
console.log(check(2, 8))
console.log(check('', 3))
console.log(check(NaN, 10))

function algorithm(k) {
    if (typeof k === 'number' && !isNaN(k)) {return `${k} в кубе равняется ${k**3}`} else {return 'Переданный параметр не является числом'}
}
console.log(algorithm(0))
console.log(algorithm(1))
console.log(algorithm(2))
console.log(algorithm(3))
console.log(algorithm(4))
console.log(algorithm(5))
console.log(algorithm(6))
console.log(algorithm(7))
console.log(algorithm(8))
console.log(algorithm(9))
console.log(algorithm(10))

function getArea() {return this.radius * 2 * Math.PI}
function getPerimeter() {return this.radius ** 2 * Math.PI}
const circle1 = {
    radius: 3,
    getArea: getArea,
    getPerimeter: getPerimeter
}
const circle2 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter
}
console.log(circle1.getArea())
console.log(circle1.getPerimeter())
console.log(circle2.getArea())
console.log(circle2.getPerimeter())