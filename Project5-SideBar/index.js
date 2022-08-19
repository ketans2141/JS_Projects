let toggleBtn=document.querySelector(".toggleBtn");
let cancelBtn=document.querySelector(".cancelBtn");
let aside=document.querySelector("aside")

toggleBtn.addEventListener("click",function(){
    aside.classList.toggle("action");
})

cancelBtn.addEventListener("click",function(){
    console.log(cancelBtn)
    // cancelBtn.classList.add("cancel");
    // cancelBtn.classList.toggle("cancel");
    aside.classList.toggle("action");
})