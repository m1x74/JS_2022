let url = new URL(location.href);
let id = url.searchParams.get('id');
fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then((response)=>response.json())
    .then((user)=>{
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        function recursion (element){
            for (const value in element) {
                if (typeof element[value]!=="object"){
                    let d = document.createElement('div');
                    d.classList.add('info');
                    d.append(`${value.toUpperCase()} - ${element[value]}`)
                    wrap.append(d);

                }else {
                    recursion(element[value])
                }
            }
        }
        recursion(user);

        let btn = document.createElement('button');
        btn.innerText='POSTS OF CURRENT USER';
        btn.classList.add('btn2');
        btn.onclick=function (){
            fetch(` https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then((response)=>response.json())
                .then((post)=>{
                    let postsDiv = document.createElement('div');
                    postsDiv.classList.add('posts');
                    for (const name of post) {
                       let namePost = document.createElement('div');
                       namePost.innerHTML= `${name.id} - ${name.title.toUpperCase()}`;
                       let btn3=document.createElement('button');
                       btn3.classList.add('btn3');
                       btn3.innerText='SHOW POST';
                       postsDiv.append(namePost,btn3);
                    }
                    document.body.append(postsDiv);
                })
        }

        document.body.append(wrap,btn)
    })