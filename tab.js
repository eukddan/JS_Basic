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
