//
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
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
// - створити функцію яка повертає найменьше число з масиву
// let array = [4,19,7,8];
//
// let f=(array)=>{
//     let count=array[0];
//     for (const arrayElement of array) {
//         if (arrayElement<count){
//             count=arrayElement;
//
//         }
//
//     }
// return count
// }
// console.log(f(array));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array =[1,2,10];
// let f=(arr)=>{
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum+=array[i];
//     }
//     return sum
// }
// console.log(f(array))
//
//
//
//
// - Дано натуральное число n. Выведите все числа от 1 до n.
// let n = +prompt('Chislo');
// let f= (ch)=>{
//     for (let i = 1; i <= ch; i++) {
//         console.log(i)
//     }
// }
// f(n);
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
// let a = +prompt('A');
// let b = +prompt('B');
// let f=(ch1,ch2)=>{
//     if (ch1<ch2){
//         for (let i = ch1; i <= ch2 ; i++) {
//             console.log(i)
//         }
//     }else{
//         for (let i = ch1; i >= ch2 ; i--) {
//             console.log(i)
//         }
//     }
// }
// f(a,b)
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let arr = [9,8,0,4];
// let chI =2;
// let f=(array, numI)=>{
//     for (let i = 0; i < array.length; i++) {
//         if (i===numI){
//             let b = array[i];
//             array[i]=array[i+1];
//             array[i+1]=b;
//         }
//     }
//
//
//
// return array
// }
// console.log(f(arr, chI));
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let array=[0,0,1,0]
// let f=(arr)=>{
//     let gg = array.length;
//     for (let i = 0; i < gg; i++) {
//         if (arr[i]===0){
//             arr.push(0);
//             arr.splice(i,1);
//             gg--;
//             i--;
//
//
//         }
//     }
//     return arr
// }
// console.log(f(array))
