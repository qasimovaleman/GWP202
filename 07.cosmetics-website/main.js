const product = document.querySelector(".product");
const searchInput = document.querySelector(".search");
const loadMore = document.querySelector(".loadMore");
let limit = 3;
let productsCopy = [];
let arr;
const BASE_URL = ` http://localhost:3000`;
async function getData(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);
  drawCards(response.data);
  productsCopy = response.data;
  arr = response.data;
  drawCards(response.data.slice(0, limit));
}
getData("products");
//
function drawCards(data) {
  product.innerHTML = "";
  data.forEach((element) => {
    product.innerHTML += `
   <div class= "cardDiv">
   <img src="${element.imageUrl}" alt="">
   <h3>${element.title}</h3>
   <p> $${element.price}</p>
   </div>
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
loadMore.addEventListener("click", function () {
  limit += 3;

  drawCards(productsCopy.slice(0, limit));
});
