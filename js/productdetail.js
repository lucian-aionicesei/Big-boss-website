const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get("id");

const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        showProduct(data);
    });

function showProduct(product) {
console.log(product);
document.querySelector("img.product_image").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
document.querySelector(".product_name").textContent = product.productdisplayname;
document.querySelector(".product_description").innerHTML = product.description;
document.querySelector(".price").textContent = "DKK " + product.price;
}

