const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBudddies(data))
}

const displayBudddies = data =>{
    const buddies = data.results
    const buddiesDiv = document.getElementById('buddies')
    for (const buddy of buddies){
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.first} ${buddy.name.last}`
        buddiesDiv.appendChild(p)
    }
}