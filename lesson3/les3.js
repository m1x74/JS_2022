// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let a = -1;
// let x = a;
// console.log(x);
//
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = Math.floor(Math.random()*60);
// console.log(time);
// let quarter;
// if (time <= 15) {
//     quarter = 1;
// }else if(time>15 && time<=30){
// quarter=2;
// }else if(time>30 && time<=45) {
//     quarter = 3;
// }else {
//     quarter=4;
// }
// console.log(quarter);


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day = Math.floor(Math.random()*31)+1;
// console.log(day);
// let decade;
// if (day <= 10) {
//     decade = 1;
// }else if(day>=11 && day<=20){
//     decade=2;
// }else {
//     decade=3;
// }
// console.log(decade);

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let day = +prompt('Введите число от 1 до 7');
// switch (day) {
//     case 1:
//         alert('Lesson');
//         break;
//     case 2:
//         alert('Autoschool');
//         break;
//     case 3:
//         alert('Basketball');
//         break;
//     case 4:
//         alert('Driving');
//         break;
//     case 5:
//         alert('Lesson');
//         break;
//     case 6:
//         alert('Rest');
//         break;
//     case 7:
//         alert('Game');
//         break;
//
// }
//
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
// let number1 = +prompt('Choose Number 1');
// let number2 = +prompt('Choose Number 2');
// if (number1 > number2) {
//     alert(number1);
// } else if (number2 > number1) {
//     alert(number2);
// } else {
//     alert('Числа равны')
// }


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x=+prompt()|| 'default';
console.log(x);