const LoginBtn1=document.querySelector("#btn_1")
const popUp=document.querySelector(".pop_up")
const  cancel=document.querySelector(".cancel_btn")
const FinalLogin=document.querySelector("#btn_2")

LoginBtn1.addEventListener("click",function(){
    popUp.classList.add("rise");
});

cancel.addEventListener("click",function(){
    popUp.classList.remove("rise");
})

// if(input.value.length>0){
//     FinalLogin.addEventListener("click",function(){
//         popUp.classList.remove("rise");

//     })
// }