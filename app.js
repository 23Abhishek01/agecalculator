document.getElementById('ageForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const resultDiv = document.getElementById('result');
  const dobInput = document.getElementById('dob');
  const dob = dobInput.value;

  if (!dob) {
    resultDiv.textContent = "Please select your date of birth.";
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  if (birthDate > today) {
    resultDiv.textContent = "Date of birth cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  resultDiv.textContent = `${years} years, ${months} months, and ${days} days`;
});
