    // for color changing
    function RandomNumber(){
    var randomNumber = Math.random()*78;
    randomNumber = Math.floor(randomNumber)+1;
    return randomNumber;
    }


//for any button first clicked by user 
for(var i=0;i<78;i++){
        
    var clickedHere = document.querySelectorAll("button")[i].addEventListener("click",colorRandom);
    if(clickedHere==true){
        afterClick();
    }
    
}
function afterClick(){
    document.querySelectorAll("button")[i].addEventListener("click",otherColor);
}






// for clicking
function colorRandom(){
    alert("Search Karo");
    document.querySelectorAll("button")[RandomNumber()].classList.add("buttonRandom");
    afterClick();
    
}

// for and 2nd, 3rd button clicked by user


function otherColor(){
    // alert("Search karo");
    document.querySelectorAll("button")[RandomNumber()].classList.add("");
}

// function randomReccursion(){
//     if(random==1){
//         return 1;
//     }
//     randomReccursion(randomNumber-1);
// }
