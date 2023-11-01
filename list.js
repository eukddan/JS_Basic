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
  product();
  // products.forEach((data, i) => {
  //   var tem = ` <div class="col-sm-4">
  // <img src="https://via.placeholder.com/600" class="w-100" />
  // <h5>${data.title}</h5>
  // <p>가격: ${products[i].price}</p>
  // </div>`;
  //   $(".row").append(tem);
  // });
});

// for (var i = 0; i < products.length; i++) {
//   document.querySelectorAll(".col-sm-4 h5")[i].innerHTML = products[i].title;
//   document.querySelectorAll(".col-sm-4 p")[i].innerHTML =
//     "가격 : " + products[i].price;
// }

var product = function () {
  products.forEach((data, i) => {
    var tem = ` <div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100" />
  <h5>${data.title}</h5>
  <p>가격: ${products[i].price}</p>
  <button class="buy">구매</button>
  </div>`;
    $(".row").append(tem);
  });
};

product();

$(".buy").click(function (e) {
  var title = $(e.target).siblings("h5").text();
  if (localStorage.getItem("cart") != null) {
    var get_Product = JSON.parse(localStorage.cart);
    if (get_Product.includes(title)) {
      console.log("중복임");
    } else {
      get_Product.push(title);
      localStorage.setItem("cart", JSON.stringify(get_Product));
    }
  } else {
    localStorage.setItem("cart", JSON.stringify([title]));
  }
});

// products.forEach((data, i) => {
//   var tem = ` <div class="col-sm-4">
// <img src="https://via.placeholder.com/600" class="w-100" />
// <h5>${data.title}</h5>
// <p>가격: ${products[i].price}</p>
// <button class="buy">구매</button>
// </div>`;
//   $(".row").append(tem);
// });

// var arr = [1, 2, 3, 4, 5];
// var newArr = JSON.stringify(arr);
// localStorage.setItem("num", newArr);
// var getNum = localStorage.getItem("num");
// console.log(JSON.parse(getNum));

var arr1 = [1, 2, 3, 4, 5];
var newArr1 = JSON.stringify(arr1);
sessionStorage.setItem("num1", newArr1);
var getNum1 = sessionStorage.getItem("num1");
console.log(JSON.parse(getNum1));

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
