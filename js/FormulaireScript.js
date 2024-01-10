document.addEventListener("DOMContentLoaded", function () {
  var Checkbox = document.getElementById("Autre");
  var textBox = document.getElementById("AutreText");
  Checkbox.addEventListener("change", function () {
    textBox.style.visibility = Checkbox.checked ? "visible" : "hidden";
  });
});
