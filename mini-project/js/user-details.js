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
        
            fetch(` https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then((response)=>response.json())
                .then((post)=>{
                    let postsDiv = document.createElement('div');
                    postsDiv.id='posts';
                    for (const name of post) {
                       let namePost = document.createElement('div');
                       namePost.classList.add('name');
                       namePost.innerHTML= `${name.id} - ${name.title.toUpperCase()}`;
                       let btn3=document.createElement('button');
                       btn3.classList.add('btn3');
                       btn3.innerText='SHOW POST';
                       namePost.append(btn3);
                       postsDiv.append(namePost);

                        btn.onclick=function () {
                            postsDiv.classList.toggle('show');
                            if (postsDiv.className.includes('show')){
                                postsDiv.style.display='flex';
                                btn.innerText='Hide Posts';
                            }else{
                                postsDiv.style.display='none';
                                btn.innerText='Show Posts';
                            }
                            location.href=`#posts`
                        }
                        btn3.onclick=function () {
                            document.location=`post-details.html?postid=${name.id}`
                        }
                    }
                    document.body.append(postsDiv);
                })



        document.body.append(wrap,btn)
    })