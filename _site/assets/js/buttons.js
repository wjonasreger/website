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
