// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let a =function (a,b) {
//     let s = a*b
//     return s
//
// }
// console.log(a(3,5))
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let f= function (r) {
//     let s = r**2*3.14;
//     return s
// }
// console.log(f(5))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let f =  (r,h)=>{
//     let s = 2*3.14*r*(h+r)
//     return s;
//
//
// }
// console.log(f(4,11))
// - створити функцію яка приймає масив та виводить кожен його елемент
// let array=[1,3,5,'dedde'];
// let f = (a)=>{
//     for (let i = 0; i < a.length; i++) {
//         console.log(a[i])
//
//     }
// }
// f(array)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let f =(a)=>{
//     document.write(`<p>${a}</p>`);
// }
// f('ahahahahha')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let f=(txt)=>{
//     document.write(`<ul><li>${txt}</li><li>${txt}</li><li>${txt}</li></ul>`)
// }
// f('raz');
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let f = (txt,count)=>{
//     document.write(`<ul>`)
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${txt}</li>`)
//     }
//     document.write(`</ul>`)
//
// }
// f('bro',15)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr=[123,5>7,false,'lol'];
// let f =(a)=>{
//     document.write(`<ul>`)
//     for (let i = 0; i < a.length; i++) {
//         document.write(`<li>${a[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// f(arr)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr=[{id:1,name:'Stas', age:15},{id:2,name:'Oleh', age:19},{id:3,name:'Katya', age:22}];
// let f =(a)=>{
//     for (const aElement of a) {
//         document.write(`<div>`)
//         document.write(`<h1>${aElement.id}</h1><h2>${aElement.name}</h2><h3>${aElement.age}</h3>`)
//         document.write(`</div>`)
//     }
// }
// f(arr);
// - створити функцію яка повертає найменьше число з масиву
// let arr=[14,12,4444,3,112];
//
// let f=(a)=>{
//     let max = a[0];
//     for (const elem of a) {
//         if (elem>max){
//             max=elem
//         }
//
//     }
//
// return max
// }
// console.log(f(arr))
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr=[1,2,10];
// let f=(a)=>{
//     let sum=0
//     for (const aElement of a) {
//      sum+=aElement
//     }
//     return sum
//
// }
// console.log(f(arr));