var btn = $(".tab-button");
var content = $(".tab-content");
var classNum = $(".tab-button").length;

// for (let i = 0; i < classNum; i++) {
//   btn.eq(i).on("click", function () {
//     tabOpen(i);
//   });
// }

$(".list").click(function (e) {
  console.log(e.target.dataset.id);
  tabOpen(e.target.dataset.id);
});

function tabOpen(i) {
  btn.removeClass("orange");
  btn.eq(i).addClass("orange");
  content.removeClass("show");
  content.eq(i).addClass("show");
}

var car = { name: "제네시스", price: [50000, 3000, 10000], color: "black" };
document.querySelector(".car-title").innerHTML = car.name;
document.querySelector(".car-price").innerHTML = car.price[0];
document.querySelector(".car-color").innerHTML = car.color;

$(".form-select")
  .eq(0)
  .on("input", function (e) {
    var value = e.currentTarget.value;
    var pants = [28, 30, 32, 34];
    var shirts = [95, 100, 105];
    var pantsSize = `<option>28</option>
    <option>30</option>
    <option>32</option>`;
    var shirtSize = `<option>95</option>
      <option>100</option>
      <option>105</option>`;
    if (value == "셔츠") {
      $(".form-select").eq(1).removeClass("hide");
      $(".form-select").eq(1).html("");
      shirts.forEach((a) => {
        $(".form-select").eq(1).append(`<option>${a}</option>`);
      });
      // $(".form-select").eq(1).html(shirtSize);
    } else if (value == "바지") {
      $(".form-select").eq(1).removeClass("hide");
      $(".form-select").eq(1).html("");
      pants.forEach((size) => {
        $(".form-select").eq(1).append(`<option>${size}</option>`);
      });
      // $(".form-select").eq(1).html(pantsSize);
    } else {
      $(".form-select").eq(1).addClass("hide");
    }
  });

var tem = "<p>안녕</p>";
document.querySelector("#test").insertAdjacentHTML("beforeend", tem);
$("#test").append(tem);
