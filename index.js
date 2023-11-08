$(window).on("scroll", function () {
  var totalY =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var currentY = document.documentElement.scrollTop;
  var percentage = (currentY / totalY) * 100;
  document.querySelector(".progress").style.width = percentage + "%";
});

$(".terms").on("scroll", function () {
  var scrollAmount = document.querySelector(".terms").scrollTop;
  var scrollAmount1 = document.querySelector(".terms").scrollHeight;
  var divScrollAmount1 = document.querySelector(".terms").clientHeight;
  if (scrollAmount + divScrollAmount1 >= scrollAmount1 - 5) {
    alert("회원 약관을 다 읽으셨습니다.");
    document
      .querySelector(".terms")
      .removeEventListener("scroll", arguments.callee);
  }
});

$(window).on("scroll", function () {
  if (window.scrollY > 100) {
    $(".navbar-brand").css("font-size", "20px");
  } else {
    $(".navbar-brand").css("font-size", "30px");
  }
});

var currentPic = 1;
$(".slide-5").on("click", function () {
  $(".slide-container").css("transform", "translateX(-" + currentPic + "00vw)");
  currentPic += 1;
});
$(".slide-4").on("click", function () {
  $(".slide-container").css(
    "transform",
    "translateX(-" + (currentPic - 1) + "00vw)"
  );
  currentPic -= 1;
});
$(".slide-1").on("click", function () {
  $(".slide-container").css("transform", "translateX(0)");
  currentPic = 1;
});
$(".slide-2").on("click", function () {
  $(".slide-container").css("transform", "translateX(-100vw)");
  currentPic = 2;
});
$(".slide-3").on("click", function () {
  $(".slide-container").css("transform", "translateX(-200vw)");
  currentPic = 3;
});

var count1 = 5;
setInterval(function () {
  count1 -= 1;
  if (count1 >= 0) {
    document.querySelector("#time").innerHTML = count1;
  } else {
    $(".alert").hide();
  }
}, 1000);

var count = 0;
$(".badge").on("click", function () {
  count++;
  if (count % 2 == 1) {
    $(".badge").html("Light 🔄");
    $(".main-bg").removeClass("grey");
    $("#dark").removeClass("dark");
    $(".navbar").removeClass("navbar-dark");
    $(".navbar").removeClass("bg-dark");
  } else {
    $(".badge").html("Dark 🔄");
    $(".main-bg").addClass("grey");
    $("#dark").addClass("dark");
    $(".navbar").addClass("navbar-dark");
    $(".navbar").addClass("bg-dark");
  }
});

$("form").on("submit", function (e) {
  if (document.querySelector("#exampleInputEmail1").value == "") {
    e.preventDefault();
    alert("아이디를 입력하세요.");
  } else if (document.querySelector("#exampleInputPassword1").value == "") {
    e.preventDefault();
    alert("비밀번호를 입력하세요.");
  } else if (
    document.querySelector("#exampleInputPassword1").value.length < 6
  ) {
    e.preventDefault();
    alert("비밀번호 6자리 이상으로 입력하세요.");
  }
});
$("form").on("submit", function (e) {
  var password = document.getElementById("exampleInputPassword1").value;
  if (/[A-Z]/.test(password) == false) {
    e.preventDefault();
    alert("대문자없는데요");
  }
});

$(".btn-primary").on("click", function () {
  $(".black-bg").addClass("show-modal");
});
$(".btn-danger").on("click", function () {
  $(".black-bg").removeClass("show-modal");
});
document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    document.querySelectorAll(".list-group")[0].classList.toggle("show");
  });

document.querySelector(".black-bg").addEventListener("click", function (e) {
  // e.target; 유저가 실제로 누른 것
  // e.currentTarget; 이벤트 리스너 달린 곳 this
  // e.preventDefault; 이벤트 기본 동작을 막아줌
  // e.stopPropagation; 이벤트 버블링 막아줌
  if (e.target == document.querySelector(".black-bg")) {
    document.querySelector(".black-bg").classList.remove("show-modal");
  }
});

var start_x = 0;
var done_x = 0;
var down = false;
$(".slide-box")
  .eq(0)
  .on("mousedown", function (e) {
    //e.clientX: 현재 마우스 X축 좌표
    start_x = e.clientX;
    down = true;
  });

$(".slide-box")
  .eq(0)
  .on("mouseup", function (e) {
    down = false;
  });

$(".slide-box")
  .eq(0)
  .on("mousemove", function (e) {
    //e.clientX: 현재 마우스 X축 좌표
    done_x = e.clientX - start_x;
    if (down == true) {
      $(".slide-container").css("transform", `translateX(${done_x}px)`);
    }
  });
