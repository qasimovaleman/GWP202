const tBody = document.querySelector("tbody");
const total = document.querySelector(".total");
const basketCount = document.querySelector(".basket-count");
//////////////////////////////////////////////
let basket = getBasketFromLocalStorages() ?? [];
function drawBasketTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    let trElem = document.createElement("tr");
    trElem.innerHTML += `
    <td><img src="${element.product.thumbnail}"></td>
    <td>${element.product.title}</td>
    <td>${element.product.price}</td>
    <td>${element.product.stock}</td>
    <td class="sub-total">${element.product.price * element.count}</td>
    <td> <button onclick=incrementCount(this,"${
      element.product._id
    }")> + </button> <span class="product-count">${
      element.count
    }</span><button onclick=decrementCount(this,"${
      element.product._id
    }")> - </button></td>
    <td><button class="btn btn-danger" onclick=deleteProduct(this,"${
      element.product._id
    }")>Delete</button></td>

     `;
    tBody.append(trElem);
  });
}
drawBasketTable(basket);
///////////////////////////////////////////////////////////
//Bu funk'siya local Storages'e datani gondermek ucundur
function setBasketToLocalStorages(arr) {
  localStorage.setItem("basket", JSON.stringify(arr));
}
///////////////////////////////////////////////////////////
//Bu funk'siya local Storages'dene datani goturmek ucundur
function getBasketFromLocalStorages() {
  return JSON.parse(localStorage.getItem("basket"));
}
///////////////////////////////////////////////////////////
function deleteProduct(btn, id) {
  basket = basket.filter((item) => item.product._id !== id);
  setBasketToLocalStorages(basket);
  console.log(btn.parentElement.parentElement.remove());
  getTotalPrice();
  getBasketCount();
}
////////////////////////////////////////////////////////////
function getTotalPrice() {
  total.textContent = basket.reduce(
    (acc, curr) => acc + curr.product.price * curr.count,
    0
  );
}
getTotalPrice();
///////////////////////////////////////////////////////////
function getBasketCount() {
  //asagidaki code iconun uzerindeki reqemi product'larin novune gore gosterir
  //basketCount.innerText = basket.length;
  //asagidaki code iconun uzerindeki reqemi product'larin sayina gore gosterir
  basketCount.textContent = basket.reduce((sum, item) => sum + item.count, 0);
}

///////////////////////////////////////////////////////////
function incrementCount(btn, id) {
  //console.log(id);

  let product = basket.find((item) => item.product._id === id);
  product.count = product.count + 1;
  setBasketToLocalStorages(basket);
  //console.log(btn);
  btn.closest("td").querySelector(".product-count").textContent = product.count;

  btn.closest("tr").querySelector(".sub-total").textContent =
    product.product.price * product.count;
  getTotalPrice();
  getBasketCount();
}
getBasketCount();

///////////////////////////////////////////////////////////
function decrementCount(btn, id) {
  //console.log(id);

  let product = basket.find((item) => item.product._id === id);
  product.count = product.count - 1;
  setBasketToLocalStorages(basket);
  //console.log(btn);
  btn.closest("td").querySelector(".product-count").textContent = product.count;
  btn.closest("tr").querySelector(".sub-total").textContent =
    product.product.price * product.count;

  getTotalPrice();
  getBasketCount();
  if (product.count === 0) {
    btn.closest("tr").remove();
  }
}
///////////////////////////////////////////////////////
getBasketCount();
getTotalPrice();
