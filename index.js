// rating agar select karenge to
// us div par click hone par us div ke class me
// selected class add kar denge

const ratingDiv = document.getElementById("one");
const thankYouDiv = document.querySelector("#two");
// submitted rating
const submittedRating = document.getElementById("submittedRating");
// submit button
const submitButton = document.querySelector(".submit");
// rating selection
const ratings = document.querySelectorAll(".rating");
let flag = 0;

ratings.forEach((rating) => {
  rating.addEventListener("click", function () {
    if (!rating.classList.contains("selected") && flag === 0) {
      rating.classList.add("selected");
      flag = 1;
      submitButton.addEventListener("click", function () {
        ratingDiv.style.display = "none";
        thankYouDiv.style.display = "flex";
        submittedRating.textContent = rating.textContent;
      });
    } else if (rating.classList.contains("selected")) {
      rating.classList.remove("selected");
      flag = 0;
    }
  });
});
