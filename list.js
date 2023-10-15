var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

for (var i = 0; i < products.length; i++) {
  document.querySelectorAll(".card-body h5")[i].innerHTML = products[i].title;
  document.querySelectorAll(".card-body p")[i].innerHTML =
    "가격 : " + products[i].price;
}

$.get("https://codingapple1.github.io/hello.txt")
  .done(function (data) {
    console.log(data);
  })
  .fail(() => {
    console.log("실패");
  });

$.get("https://codingapple1.github.io/price.json")
  .done((data) => {
    console.log(data.price);
  })
  .fail(() => {
    console.log("실패");
  });
