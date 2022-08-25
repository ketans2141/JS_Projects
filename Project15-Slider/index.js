const slider_img=document.querySelector(".slider_img");
const images=["a.jpg","b.jpg","c.jpg","d.jpg"];
let i=0;
const prevBtn=document.querySelector(".prev_btn");
const nextBtn=document.querySelector(".next_btn");

prevBtn.addEventListener("click",function(){
    if(i<=0)
        i=images.length;
        i--
    return setImg()
})

function setImg(){
    return slider_img.setAttribute('src','Images/'+ images[i]);
}

nextBtn.addEventListener("click",function(){
    if(i>=images.length-1)
    i=-1;
    i++
    return setImg()
})