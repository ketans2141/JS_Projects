let button=document.getElementById("btn");
let colorCode=document.getElementById("color_code");

button.addEventListener("click",changeColor)

function changeColor(){
    const randomNumber=Math.floor(Math.random()*16777215);
    const randomCode="#"+randomNumber.toString(16);
    console.log(randomNumber,randomCode);
    colorCode.innerText=randomCode
    document.body.style.backgroundColor=randomCode

}

document.body.style.backgroundColor=randomCode
changeColor();