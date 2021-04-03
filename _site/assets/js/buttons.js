/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

function readMore(course) {
  var dots = document.getElementById(`${course}br`);
  var moreText = document.getElementById(`${course}text`);
  var btnText = document.getElementById(`${course}btn`);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more<i class='fas fa-chevron-circle-down fa-2x'></i>";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less<i class='fas fa-chevron-circle-up fa-2x'></i>";
    moreText.style.display = "inline";
  }
}


// function readMore(city) {
//   let dots = document.querySelector(`.card[data-city="${city}"] .dots`);
//   let moreText = document.querySelector(`.card[data-city="${city}"] .more`); 
//   let btnText = document.querySelector(`.card[data-city="${city}"] .myBtn`);

//   if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.textContent = "Read more";
//       moreText.style.display = "none";
//   } else {
//       dots.style.display = "none";
//       btnText.textContent = "Read less"; 
//       moreText.style.display = "inline";
//   }
// }