let a = 10;
alert(a);
a = 20;
alert(a);

let year = 2007;
alert(year);

let nameCreator = 'Brendan';
alert(nameCreator);

a = 10;
b = 2;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);

result = b**5;
alert(result);

a = 9;
b =  2;
alert(a % b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

let userName = prompt("Как вас зовут?");
alert(`Привет, ${userName}!`);

const user = {
    name: 'Печенька',
    age: 3,
    isAdmin: false
};

let password = '12345';
let value = prompt('Введите пароль');
if (value === password) {
    console.log("Пароль введен верно")
} else {
    console.log("Пароль введен неправильно")
}

let c = 7;
if (c > 0 && c < 10) {
    console.log("Верно")
} else {
    console.log("Неверно")
}
c = 0;
if (c > 0 && c < 10) {
    console.log("Верно")
} else {
    console.log("Неверно")
}
c = 10;
if (c > 0 && c < 10) {
    console.log("Верно")
} else {
    console.log("Неверно")
}
c = -3;
if (c > 0 && c < 10) {
    console.log("Верно")
} else {
    console.log("Неверно")
}
c = 2
if (c > 0 && c < 10) {
    console.log("Верно")
} else {
    console.log("Неверно")
}

let d = 101;
let e = 16;
if (d > 100 || e > 100) {
    console.log("Верно")
} else {
    console.log("Неверно")
}

let aa = '2';
let bb = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(aa) + Number(bb));

let monthNumber = 12;
switch (monthNumber) {
   case 12: case 1: case 2:
      console.log("зима");
      break;
   case 3: case 4: case 5:
      console.log("весна");
      break;
    case 6: case 7: case 8:
        console.log("лето");
        break;
    case 9: case 10: case 11:
        console.log("осень");
        break;
   default:
      console.log('Нет времени года для такого месяца');
}

for (let i = 1; i < 3; i++) {
    console.log('Привет');
}

let i = 1;
while (i < 6) {
    console.log(i);
    i++;
}

for (let i = 7; i < 23; i++) {
    console.log(i);
}

const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

let n = 1000;
do {
   console.log(n / 2);
   n = n / 2
} while(n > 50);

let v = Number(prompt('Введите число дня первой пятницы в месяце'))
do {
    console.log(`Сегодня пятница, ${v}-е число`);
    v+=7;
} while (v<=31)