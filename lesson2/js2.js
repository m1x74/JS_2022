// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [];
array[0]='blabla'
console.log(array[0]);
array[1]='lolka'
console.log(array[1]);
array[2]=2121
console.log(array[2]);
array[3]='12'
console.log(array[3]);
array[4]=5>3
console.log(array[4]);
array[5]=6<2
console.log(array[5]);
array[6]='blablvnvnvnvnva'
console.log(array[6]);
array[7]=11111
console.log(array[7]);
array[8]=1.1
console.log(array[8]);
array[9]='Kiev'
console.log(array[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title: 'Dog', pageCount: 333, genre: 'romance'};
console.log(book1);
let book2 = {title: 'Cat', pageCount: 444, genre: 'drama'};
console.log(book2);
let book3 = {title: 'KidVsCat', pageCount: 212, genre: 'comedy'};
console.log(book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book1_1 = {
    title: 'Dog',
    pageCount: 333,
    genre: 'romance',
    authors: [{name: 'Oleg', age: 15}, {name: 'Vasya', age: 32}]
};
console.log(book1_1);
let book2_2 = {
    title: 'Cat',
    pageCount: 444,
    genre: 'drama',
    authors: [{name: 'Galya', age: 3}, {name: 'Kotik', age: 12}]
};
console.log(book2_2);
let book3_3 = {
    title: 'KidVsCat',
    pageCount: 212,
    genre: 'comedy',
    authors: [{name: 'Stas', age: 21}, {name: 'Serhiy', age: 35}]
};
console.log(book3_3);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let array2=[
    {name:'Raz',username:'sobakababaka',password:'qwerty3'},
    {name:'Dva',username:'kotnakot',password:'qwert1'},
    {name:'Tri',username:'fifa',password:'qwerty2'},
    {name:'Elochka',username:'pes',password:'qwertyb'},
    {name:'Gori',username:'lalal',password:'qwertydeeded'},
    {name:'Oleg',username:'dedeed',password:'qwertyaaa'},
    {name:'Andrey',username:'qwerty',password:'qwerty334'},
    {name:'Vasya',username:'lolka',password:'qwertyhyj'},
    {name:'Sasha',username:'zmyh',password:'qwerty555'},
    {name:'Lasha',username:'kekych',password:'qwertygtgt'}
];
console.log(array2[0].password);
console.log(array2[1].password);
console.log(array2[2].password);
console.log(array2[3].password);
console.log(array2[4].password);
console.log(array2[5].password);
console.log(array2[6].password);
console.log(array2[7].password);
console.log(array2[8].password);
console.log(array2[9].password);