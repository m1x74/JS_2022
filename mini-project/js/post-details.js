let url = new URL(location.href);
let id = url.searchParams.get('postid');
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response)=>response.json())
.then((post)=>{
    console.log(post)
    let wrap = document.createElement('div');
wrap.classList.add('wrap')
    function recursion(element){
        for (const value in element) {
            if (typeof element[value]!=='object'){
                let d = document.createElement('div');
                d.classList.add('info');
                d.append(`${value.toUpperCase()} - ${element[value]}`)
                wrap.append(d);
            }else {
                recursion(element[value])
            }
        }
    }
    recursion(post)

    let btn = document.createElement('button');
    btn.innerText='SHOW COMMENTS'

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((response)=>response.json())
        .then((comments)=>{
         let comWrap =  document.createElement('div');
         comWrap.id='comWrap';

            for (const comment of comments) {
                let com =  document.createElement('div');
                com.classList.add('com');
                function recursion2(elem){
                    for (const key in elem) {
                        if (typeof elem[key]!=='object'){
                            let d = document.createElement('div');
                            d.classList.add('info2');
                            d.append(`${key.toUpperCase()} - ${elem[key]}`)
                            com.append(d)
                            comWrap.append(com);
                            document.body.append(comWrap);
                        }else {
                            recursion(elem[key])
                        }
                    }
                }
                btn.onclick=function () {
                    comWrap.classList.toggle('show')
                    if (comWrap.className.includes('show')){
                        comWrap.style.display='flex'
                        btn.innerText='HIDE COMMENTS'

                    }else {
                        comWrap.style.display='none'
                        btn.innerText='SHOW COMMENTS'

                    }
                    location.href='#comWrap'

                }
                recursion2(comment)
            }
        })

    document.body.append(wrap,btn)
})