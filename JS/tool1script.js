// input selecteren
inptAdd = document.querySelector(".Add");
// button selecteren
button = document.querySelector(".addbtn");
// output selecteren
output = document.querySelector(".output");
// eventlistener met function met formule
button.addEventListener("click", function () {
  output.textContent = inptAdd.value / 3.2808;

  inptAdd.value = "";
});
