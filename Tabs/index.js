const tabs=document.querySelectorAll(".tabs li");
const paraDiv=document.querySelectorAll(".para")

tabs.forEach((tab,index)=>{
    
    console.log(tabs)
    tab.addEventListener("click",()=>{
        // tabs[0].style.color="yellow"
        paraDiv.forEach((c)=>c.classList.remove("active"));
        paraDiv[index].classList.add("active")
    })
})
