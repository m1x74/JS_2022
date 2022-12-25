let wrap = document.createElement('div');
wrap.classList.add('wrap')

fetch('http://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then(users=>{
        for (const user of users) {
            let userBlock=document.createElement('div');
            userBlock.classList.add('user');
            userBlock.innerHTML = user.id +'.'+ user.name;
            userBlock.style.columnGap='40px';
            let btn = document.createElement("button");
            btn.classList.add('btn1')
            btn.onclick= function (e) {
                document.location = `user-details.html?id=${user.id}`
            }
            

            btn.innerText = 'USER INFO';
            userBlock.append(btn)
            wrap.append(userBlock)

        }
    })
document.body.append(wrap)