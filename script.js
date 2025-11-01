const password = document.getElementById("password");
const strength = document.getElementById("strength");

password.addEventListener("input", () => {
  const val = password.value;
  let strengthValue;

  if (val.length === 0) {
    strengthValue = "";
  } else if (val.length < 6) {
    strengthValue = "Weak ❌";
    strength.style.color = "red";
  } else if (val.match(/[A-Z]/) && val.match(/[0-9]/) && val.match(/[^A-Za-z0-9]/)) {
    strengthValue = "Strong ✅";
    strength.style.color = "green";
  } else {
    strengthValue = "Medium ⚠️";
    strength.style.color = "orange";
  }

  strength.textContent = strengthValue;
});
