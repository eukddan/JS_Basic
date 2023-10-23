var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

// var price_products = products.sort(function (a, b) {
//   return a.price - b.price;
// });
// console.log(products);

$("#price_6").click(() => {
  // var products_6 = products.filter((a) => {
  //   return a.price <= 60000;
  // });
  var products_6 = products.filter((a) => a.price <= 60000);
  console.log(products_6);
  $(".row").html("");
  products_6.forEach((data, i) => {
    var tem = ` <div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100" />
  <h5>${data.title}</h5>
  <p>가격: ${products_6[i].price}</p>
  </div>`;
    $(".row").append(tem);
  });
});

$("#price").click(() => {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  $(".row").html("");
  products.forEach((data, i) => {
    var tem = ` <div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100" />
  <h5>${data.title}</h5>
  <p>가격: ${products[i].price}</p>
  </div>`;
    $(".row").append(tem);
  });
});

// for (var i = 0; i < products.length; i++) {
//   document.querySelectorAll(".col-sm-4 h5")[i].innerHTML = products[i].title;
//   document.querySelectorAll(".col-sm-4 p")[i].innerHTML =
//     "가격 : " + products[i].price;
// }

products.forEach((data, i) => {
  var tem = ` <div class="col-sm-4">
<img src="https://via.placeholder.com/600" class="w-100" />
<h5>${data.title}</h5>
<p>가격: ${products[i].price}</p>
</div>`;
  $(".row").append(tem);
});

// function more_btn() {
//   data.forEach((a, i) => {
//     var tem = ` <div class="col-sm-4">
//       <img src="https://via.placeholder.com/600" class="w-100" />
//       <h5>${a.title}</h5>
//       <p>가격: ${data[i].price}</p>
//       </div>`;
//     $(".row").append(tem);
//   });
// }

var count = 0;

var more_btn = function (data) {
  data.forEach((a, i) => {
    var tem = ` <div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100" />
      <h5>${a.title}</h5>
      <p>가격: ${data[i].price}</p>
      </div>`;
    $(".row").append(tem);
  });
};

$("#more").click(function () {
  count++;
  console.log(count);
  if (count > 2) {
    $("#more").hide();
  } else if (count == 1) {
    $.get("https://codingapple1.github.io/js/more1.json").done((data) => {
      more_btn(data);
    });
  } else {
    $.get("https://codingapple1.github.io/js/more2.json").done((data) => {
      more_btn(data);
    });
  }
});
