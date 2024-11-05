const form = document.querySelector("form");
const weightGuide = document.querySelector("#weight-guide");
weightGuide.style.display = "none";
// const height = parseInt(document.querySelector("#height").value);
// this use case will give you empty output
form.addEventListener("submit", (e) => {
  // Prevent the default behaviour of form submission
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  // Calculate BMI if height and weight are valid
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please enter a valid height.`;
    weightGuide.style.display = "none"; // Hide guide if input is invalid
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please enter a valid weight.`;
    weightGuide.style.display = "none"; // Hide guide if input is invalid
  } else {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    let bmiCategory = "";
    if (bmi < 18.5) {
      bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiCategory = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obese";
    }
    results.innerHTML = `<p>Your BMI is <strong>${bmi}</strong> — <span>${bmiCategory}</span></p>`;
    weightGuide.style.display = "block";
  }
});
