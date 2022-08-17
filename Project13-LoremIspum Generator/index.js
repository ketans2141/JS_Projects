const array=["Don't forget that gifts often come with costs that go beyond their purchase price. When you purchase a child the latest smartphone, you're also committing to a monthly phone bill. When you purchase the latest gaming system, you're likely not going to be satisfied with the games that come with it for long and want to purchase new titles to play. When you buy gifts it's important to remember that some come with additional costs down the road that can be much more expensive than the initial gift itself.",

"Then came the night of the first falling star. It was seen early in the morning, rushing over Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.",

"There was something special about this little creature. Donna couldn't quite pinpoint what it was, but she knew with all her heart that it was true. It wasn't a matter of if she was going to try and save it, but a matter of how she was going to save it. She went back to the car to get a blanket and when she returned the creature was gone.",


"What is the best way to get what you want? she asked. He looked down at the ground knowing that she wouldn't like his answer. He hesitated, knowing that the truth would only hurt. How was he going to tell her that the best way for him to get what he wanted was to leave her?",

"I haven't bailed on writing. Look, I'm generating a random paragraph at this very moment in an attempt to get my writing back on track. I am making an effort. I will start writing consistently again!",

" When you purchase the latest gaming system, you're likely not going to be satisfied with the games that come with it for long and want to purchase new titles to play. When you buy gifts it's important to remember that some come with additional costs down the road that can be much more expensive than the initial gift itself.",

"They say you only come to peace with yourself when you know yourself better than those around you. Derick knew nothing about this. He thought he had found peace but this was an illusion as he was about to find out with an unexpected occurrence that he actually knew nothing about himself.",

"He knew what he was supposed to do. That had been apparent from the beginning. That was what made the choice so difficult. What he was supposed to do and what he would do were not the same. This would have been fine if he were willing to face the inevitable consequences, but he wasn't.",

"There was something in the tree. It was difficult to tell from the ground, but Rachael could see movement. She squinted her eyes and peered in the direction of the movement, trying to decipher exactly what she had spied. The more she peered, however, the more she thought it might be a figment of her imagination. Nothing seemed to move until the moment she began to take her eyes off the tree. Then in the corner of her eye, she would see the movement again and begin the process of staring again."]


console.log(array)

const item=document.querySelector("#items")
const btn=document.querySelector(".btn");
const paraContainer=document.querySelector("#para")

btn.addEventListener("click",function(){
    console.log(item.value)
    if(isNaN(item.value)||item.value<=0||item.value>9){
        randomIndex=Math.floor(Math.random()*array.length)
        paraContainer.innerHTML=`<p class="paras>${array[randomIndex]}`;
    }
    else{
        const data=array.slice(0,item.value)
        const paras=data.map((d)=>{
            return `<p class="paras"> ${d}</p>`
        })
        paraContainer.innerHTML=paras.join("");
    }
})