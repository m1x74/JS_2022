// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname , email, phone){
//     this.id = id;
//     this.name =name;
//     this.surname =surname;
//     this.email =email;
//     this.phone =phone;
// }
// let array = [
//     user1 = new User(1, 'Sviat', 'Lolov', '213rr312@gmail.com', '380950000385'),
//     user2 = new User(9, 'Oleg', 'Kekov', '2131231w2@gmail.com', '380950000375'),
//     user3 = new User(6, 'Sergiy', 'Orov', '213f12312@gmail.com', '380950000105'),
//     user4 = new User(5, 'Max', 'Roflov', '213123a12@gmail.com', '380950000395'),
//     user5 = new User(7, 'John', 'Chocker', '21312312@gmail.com', '380950000605'),
//     user6 = new User(3, 'Derrick', 'Rose', '212312@gmail.com', '380950000304'),
//     user7 = new User(4, 'Gosha', 'Mose', '21312312nn2@gmail.com', '380950002305'),
//     user8 = new User(10, 'Olena', 'Molena', '212312@gmail.com', '380950000301'),
//     user9 = new User(2, 'Mariya', 'Mriya', '2112312@gmail.com', '380950000315'),
//     user10 = new User(8, 'Solomiya', 'Krasiva', '2131g312@gmail.com', '380950090305')
// ];
// console.log(array)
// //
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterid=array.filter(item=>!(item.id%2));
// console.log(filterid)
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortid = array.sort((a,b)=>a.id-b.id);
// console.log(sortid)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// function Client(id, name, surname , email, phone, order){
//     this.id = id;
//     this.name =name;
//     this.surname =surname;
//     this.email =email;
//     this.phone =phone;
//     this.order=order;
// }
// let array = [
//     user1 = new Client(1, 'Sviat', 'Lolov', '213rr312@gmail.com', '380950000385',['ball','tape','game']),
//     user2 = new Client(9, 'Oleg', 'Kekov', '2131231w2@gmail.com', '380950000375',['ball','tape']),
//     user3 = new Client(6, 'Sergiy', 'Orov', '213f12312@gmail.com', '380950000105',['ball','tape']),
//     user4 = new Client(5, 'Max', 'Roflov', '213123a12@gmail.com', '380950000395',['ball','tape','cd','dvd']),
//     user5 = new Client(7, 'John', 'Chocker', '21312312@gmail.com', '380950000605',['ball','tape']),
//     user6 = new Client(3, 'Derrick', 'Rose', '212312@gmail.com', '380950000304',['ball','tape']),
//     user7 = new Client(4, 'Gosha', 'Mose', '21312312nn2@gmail.com', '380950002305',['ball']),
//     user8 = new Client(10, 'Olena', 'Molena', '212312@gmail.com', '380950000301',['ball','tape','money','phone','earpods']),
//     user9 = new Client(2, 'Mariya', 'Mriya', '2112312@gmail.com', '380950000315',['ball','tape']),
//     user10 = new Client(8, 'Solomiya', 'Krasiva', '2131g312@gmail.com', '380950090305',['tape'])
// ];
// console.log(array)
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// //
// let sortClient = array.sort((a,b)=>a.order.length-b.order.length);
// console.log(sortClient);
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//
// function Car(model,manufacturer,year,maxspeed,volume){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.drive=function (){
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     };
//     this.info = function (){
//         for (const key in this) {
//             if (typeof this[key]!=="function"){
//                 console.log(`${key} - ${this[key]}`)
//             }
//         }
//     }
//     this.increaseMaxSpeed=function (newSpeed){
//         this.maxspeed=maxspeed+newSpeed
//     }
//     this.changeYear=function (newValue){
//         this.year=newValue;
//     }
//     this.addDriver=function (driver){
//         this.driver=driver;
//     }
// }
// let elantra = new Car('Elantra', 'Hyundai', 2021, 203,2);
// console.log(elantra);
// elantra.drive();
// elantra.info();
// elantra.increaseMaxSpeed(20);
// elantra.drive();
// elantra.changeYear(2023);
// elantra.info();
// elantra.addDriver('Stas');
// console.log(elantra);
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// class Car{
//     constructor(model, company, year, maxspeed, enginevolume) {
//         this.model = model;
//         this.company = company;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.enginevolume = enginevolume;
//     }
//     drive() {
//     console.log(`На ${this.model} їдемо зі швидкістю ${this.maxspeed} на годину`);
// }
//
// info(){
//     for (const key in this) {
//         console.log(`${key} - ${this[key]}`)
//     }
// };
// increaseMaxSpeed(newSpeed) {
//     this.maxspeed=this.maxspeed+newSpeed;
// };
// changeYear(newValue) {
//     this.year=newValue;
// };
// addDriver(driver) {
//         this.driver = driver;
//     };
// }
//
// let elantra = new Car('Elantra', 'Hyundai', 2021, 203,2);
// console.log(elantra);
// elantra.drive();
// elantra.info();
// elantra.increaseMaxSpeed(20);
// elantra.drive();
// elantra.changeYear(2023);
// elantra.info();
// elantra.addDriver('Stas');
// console.log(elantra);
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// class Cinderella{
//     constructor(name,age,footsize,) {
//         this.name=name;
//         this.age=age;
//         this.footsize=footsize;
//     }
// }
// let array=[
//     new Cinderella('Alina',18,36),
//     new Cinderella('Mykola',68,46),
//     new Cinderella('Masha',12,39),
//     new Cinderella('Natasha',23,37),
//     new Cinderella('Galya',45,40),
//     new Cinderella('Nadya',13,41),
//     new Cinderella('Lolik',17,35),
//     new Cinderella('Bolik',21,36),
//     new Cinderella('Pupa',22,33),
//     new Cinderella('Lupa',27,32),
// ];
// class Prince{
//     constructor(name,age,shoe) {
//         this.name=name;
//         this.age=age;
//         this.shoe=shoe;
//     }
// }
// let prince= new Prince('Oleg',35,40);
// let wife= (Cinderella,Prince)=>{
//     for (const cinderellaElement of array) {
//         if (cinderellaElement.footsize===Prince.shoe){
//             return `Your wife is ${cinderellaElement.name}`
//         }
//
//     }
// }
// console.log(array);
// console.log(prince);
// console.log(wife(array,prince));
//
// // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let princess=array.find((size)=>size.footsize===prince.shoe);
// console.log('Your wife is' + ' '+princess.name)