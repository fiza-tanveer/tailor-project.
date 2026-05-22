function generateToken(){

  let id =
  document.getElementById("customerId").value;

  let name =
  document.getElementById("customerName").value;

  let phone =
  document.getElementById("phone").value;

  let address =
  document.getElementById("address").value;

  let dressType =
  document.getElementById("dressType").value;

  let deliveryDate =
  document.getElementById("deliveryDate").value;

  // VALIDATION
  if(id=="" || name=="" || phone=="" ||
  address=="" || dressType=="" ||
  deliveryDate==""){

    alert("Please fill all required fields");
    return;
  }

  // TOKEN
  let token =
  Math.floor(Math.random()*9000)+1000;

  // SHOW TOKEN
  document.getElementById("tokenDisplay")
  .innerText = "#" + token;

  document.getElementById("previewToken")
  .innerText = "#" + token;

  // MESSAGE
  document.getElementById("msg")
  .innerText =
  "Order saved successfully!";
}