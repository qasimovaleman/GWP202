// async await
const BASE_URL = `https://northwind.vercel.app/api`;

//async assinxrom sozunden gelib
//jacascript sinxrom sekilde isleyir, yeni setirlerdeki kodlari ardicil sekilde isleyir
//API'den data cekmek prosesi ise assinxrom isleyir.
//
//----------------------------------------------------------------------------------------------------------------
//
// fetch("https://northwind.vercel.app/api/customers")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// bu bize arrayi qaytarir icinde obyektler var
//
//--------------------------------------------------------------------------------------------------------------
//
// function getData() {
//   fetch("https://northwind.vercel.app/api/customers")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }
// bu funksiyanin daxilindeki fetch assinxrom islemdir.Amma funksiyanin ozu sinxromdur
//
//--------------------------------------------------------------------------------------------------------------
//
// async function getData() {
//   const response = await fetch(`${BASE_URL}/customers`);
//   console.log(response);
// }
// bele yazildiqda funksiya assinxrom olur
// bu yazilis o demekdiir ki fetch request gonder ve data gelene kimi onu gozlet
// burada await yazmasaq gozlemeyecek direk response fetch menimsedecek,,, yeni fetch'dan promise qayidir ve onu
//,, response'a menisedecek console de promise gorseneecek yeni object {}
//getData();
// await yazilsa eger, awaiti then bloku kimi dusune bilerik bu zaman console de response obyekti gorsenecek
// ve response'ni json etmek lazimdir
//
async function getData() {
  const response = await fetch(`${BASE_URL}/customers`);
  const data = await response.json();
  console.log(data);
}
//getData();
//await yazb gozledirik ki buradan response qayitsin
// ve buradan array qayidir
//then bloku daha kohne versiyadir.
//async ile yazilan ise sintaksis cehetden daha rahatdir,kodlar oxunaqli olur
//
//----------------------------------------------------------------------------------------------------------------
//
async function getDataById(id) {
  const response = await fetch(`${BASE_URL}/customers/${id}`);
  const data = await response.json();
  console.log(data);
}
//getDataById("BERGS");
//burada  bergs obyektin id'dir id gore obyekti tapdiq
//
//-----------------------------------------------------------------------------------------------------------------
//
async function deleteDataById(id) {
  await fetch(`${BASE_URL}/customers/${id}`, {
    method: "DELETE",
  });
}
deleteDataById("AROUT");
//id'si AROUT olan obyekti silir
//
//-----------------------------------------------------------------------------------------------------------------
//
async function addNewData(obj) {
  await fetch(`${BASE_URL}/customers`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}
addNewData({ class: "GWP202" });
//yenisini elave edir
//
//--------------------------------------------------------------------------------------------------------------------
//
async function updateDataById(id, obj) {
  await fetch(`${BASE_URL}/customers/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}
updateDataById("BERGS", { city: "Ganja" });
// delete put patch bunlar id' gore atilir
// demeli id'si BERGS olani tapir id'den basqa hamisini silir yerine city:"Ganja" elave edir..
//
//-------------------------------------------------------------------------------------------------------------------------
//
async function updateDataByIdPatch(id, obj) {
  await fetch(`${BASE_URL}/customers/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}
updateDataByIdPatch("BLAUS", { companyName: "Code", city: "Ganja" });
// bu funksiya verdiyimiz propertty'leri yoxdursa elave edir , varsa deyisir
//
//---------------------------------------------------------------------------------------------------------------------------------
//
try {

}catch(error){
    console.log(error);
}finally{
    console.log("finally block");
}
// Yuxarida yazdigimiz butun funksiyalari try blokunun icinde yaza bilerik