// axios fetch'den hem sintaksis hem de funksionalliq cehetden ustunlukleri var
// axios external kitabxanadir.
const BASE_URL = `https://northwind.vercel.app/api`;
// fetch(`${BASE_URL}/suppliers`, {
//   method: "GET",
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));
//fetch ile bele yazilir
//
//------------------------------------------------------------------------
//
//axios.get(`${BASE_URL}/suppliers`).then((res) => console.log(res.data));
//
//axios.post(`${BASE_URL}/customers`), { test:"TEST"}
//
//
//-----------------------------------------------------------------------
//
// async function getAllData() {
//   const response = await axios.get(`${BASE_URL}/suppliers`);
//   console.log(response.data);
// }
// getAllData();
//
//------------------------------------------------------------------------------
//
async function getDataById(id) {
  const response = await axios.get(`${BASE_URL}/suppliers/${id}`);
  console.log(response.data);
}
getDataById(5);
//
//-----------------------------------------------------------------------------
//
async function deleteDataById(id) {
  await axios.delete(`${BASE_URL}/suppliers/${id}`);
}
deleteDataById(5);
//
//----------------------------------------------------------------------------
//
async function addNewData(obj) {
  await axios.post(`${BASE_URL}/suppliers`, obj);
}
addNewData({ lorem: "ipsum" });
//
//----------------------------------------------------------------------------
//
async function updateDataById(id, obj) {
  await axios.patch(`${BASE_URL}/suppliers/${id}`, obj);
}
updateDataById(6, { userName: "Gulnur" });
// AXIOS INSTANCE
// bu bize elave funksionalliqlar verir
const axiosInstance = axios.create({
  baseURL: "https://northwind.vercel.app/api",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
//
//--------------------------------------------------------------------------------------------
async function getProducts() {
  try {
    const response = await axiosInstance("products");
    console.log(response.data);
  } catch (err) {
    console.log(err.message);
  }
}
// getProducts();
//
//--------------------------------------------------------------------------------------
//
async function getProductsById(id) {
  try {
    const response = await axiosInstance(`products/${id}`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

// getProductsById(5);
//
//-----------------------------------------------------------------------------------
//
async function deleteProductById(id) {
  await axiosInstance.delete(`products/${id}`);
}
deleteProductById(4);
//
//-----------------------------------------------------------------------------------
//
async function addProduct(obj) {
  await axiosInstance.post(`products`, obj);
}
// addProduct({ lorem: "ipsum" });
//
//---------------------------------------------------------------------------------------
//
async function updateProduct(id, obj) {
  await axiosInstance.patch(`products/${id}`, obj);
}
updateProduct(5, { name: "Gwp 202" });
