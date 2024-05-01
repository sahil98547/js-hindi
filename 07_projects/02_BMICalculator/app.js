function calculateBMI(height, weight) {
  const heightInMeter = height / 100; // Convert height from cm to meter
  const bmi = weight / (heightInMeter * heightInMeter);
  return bmi.toFixed(2); // Round BMI to two decimal places
}


document.querySelector('form').addEventListener('submit', function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Retrieve the user input values
  const heightInput = document.getElementById('height').value;
  const weightInput = document.getElementById('weight').value;

  // Convert the input strings to numbers
  const height = parseInt(heightInput);
  const weight = parseInt(weightInput);

  if (!isNaN(height) && !isNaN(weight) && height != '' && height > 0 && weight != '' && weight > 0) {
    const bmi = calculateBMI(height, weight);
    document.getElementById('results').innerText = `BMI: ${bmi}`;
  }
  else {
    alert('Please enter valid numbers for height and weight.');
  }
});






