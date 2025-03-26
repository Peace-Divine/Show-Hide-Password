let input = document.getElementById("pass");
let eyeIcons = document.getElementById("eyeIcon");
eyeIcons.addEventListener("click", function () {
  if (input.type === "password") {
    input.type = "text";
    eyeIcons.textContent = "🙉";
  } else {
    input.type = "password";
    eyeIcons.textContent = "👁️";
  }
});
