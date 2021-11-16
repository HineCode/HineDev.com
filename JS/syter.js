// SCROLL js //
// const sr = ScrollReveal({
//   origin: "left",
//   distance: "80px",
//   duration: 2000,
//   reset: true,
// });

// /*SCROLL js*/

// sr.reveal(".product", { interval: 100 });
// sr.reveal(".product1", { interval: 150 });
// sr.reveal(".product1", { interval: 150 });

function myFunction() {
  var x = document.getElementById("password");
  var y = document.getElementById("show");
  var z = document.getElementById("hide");
  if (x.type === "password") {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
}

// Get thẻ modal gọi 2 hàm //
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

// Get thẻ <span> element modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// phần reponsive //

// var header = document.getElementsById("menu");
// var mobileMenu = document.getElementsById("toggle");

// mobileMenu.onclick = function () {
//   alert("oke");
// };
$(document).ready(function () {
  $("#toggle").click(function () {
    $("#menu").slideToggle();
  });
});

// phần slider //
const holder = document.querySelector(".holder"),
  navigations = Array.from(document.querySelectorAll(".navigation i")),
  bullets = Array.from(document.querySelectorAll(".controls li"));
let slideIndex = 0;

const changeBullets = () => {
  document.querySelector(".controls .selected").classList.remove("selected");
  bullets[slideIndex].classList.add("selected");
};

navigations.forEach((nav) => {
  nav.addEventListener("click", () => {
    if (nav.classList.contains("left")) {
      slideIndex = slideIndex > 0 ? slideIndex - 1 : 0;
      holder.style.transform = "translate(" + slideIndex * -25 + "%)";
    } else {
      slideIndex = slideIndex < 3 ? slideIndex + 1 : 3;
      holder.style.transform = "translate(" + slideIndex * -25 + "%)";
    }
    changeBullets();
  });
});

bullets.forEach((bul, index) => {
  bul.addEventListener("click", () => {
    slideIndex = index;
    changeBullets();
    holder.style.transform = "translate(" + slideIndex * -25 + "%)";
  });
});
