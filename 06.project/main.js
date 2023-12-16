const product = document.querySelector(".product");
const darkBtn = document.querySelector(".darkBtn");
const darkIkon = document.querySelector(".dark");
const searchInput = document.querySelector(".searchInput");
const select = document.querySelector(".select");
const body = document.querySelector("body");
let arr;
////
const BASE_URL = `https://restcountries.com/v2`;

////

async function getData(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);
  drawCards(response.data);
  arr = response.data;
}
getData("all");
////
function drawCards(data) {
  product.innerHTML = "";
  data.forEach((element) => {
    product.innerHTML += `
    
    <div class="col-12 col-md-6 col-lg-4"> 
      <a href="./details.html?name=${element.name}">
          <div class="card" style="width: 18rem">
          <img src="${element.flags.svg}" class="card-img-top" alt="..." />
          <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
           <p class="card-text">Population: ${element.population}  </p>
           <p class="card-text">Region: ${element.region} </p>
           <p class="card-text">Capital:${element.capital}  </p>
         </div> 
       </div> 
     </a>
  </div> 
     `;
  });
}

/////
searchInput.addEventListener("input", function (e) {
  e.preventDefault();
  let filtered = arr.filter((item) =>
    item.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  drawCards(filtered);
});
/////

localStorage.getItem("dark-mode") === "true" && body.classList.add("dark-mode");
////
darkBtn.addEventListener("click", function () {

          body.classList.toggle("dark-mode");

       localStorage.getItem("dark-mode") === "true"

    ? localStorage.setItem("dark-mode", false)
    : localStorage.setItem("dark-mode", true);
});
