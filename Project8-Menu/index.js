let All=document.querySelector(".all");
let breakfastBtn=document.querySelector(".breakfastbtn");
let lunchBtn=document.querySelector(".lunchbtn");
let shakesBtn=document.querySelector(".shakesbtn");
let dinnerBtn=document.querySelector(".dinnerbtn");

All.addEventListener("click",function(){
    breakFastDiv.style.display="flex";
    shakesDiv.style.display="flex";
    lunchDiv.style.display="flex";
    dinnerDiv.style.display="flex";
})

let breakFastDiv=document.querySelector(".breakfastDiv");

breakfastBtn.addEventListener("click",function(){
    console.log(breakfastBtn)
    breakFastDiv.style.display="flex";
    lunchDiv.style.display="none";
    dinnerDiv.style.display="none";
    shakesDiv.style.display="none";
});

let shakesDiv=document.querySelector(".shakesDiv");

shakesBtn.addEventListener("click",function(){
    shakesDiv.style.display="flex";
    breakFastDiv.style.display="none";
    lunchDiv.style.display="none";
    dinnerDiv.style.display="none";
});

let lunchDiv=document.querySelector(".lunchDiv");

lunchBtn.addEventListener("click",function(){
    lunchDiv.style.display="flex";
    breakFastDiv.style.display="none"
    shakesDiv.style.display="none";
    dinnerDiv.style.display="none";
});

let dinnerDiv=document.querySelector(".dinnerDiv");

dinnerBtn.addEventListener("click",function(){
    dinnerDiv.style.display="flex";
    lunchDiv.style.display="none";
    breakFastDiv.style.display="none"
    shakesDiv.style.display="none";
})