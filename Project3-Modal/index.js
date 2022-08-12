const LoginBtn=document.querySelector("#btn_1")
const popUp=document.querySelector(".pop_up")
const  cancel=document.querySelector(".cancel_btn")


LoginBtn.addEventListener("click",function(){
    popUp.classList.add("rise");
});

cancel.addEventListener("click",function(){
    popUp.classList.remove("rise");
})