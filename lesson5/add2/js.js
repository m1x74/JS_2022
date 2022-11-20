// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let f=(a,b,c)=>{
//     if (a<b && a<c){
//         console.log('Наименьшее - А')
//     }else if(b<c && b<a){
//         console.log('Наименьшее - B')
//     }else {
//         console.log('Наименьшее - C')
//     }
// }
// f(4,2,3);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let f=(a,b,c)=>{
//     if (a>b && a>c){
//         console.log('Наибольшее - А')
//     }else if(b>c && b>a){
//         console.log('Наибольшее - B')
//     }else {
//         console.log('Наибольшее - C')
//     }
// }
// f(4,15,3);
// - створити функцію яка повертає найбільше число з масиву
// let array = [4,19,7,8];
//
// let f=(array)=>{
//     let count=array[0];
//     for (const arrayElement of array) {
//         if (arrayElement>count){
//             count=arrayElement;
//
//         }
//
//     }
// return count
// }
// console.log(f(array));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let f=(array)=>{
//     let sum=0;
//     let avg=0;
//     for (const arrayElement of array) {
//         sum+=arrayElement;
//         avg=sum/array.length
//     }
//     console.log(avg)
// }
// f([1,3,4,7]);
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function f(num) {
//     let min=arguments[0];
//     let max=arguments[0];
//     for (const element of arguments) {
//         if (element < min) {
//             min = element
//         }
//
//         if (element>max){
//             max=element
//         }
//
//     }
//     console.log(max);
//     return min;
//
// }
// document.write(f(4,5,6,8))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let f =(rand)=>{
//     let array=[];
//     for (let i = 0; i <rand ; i++) {
//         array.push(Math.round(Math.random()*100));
//     }
//
//     return array
// }
// console.log(f(5))
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let f =(rand,limit)=>{
//     let array=[];
//     for (let i = 0; i <rand ; i++) {
//         array.push(Math.round(Math.random()*limit));
//     }
//
//     return array
// }
// console.log(f(5,555))
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let f=(arr)=>{
//     let newarr=[];
//     for (let i = arr.length-1, ri = 0; i >= 0; i--, ri++) {
//         newarr[ri]=arr[i]
//     }
//     return newarr
// }
// console.log(f([1,2,3,4]))
//
//
//
//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function f() {
// //     if (arguments.length>=2){
// //         let sum=0;
// //         for (let i = 0; i < arguments.length; i++) {
// //             sum+=arguments[i]
// //         }
// //         console.log(sum)
// //     } else {
// //         console.log(arguments[0])
// //     }
// //
// // }
// // f(3,3);
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// let f=(arr1,arr2)=>{
//     let arr3=[];
//     for (const arr1Key in arr1) {
//         for (const arr2Key in arr2) {
//             if (arr1Key===arr2Key){
//                 arr3.push(arr1[arr1Key]+arr2[arr2Key])
//             }
//         }
//     }
//     return arr3
// }
// console.log(f([1,2,3,4],[2,2,2,2]))
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let f =(arr)=>{
//     let a=[];
//     for (let i = 0; i < arr.length; i++) {
//         let elem=arr[i];
//         for (const elemKey in elem) {
//             a.push(elemKey)
//         }
//     }
//     console.log(a)
//     }
//
//
// f([{name: 'Dima', age: 13}, {model: 'Camry'}])
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let f =(arr)=>{
//     let a=[];
//     for (let i = 0; i < arr.length; i++) {
//         let elem=arr[i];
//         for (const elemKey in elem) {
//             a.push(elem[elemKey])
//         }
//     }
//     console.log(a)
//     }
//
//
// f([{name: 'Dima', age: 13}, {model: 'Camry'}])