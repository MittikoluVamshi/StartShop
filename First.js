var MainImg = document.getElementById("mainimg");
        var SmallImg = document.getElementsByClassName("small-imgs");

        SmallImg[0].onclick = function(){
            MainImg.src = SmallImg[0].src;
        }
        SmallImg[1].onclick = function(){
            MainImg.src = SmallImg[1].src;
        }
        SmallImg[2].onclick = function(){
            MainImg.src = SmallImg[2].src;
        }
        SmallImg[3].onclick = function(){
            MainImg.src = SmallImg[3].src;
        }