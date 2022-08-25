const playBtn=document.querySelector(".play");
const pauseBtn=document.querySelector(".pause");
const myVideo=document.getElementById("myVideo")

playBtn.addEventListener("click",function(){
    myVideo.play()
})

pauseBtn.addEventListener("click",function(){
    myVideo.pause();
})