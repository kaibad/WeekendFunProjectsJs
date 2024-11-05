const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const mainHeading = document.querySelector("h1");
const subHeading = document.querySelector("h2");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Remove border from all buttons
    buttons.forEach((btn) => {
      btn.style.border = "none";
    });
    // Set border on the clicked button
    e.target.style.border = "2px solid black";
    // Set the background color based on the button's id
    body.style.backgroundColor = e.target.id;
    if (e.target.id === "blue" || e.target.id === "purple") {
      mainHeading.style.color = "white";
      subHeading.style.color = "white";
    } else {
      // Reset colors if needed
      mainHeading.style.color = "";
      subHeading.style.color = "";
    }
    // if (e.target.id === "grey") {
    //   body.style.backgroundColor = "grey";
    // } else if (e.target.id === "white") {
    //   body.style.backgroundColor = "white";
    // } else if (e.target.id === "blue") {
    //   body.style.backgroundColor = "blue";
    // } else if (e.target.id === "yellow") {
    //   body.style.backgroundColor = "yellow";
    // }
    // If the IDs match the color names exactly, the commented code (e.target.id)
    //  is more concise and achieves the same result. The if
    // statements allow for flexibility if the IDs and color names differ.
  });
});
