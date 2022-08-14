const createTask = document.querySelector("#create_task");
const mainDiv = document.querySelector(".main");
const body = document.querySelector("body");

// -------------getting navbar buttons----------------
const mark = document.querySelector(".mark");
const redColor = document.querySelector(".red");
const yellowColor = document.querySelector(".yellow");
const blueColor = document.querySelector(".blue");
const blackColor = document.querySelector(".black");



let doneBtn;
createTask.addEventListener("click", function () {
    console.log(createTask)

    //     let mainDiv=document.createElement("div");
    // mainDiv.classList.add("main");

    let innerDiv = document.createElement("div");
    innerDiv.classList.add("inner_main");

    let popUp = document.createElement("div");
    popUp.classList.add("pop_up");

    let cancel = document.createElement("i");
    cancel.classList.add("fa-solid");
    cancel.classList.add("fa-xmark");
    cancel.classList.add("cancel_btn");


    cancel.addEventListener("click", function () {
        console.log(cancel)
        cancel.parentElement.parentElement.remove();

    })



    let textAreaDiv = document.createElement("div");
    textAreaDiv.classList.add("input_area");

    let textArea = document.createElement("textarea");
    textArea.type = "text";
    textArea.setAttribute("id", "main_input");
    textArea.setAttribute("placeholder", "Enter your Task!");
    textArea.setAttribute("cols", "30");
    textArea.setAttribute("rows", "14");


    doneBtn = document.createElement("button");
    doneBtn.classList.add("done_btn");
    doneBtn.innerText = "Done";


    let colorDiv = document.createElement("div");
    colorDiv.classList.add("color_div");

    let redBtn = document.createElement("button");
    redBtn.classList.add("Red");

    let yellowBtn = document.createElement("button");
    yellowBtn.classList.add("Yellow");

    let blueBtn = document.createElement("button");
    blueBtn.classList.add("Blue");

    let blackBtn = document.createElement("button");
    blackBtn.classList.add("Black");


    textAreaDiv.append(textArea, doneBtn);
    colorDiv.append(redBtn, yellowBtn, blueBtn, blackBtn);
    popUp.append(cancel, textAreaDiv, colorDiv);
    innerDiv.append(popUp);
    mainDiv.append(innerDiv);
    // body.append(mainDiv);




    doneBtn.addEventListener("click", function () {
        if (textArea.value.length > 0) {

            let taskDiv = document.createElement("div");
            taskDiv.classList.add("task_div");

            let inputDiv = document.createElement("div");
            inputDiv.classList.add("input_div");

            let textInput = document.createElement("input");
            textInput.setAttribute("id", "text_input");

            // ---------------------------creating Icons ------------------

            let favIcons = document.createElement("div");
            favIcons.classList.add("fav_icons");

            let leftIconDiv = document.createElement("div");
            leftIconDiv.classList.add("left_icon_div");

            let tick = document.createElement("i");
            tick.classList.add("fa-solid");
            tick.classList.add("fa-check");
            tick.classList.add("tick");

            let delBtn = document.createElement("i");
            delBtn.classList.add("fa-solid");
            delBtn.classList.add("fa-trash-can");
            delBtn.classList.add("del");

            let editBtn = document.createElement("i");
            editBtn.classList.add("fa-solid");
            editBtn.classList.add("fa-pen");
            editBtn.classList.add("edit");

            let colorBox = document.createElement("i");
            colorBox.classList.add("fa-solid");
            colorBox.classList.add("fa-square-full");
            colorBox.classList.add("color_box");


            // ------------------creating lock & unlock div ---------------------

            let rightIconDiv = document.createElement("div");
            rightIconDiv.classList.add("right_icon_div");

            let lock = document.createElement("i");
            lock.classList.add("fa-solid");
            lock.classList.add("fa-lock");
            lock.classList.add("lock");

            let unlock = document.createElement("i");
            unlock.classList.add("fa-solid");
            unlock.classList.add("fa-lock-open");
            unlock.classList.add("unlock");




            // append 

            leftIconDiv.append(tick, delBtn, editBtn, colorBox);
            rightIconDiv.append(lock);
            favIcons.append(leftIconDiv, rightIconDiv);

            inputDiv.append(textInput);
            taskDiv.append(inputDiv, favIcons);

            mainDiv.append(taskDiv);


            textInput.value = textArea.value
            doneBtn.parentElement.parentElement.parentElement.remove();

            // --------------------------taskdiv---------------------

            textInput.setAttribute("readonly", "readonly");

            // ---------------------------lock----------------------
            // leftIconDiv.style.display="none"
            lock.addEventListener("click", function () {
                lock.replaceWith(unlock);

                tick.style.display = "inline-block";
                delBtn.style.display = "inline-block";
                editBtn.style.display = "inline-block";
                colorBox.style.display = "inline-block";


            })


            // -----------------------------unlock----------------------


            unlock.addEventListener("click", function () {
                unlock.replaceWith(lock);
                tick.style.display = "none";
                delBtn.style.display = "none";
                editBtn.style.display = "none";
                colorBox.style.display = "none";
            })



            // ---------------------------------tick---------------------

            tick.addEventListener("click", function () {
                tick.parentElement.parentElement.parentElement.style.display = "none";
            })

            // ---------------------------------mark------------------------

            mark.addEventListener("click", function () {
                tick.parentElement.parentElement.parentElement.style.display = "inline-block";
            })



            // ----------------------------del----------------------


            delBtn.addEventListener("click", function () {
                delBtn.parentElement.parentElement.parentElement.remove();
            })


            // ------------------------------edit----------------------

            editBtn.addEventListener("click", function () {
                textInput.removeAttribute("readonly");
            })


            // -------------------------------colorBox--------------------

            colorBox.style.color = "gray"
            // taskDiv.style.borderTop="black"
            colorBox.addEventListener("click", function () {

                console.log(colorBox)


                if (colorBox.style.color == "black") {
                    colorBox.style.color = "red";
                    taskDiv.style.borderTop = "10px solid red";
                }
                else if (colorBox.style.color === "red") {
                    colorBox.style.color = "yellow";
                    taskDiv.style.borderTop = "10px solid yellow";
                }
                else if (colorBox.style.color === "yellow") {
                    colorBox.style.color = "blue";
                    taskDiv.style.borderTop = "10px solid blue";
                }
                else {
                    colorBox.style.color = "black";
                    taskDiv.style.borderTop = "10px solid black";
                }
            })

            // -------------- functionality on redColor in nav -------------

            redColor.addEventListener("click",function(){
                if(taskDiv.style.borderTop=="10px solid red"){
                    tick.parentElement.parentElement.parentElement.style.display = "inline-block";
                }
                else if( taskDiv.style.borderTop = "10px solid yellow"){
                    tick.parentElement.parentElement.parentElement.style.display = "none ";

                }
                else if(taskDiv.style.borderTop = "10px solid blue"){
                    tick.parentElement.parentElement.parentElement.style.display = "none ";

                }
                else if( taskDiv.style.borderTop = "10px solid black"){
                    tick.parentElement.parentElement.parentElement.style.display = "none ";
                }
            })


            // -------------------------functionality on yellowColor in nav-------------

            yellowColor.addEventListener("click",function(){
                if(taskDiv.style.borderTop=="10px solid yellow"){
                    tick.parentElement.parentElement.parentElement.style.display = "inline-block";
                }
                else if( taskDiv.style.borderTop = "10px solid red"){
                    tick.parentElement.parentElement.parentElement.style.display = "none ";

                }
                else if(taskDiv.style.borderTop = "10px solid blue"){
                    tick.parentElement.parentElement.parentElement.style.display = "none ";

                }
                else if( taskDiv.style.borderTop = "10px solid black"){
                    tick.parentElement.parentElement.parentElement.style.display = "none ";
                }
            })

            // ----------------------functionality on blueColor in nav------------------

            blueColor.addEventListener("click",function(){
                if(taskDiv.style.borderTop=="10px solid blue"){
                    tick.parentElement.parentElement.parentElement.style.display = "inline-block";
                }
                else if( taskDiv.style.borderTop = "10px solid red"){
                    tick.parentElement.parentElement.parentElement.style.display = "none ";

                }
                else if(taskDiv.style.borderTop = "10px solid yellow"){
                    tick.parentElement.parentElement.parentElement.style.display = "none ";

                }
                else if( taskDiv.style.borderTop = "10px solid black"){
                    tick.parentElement.parentElement.parentElement.style.display = "none ";
                }
            })


            // -------------------------functionality on blackColor in nav------------------

            blackColor.addEventListener("click",function(){
                if(taskDiv.style.borderTop=="10px solid black"){
                    tick.parentElement.parentElement.parentElement.style.display = "inline-block";
                }
                else if( taskDiv.style.borderTop = "10px solid red"){
                    tick.parentElement.parentElement.parentElement.style.display = "none ";

                }
                else if(taskDiv.style.borderTop = "10px solid yellow"){
                    tick.parentElement.parentElement.parentElement.style.display = "none ";

                }
                else if( taskDiv.style.borderTop = "10px solid blue"){
                    tick.parentElement.parentElement.parentElement.style.display = "none ";
                }
            })
        }
    })



})


