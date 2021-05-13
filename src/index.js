// .addEventListener()

// target.addEventListener(event, function)

// const hexagon = document.getElementById('hexagon');

// function alertMe() {
//   console.log('clicked');
// }

// hexagon.addEventListener('click', alertMe);

const body = document.querySelector("body");

body.addEventListener("click", function () {
  console.log("body clicked");
});
