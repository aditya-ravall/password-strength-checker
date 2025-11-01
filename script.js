function checkStrength() {
  const password = document.getElementById("password").value;
  const strengthText = document.getElementById("strength");
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[@$!%*?&]/.test(password)) strength++;

  switch (strength) {
    case 0:
    case 1:
      strengthText.textContent = "Strength: Very Weak 😞";
      strengthText.style.color = "red";
      break;
    case 2:
      strengthText.textContent = "Strength: Weak 😕";
      strengthText.style.color = "orange";
      break;
    case 3:
      strengthText.textContent = "Strength: Moderate 😐";
      strengthText.style.color = "yellow";
      break;
    case 4:
      strengthText.textContent = "Strength: Strong 🙂";
      strengthText.style.color = "lightgreen";
      break;
    case 5:
      strengthText.textContent = "Strength: Very Strong 💪";
      strengthText.style.color = "green";
      break;
  }
}
