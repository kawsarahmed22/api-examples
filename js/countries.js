const loadCountries = ()=> {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))

}

loadCountries()

const displayCountries = countries => {
//     for(const country of countries){
//         console.log(country);
//     }

const countriesDiv = document.getElementById('countries')

countries.forEach(country => {
   
    const div = document.createElement('div')
    div.classList.add('country')
    div.innerHTML = `
    <h3>${country.name}</h3>
    <p>${country.capital}</p>
    <button onclick = "loadCountryByName('${country.name}')">Details</button>
    `

    countriesDiv.appendChild(div)
});

}

const loadCountryByName  = name =>{
    fetch(`https://restcountries.com/v2/name/${name}`)
    .then(res => res.json())
    .then(data => displayCountriesDetails(data[0]))
}


const displayCountriesDetails = country => {
    console.log(country);
    const countryDetails = document.getElementById('country-details')
    countryDetails.innerHTML = `
    <h5>${country.name}</h5>
    <p>Population: ${country.population}</p>

    <img width="150px" src ="${country.flag}">
    `
}