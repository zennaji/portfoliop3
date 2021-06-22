
// input selecteren
inptAdd = document.querySelector(".Add");
// bitton selecteren
button =  document.querySelector(".addbtn"); 
// output selecteren
output =  document.querySelector(".x"); 






button.addEventListener("click", function(){
    output.textContent = inptAdd.value/3.2808;

  inptAdd.value = "";
})






