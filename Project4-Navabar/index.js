let clickBar=document.querySelector(".fa-bars");
let dropDown=document.querySelector(".drop_down")

clickBar.addEventListener("click",function(){
    console.log(clickBar);
    // clickBar.style.transform="rotate(90deg)"
    clickBar.classList.toggle("rotate");
    dropDown.classList.toggle("action");

})