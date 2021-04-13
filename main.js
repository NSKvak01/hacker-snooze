function newArticle(){
    const body = document.querySelector('#main')
    const parent = document = document.createElement('div')
    parent.className = 'child'
    const child = document.createElement('div')
    child.className = 'child'
    parent.appendChild(child)
    body.appendChild(parent)
    parent.style.fontSize = '24px'
    child.style.fontSize = '16px'
    child.style.color = 'grey'
    parent.style.marginLeft = '150px'
}

const top100 = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
let article = "https://hacker-news.firebaseio.com/v0/item/"

const parent = document.createElement('div')
const ol = document.createElement('ol')
parent.appendChild(ol)

const commentsButton = document.querySelector('#comments')
commentsButton.addEventListener('click', ()=>{
    const list = document.querySelectorAll('li')
    for (const li of list){
        li.remove(li)
    }
    fetch(top100)
        .then((res)=>res.json())
        .then((data)=>{
            let promises = []
            for (let i=0; i<100;i++){
                let id = data[i].toString()
                let link = article+ id +'.json?print=pretty'
                const prom = fetch(link)
                promises.push(prom)
            }
            const allPromises = Promise.all(promises)

            allPromises 
                .then(rawResponses=>{
                    let jsonPromises = rawResponses.map(rawResponse => rawResponse.json())
                    return Promise.all(jsonPromises)
                })
                .then(objects =>{
                    objects.sort(function (a,b){
                        return b.descendants-a.descendants
                    })
                    console.log(objects)
                    for (let i=0;i<100;i++){
                        const body = document.querySelector('#main')
                        const a = document.createElement('a')
                        const li = document.createElement('li')
                        parent.className = 'parent'
                        const child = document.createElement('div')
                        child.className = 'child'
                        child.innerText = objects[i].score + " score" + ' | Submitted by ' + objects[i].by + ' | ' + objects[i].descendants +' comments'
                        a.href = objects[i].url
                        a.innerText = objects[i].title
                        li.appendChild(a)
                        li.appendChild(child)
                        ol.appendChild(li)
                        body.appendChild(parent)
                        a.style.textDecoration = 'none'
                        a.target=target="_blank_"
                        parent.style.fontSize = '20px'
                        child.style.fontSize = '16px'
                        child.style.color = 'grey'
                        parent.style.marginLeft = '150px'
                        parent.style.color = 'black'
                        li.style.marginTop='20px'
                        li.style.marginBottom='10px'
                        ol.style.color='rgb(185,50,124)'
                    }
                })
        })
})


const scoreButton = document.querySelector('#score')
scoreButton.addEventListener('click', ()=>{
    const list = document.querySelectorAll('li')
    for (const li of list){
        li.remove(li)
    }
    fetch(top100)
        .then((res)=>res.json())
        .then((data)=>{
            let promises = []
            for (let i=0; i<100;i++){
                let id = data[i].toString()
                let link = article+ id +'.json?print=pretty'
                const prom = fetch(link)
                promises.push(prom)
            }
            const allPromises = Promise.all(promises)

            allPromises 
                .then(rawResponses=>{
                    let jsonPromises = rawResponses.map(rawResponse => rawResponse.json())
                    return Promise.all(jsonPromises)
                })
                .then(objects =>{
                    objects.sort(function (a,b){
                        return b.score-a.score
                    })
                    console.log(objects)
                    for (let i=0;i<100;i++){
                        const body = document.querySelector('#main')
                        const a = document.createElement('a')
                        const li = document.createElement('li')
                        parent.className = 'parent'
                        const child = document.createElement('div')
                        child.className = 'child'
                        child.innerText = objects[i].score + " score" + ' | Submitted by ' + objects[i].by + ' | ' + objects[i].descendants +' comments'
                        a.href = objects[i].url
                        a.innerText = objects[i].title
                        li.appendChild(a)
                        li.appendChild(child)
                        ol.appendChild(li)
                        body.appendChild(parent)
                        a.style.textDecoration = 'none'
                        a.target=target="_blank_"
                        parent.style.fontSize = '20px'
                        child.style.fontSize = '16px'
                        child.style.color = 'grey'
                        parent.style.marginLeft = '150px'
                        parent.style.color = 'black'
                        li.style.marginTop='20px'
                        li.style.marginBottom='10px'
                        ol.style.color='rgb(185,50,124)'
                    }
                })
        })
})

// function main(){
    fetch(top100)
        .then((res)=>res.json())
        .then((data)=>{
            for (let i=0; i<=100; i++){
                let id = data[i].toString()
                let link = article+ id +'.json?print=pretty'
                
                fetch(link)
                    .then ((result)=>result.json())
                    .then((story)=>{
                        if (data[i] === story.id){
                            const body = document.querySelector('#main')
                            const a = document.createElement('a')
                            const li = document.createElement('li')
                            parent.className = 'parent'
                            const child = document.createElement('div')
                            child.className = 'child'
                            child.innerText = story.score + " score" + ' | Submitted by ' + story.by + ' | ' + story.descendants +' comments'
                            a.href = story.url
                            a.innerText = story.title
                            li.appendChild(a)
                            li.appendChild(child)
                            ol.appendChild(li)
                            body.appendChild(parent)
                            a.style.textDecoration = 'none'
                            a.target=target="_blank_"
                            parent.style.fontSize = '20px'
                            child.style.fontSize = '16px'
                            child.style.color = 'grey'
                            parent.style.marginLeft = '150px'
                            parent.style.color = 'black'
                            li.style.marginTop='20px'
                            li.style.marginBottom='10px'
                            ol.style.color='rgb(185,50,124)'
                        }
                    })
                }
})


