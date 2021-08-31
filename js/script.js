const url = "https://kea-alt-del.dk/t7/api/products/1532"
//fetch the data
fetch(url)
    .then(res => res.json())
    .then(data => showProduct(data));
//populate the page

function showProduct(product) {
console.log(product);
document.querySelector(".product_name").textContent = product.productdisplayname;

document.querySelector("img.product_image").src = "https://kea-alt-del.dk/t7/images/webp/1000/" + product.id + ".webp";

document.querySelector(".price").textContent = product.price + " DKK";

}

//Side menu collapsible

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}