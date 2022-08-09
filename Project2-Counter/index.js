const buttons=document.querySelectorAll(".btn");
const counter=document.querySelector("#counter");
console.log(buttons)

let count=0;
buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const styles=e.currentTarget.classList;
        if(styles.contains('increase')){
            count++
        }else if(styles.contains('decrease')){
            count--
        }else{
            count=0
        }

        counter.textContent=count;


        if(count>0){
            counter.style.color="green"
        }
        if(count<0){
            counter.style.color="red"
        }
        if(count==0){
            counter.style.color="gray"
        }
    })
})