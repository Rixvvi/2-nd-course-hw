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
aa = 2;
bb = 3;
alert(aa + bb);


let monthNumber = 12;

switch (monthNumber) {
   case monthNumber === 12 || monthNumber === 1 || monthNumber === 2:
      console.log("зима");
      break;
   case monthNumber === 3 || monthNumber === 4 || monthNumber === 5:
      console.log("весна");
      break;
    case monthNumber === 6 || monthNumber === 7 || monthNumber === 8:
        console.log("лето");
        break;
    case monthNumber === 9 || monthNumber === 10 || monthNumber === 11:
        console.log("осень");
        break;
   default:
      console.log('Месяцев всего 12');
}