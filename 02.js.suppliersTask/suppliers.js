//CRUD - create,read,update,delete
tBody = document.querySelector("tbody");
const BASE_URL = `https://northwind.vercel.app/api`;
//
//asagidaki funksiya data cekmek ucundur
async function getData(endPoints) {
  let response = await axios(`${BASE_URL}/${endPoints}`);
  console.log(response.data);
  drawTable(response.data);
}
getData("suppliers");
//
//asagidaki funksiya cedvel duzeltmek ucundur
function drawTable(data) {
  data.forEach((element) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
    <td>${element.id}</td>
    <td>${element.companyName}</td>
    <td>${element.address?.street}</td>
    <td>${element.address?.phone}</td>
    <td>${element.address?.city},${element?.country}</td>
    <td>  <a href="" class="btn btn-success">EDIT</a> </td>
    <td> <button class="btn btn-danger" onclick=deleteSuppliers(${element.id},this)>Delete</button></td>
   
    `;

    tBody.append(trElem);
  });
}
//
//
async function deleteSuppliers(id, btn) {
  btn.closest("tr").remove();
  await axios.delete(`${BASE_URL}/suppliers/${id}`);

  console.log(btn);

  //await getData("suppliers");
}
