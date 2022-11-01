// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let one = 1;
let ten = 10;
let ninnin = -999;
let ontutri = 123;
let pi = 3.14;
let tuseven = 2.7;
let sixteen = 16;
let truemb = 5 > 4;
let falsemb = 5 > 8;

//     Вивести кожну змінну за допомогою: console.log
console.log(hello);
console.log(owu);
console.log(ua);
console.log(com);
console.log(one);
console.log(ten);
console.log(ninnin);
console.log(ontutri);
console.log(pi);
console.log(tuseven);
console.log(sixteen);
console.log(truemb);
console.log(falsemb);

//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firtsName='Stas';
let midName='Igorovich';
let lastName='Marchenkov';
let person =`${lastName} ${firtsName} ${midName} `;
console.log(person);
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let name = prompt('Your Name?');
let sur = prompt('Your SurName?');
let mid = prompt('Your MidName?');
console.log(`${name} ${sur} ${mid}`);
