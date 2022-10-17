let button=document.querySelectorAll("button");
        for (let i=0; i<button.length; i++){
            button[i].addEventListener("click",function(){
                button[i].style.borderRadius="20px";
                button[i].style.color="white";
                setTimeout(() => {
                    button[i].style.color="#4a25aa";
                    button[i].style.borderRadius="5px";
                }, 2000);
            })
        }
        let slide =document.querySelectorAll(".slide");
        slide[0].classList.add("next");
        let interval=setInterval(next,3000);
        let prevBut=document.querySelector(".prev-button");
        let nextBut=document.querySelector(".next-button");
        prevBut.addEventListener("click",function(){
            clearInterval(interval);
            interval=setInterval(next,3000);
            prev();
        });
        nextBut.addEventListener("click",function(){
            clearInterval(interval);
            interval=setInterval(next,3000);
            next();
        });
        function next(){
            if (slide[0].classList.contains("next")||slide[0].classList.contains("prev")){
                slide[0].classList.remove("prev");
                slide[0].classList.remove("next");
                slide[1].classList.add("next");
            }
            else if (slide[1].classList.contains("next")||slide[1].classList.contains("prev")){
                slide[1].classList.remove("next");
                slide[1].classList.remove("prev");
                slide[2].classList.add("next");
            }
            else if (slide[2].classList.contains("next")||slide[2].classList.contains("prev")){
                slide[2].classList.remove("prev");
                slide[2].classList.remove("next");
                slide[0].classList.add("next");
            }
        }
        function prev(){
            if (slide[0].classList.contains("next")||slide[0].classList.contains("prev")){
                slide[0].classList.remove("prev");
                slide[0].classList.remove("next");
                slide[2].classList.add("prev");
            }
            else if (slide[1].classList.contains("next")||slide[1].classList.contains("prev")){
                slide[1].classList.remove("next");
                slide[1].classList.remove("prev");
                slide[0].classList.add("prev");
            }
            else if (slide[2].classList.contains("next")||slide[2].classList.contains("prev")){
                slide[2].classList.remove("prev");
                slide[2].classList.remove("next");
                slide[1].classList.add("prev");
            }
        }