const product = document.querySelector(".product");
const searchInput = document.querySelector(".search");
const loadMore = document.querySelector(".loadMore");
let limited=3;
let copyArr;
let arr;
const BASE_URL = ` http://localhost:8080`;
async function getData(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);
  drawCards(response.data);
  arr = response.data;
}
getData("products");
//
function drawCards(data) {
  product.innerHTML = "";
  data.forEach((element) => {
    product.innerHTML += `
    <img src="${element.imageUrl}" alt="">
    <h3>${element.title}</h3>
    <p> $${element.price}</p>
    
    `;
  });
}
searchInput.addEventListener("input", function (e) {
  let filtered = arr.filter((item) =>
    item.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  console.log(filtered);
  drawCards(filtered);
});
