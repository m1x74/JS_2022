fetch('http://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then(users=>{
        for (const user of users) {
            let userBlock=document.createElement('div');
            userBlock.innerHTML = user.id +'.'+ user.name;
            userBlock.style.display='flex';
            userBlock.style.columnGap='40px';
            let link = document.createElement("a");
            link.href =` user-details.html?id=${user.id}`;
            link.innerText = 'USER INFO';
            userBlock.append(link)
            document.body.append(userBlock)
        }
    })