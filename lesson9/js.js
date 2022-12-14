// // - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// // Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// //
// //     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// for (const simpson of simpsons) {
//     let member = document.createElement('div');
//     member.classList.add('member');
//     let name=document.createElement('h1');
//     let surname=document.createElement('h2');
//     let age=document.createElement('h3');
//     let info=document.createElement('p');
//     let photo=document.createElement('img');
//     name.innerHTML=simpson.name;
//     surname.innerHTML=simpson.surname;
//     age.innerHTML=simpson.age;
//     info.innerHTML=simpson.info;
//     photo.src=simpson.photo
//
//     document.body.append(member)
//     member.append(name,surname,age,info,photo)
// }

// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// // Приклад структири знаходиться у файлі example.png
// for (const courseElem of coursesArray) {
//     let course = document.createElement('div');
//     let title = document.createElement('h1');
//     title.innerHTML=courseElem.title;
//     title.style.border='solid 5px';
//     let duration = document.createElement('div');
//     duration.style.display='flex';
//     duration.style.columnGap='50px';
//     let monthDuration = document.createElement('h3');
//     monthDuration.innerHTML = `Month Duration: ${courseElem.monthDuration}`;
//     monthDuration.style.border='solid 3px';
//     let hourDuration = document.createElement('h3');
//     hourDuration.innerHTML=`Hour Duration: ${courseElem.hourDuration}`;
//     hourDuration.style.border='solid 3px';
//     let modules = document.createElement('ul');
//     for (const elem of courseElem.modules) {
//         let m = document.createElement('li');
//         m.innerHTML = elem;
//         modules.append(m)
//     }
//     modules.style.border='solid 3px'
//
//     course.append(title,duration,modules);
//     duration.append(monthDuration,hourDuration)
//     document.body.append(course);
//
//
// }
// - створити блок,
// let block = document.createElement('div');
// //     - додати йому класи wrap, collapse, alpha, beta
// block.classList.add('wrap','collapse','alpha','beta');
//
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// block.style.background='red';
// block.style.width='100px';
// block.style.height='100px';
// // - додати цей блок в body.
// document.body.append(block);
// // - клонувати його повністю, та додати клон в body.
// let clone = block.cloneNode(true);
// document.body.append(clone)

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let array = ['Main','Products','About us','Contacts'];
// let ul = document.getElementsByClassName('menu')[0];
// for (const element of array) {
//     let li = document.createElement('li');
//     li.innerHTML = element;
//     ul.appendChild(li)
// // }
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// for (const element of coursesAndDurationArray) {
//    let div= document.createElement('div');
//    let title = document.createElement('h2');
//    title.innerHTML = element.title;
//    let month = document.createElement('p');
//    month.innerHTML=element.monthDuration;
//    div.append(title,month);
//    document.body.append(div);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
// for (const element of coursesAndDurationArray) {
//    let div= document.createElement('div');
//    div.classList.add('item');
//    let title = document.createElement('h1');
//    title.innerHTML = element.title;
//    title.classList.add('heading')
//    let month = document.createElement('p');
//    month.innerHTML=element.monthDuration;
//    month.classList.add('description')
//    div.append(title,month);
//    document.body.append(div);
// }

// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// let block = document.createElement('div');
// block.id='text';
// block.style.width='100px';
// block.style.height='100px';
// block.style.background='red';
//
// let btn = document.createElement('button');
// btn.innerText='Delete';
// btn.onclick=function (e) {
//     block.remove();
//     this.remove();
// }
//
//
// document.body.append(block,btn);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let inp = document.createElement('input');
// inp.type='number';
// let btn = document.createElement('button');
// btn.innerText='CHECK';
// btn.onclick=function (e) {
//     if (inp.value>=18){
//         console.log(inp.value);
//     }else {
//         alert('YOU ARE TOO YOUNG')
//     }
// }
//
//
// document.body.append(inp,btn)
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let input1= document.createElement('input');
let input2= document.createElement('input');
let input3= document.createElement('input');
let button = document.createElement('button');
button.innerText='СОЗДАТЬ ТАБЛИЦУ';


button.addEventListener('click',function () {
    let ryad=input1.value;
    let yach=input2.value;
    let text=input3.value;

    function tablecr(ryad,yach,t) {
        let table=document.createElement('table');
        table.style.border='solid black 1 px';
        let divtable=document.createElement('div')
        divtable.appendChild(table);
        document.body.append(divtable);
        for (let i = 0; i < ryad ;i++) {
            let ryad=document.createElement('tr');
            ryad.style.border='1px solid red';

            for (let j = 0; j <yach; j++) {
                let yach=document.createElement('td');
                yach.style.border='1px solid orange';
                yach.innerText=`${t}`;
                table.appendChild(ryad);
                ryad.appendChild(yach);

            }
        }
    }
    tablecr(ryad,yach,text);
})




document.body.append(input1,input2,input3,button);