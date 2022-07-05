const loadDog = ()=>{
    fetch("https://api.TheDogAPI.com/v1/breeds")
    .then(res => res.json())
    .then(data => displayDog(data))
}

const displayDog = dogList => {
    const main = document.getElementById('main')
    const first10Data = dogList.slice(2,10)
    
    for (const dog of first10Data){
        const div = document.createElement('div')
        div.classList.add('col-lg-4')
        div.innerHTML = `
        <h2>${dog.name}</h2>
        <img width="400" src="${dog.image.url}">
        `
        main.appendChild(div)
        
    }
}