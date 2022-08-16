let main=document.getElementsByClassName("container");
console.log(main);

for(let i=0;i<main.length;i++){
    main[i].addEventListener("click", function(){
        this.classList.toggle("action");
    });
}