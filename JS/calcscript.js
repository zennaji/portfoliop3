let calcbtn = document.querySelector(".calculate");

//========== Times===========
let Intimes = document.querySelectorAll(".calculate-times-input");
let outtimes = document.querySelector(".calculate-times-output");

calcbtn.addEventListener("click", function(){

    for (let i =0; i<Intimes.length;i++){
        outtimes.textContent = Intimes[0].value * Intimes[1].value ;
    }
    
})

//==========  Divide ========
let Indvd = document.querySelectorAll(".calculate-divide-input");
let Outdvd = document.querySelector(".calculate-divide-output");

calcbtn.addEventListener("click", function(){

    for (let i =0; i<Indvd.length;i++){
        Outdvd.textContent = Indvd[0].value / Indvd[1].value ;

        if(Indvd[0].value === "" || Indvd[1].value === ""){
            Outdvd.textContent = "0";
        }
        else if (Indvd[1].value === "0"){
            Outdvd.textContent = "Syntax Error";
        }

        
    }
    
})


//   Plus ==========
let Inadd = document.querySelectorAll(".calculate-add-input");
let Outadd = document.querySelector(".calculate-add-output");

calcbtn.addEventListener("click", function(){

    for (let i =0; i<Inadd.length;i++){
        Outadd.textContent = Number(Inadd[0].value) + Number(Inadd[1].value) ;
    }
    
})
// MIN ==========
let Insub = document.querySelectorAll(".calculate-substract-input");
let Outsub = document.querySelector(".calculate-substract-output");

calcbtn.addEventListener("click", function(){

    for (let i =0; i<Insub.length;i++){
        Outsub.textContent = Insub[0].value - Insub[1].value ;
    }
    
})







