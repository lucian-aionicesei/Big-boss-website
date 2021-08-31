const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        handleProductList(data);
    });

function handleProductList(data) {
    console.log(data);
    data.forEach(showProduct);
}

/*
<article class="product">
    <img class="product_image" src="images/" alt="product image">
    <h3 class="product_name"></h3>
    <p class="product_description"></p>
    <p class="price"></p>
    <button class="add">Add to cart</button>
</article>
*/

function showProduct(product) {
    console.log(product);
    //grab the template
    const template = document.querySelector("#smallProductTemplate").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content

copy.querySelector("img.product_image").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
copy.querySelector(".product_name").textContent = product.productdisplayname;
copy.querySelector(".price").textContent = `DKK ${product.price},-`;
    //grab parent
const parent = document.querySelector(".product_show");
    //append
    parent.appendChild(copy);
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