const countriesElem=document.querySelector(".countries")
const dropDown=document.querySelector(".dropDown")
const dropElem=document.querySelector(".drop")


async function getCountry() {
const url=await fetch("https://restcountries.com/v2/all");
const res=await url.json();
console.log(res);
res.forEach(element => {
  showCountry(element)
});
}

getCountry()
function showCountry(data) {
  const country=document.createElement("div")
  country.classList.add("country")
  country.innerHTML=` <div class="country-img">
  <img src="${data.flag}" alt="">
  </div>
  <div class="country-info">
  <h5>${data.name}</h5>
  <p><strong>Population:</strong>${data.population}</p>
  <p><strong>Region:</strong>${data.region}</p>
  <p><strong>Capital:</strong>${data.capital}</p>
  </div>`;
  countriesElem.appendChild(country)
}

dropDown.addEventListener("click", ()=>{
dropElem.classList.toggle("showDropDown")
console.log("hello");
})

