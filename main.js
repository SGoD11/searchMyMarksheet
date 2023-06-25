    // for random Button generation
    function RandomNumber(){
    var randomNumber = Math.random()*78;
    randomNumber = Math.floor(randomNumber)+1;
    return randomNumber;
    }


    //for first click to change color
    var selected,i;
    for( i=0;i<78;i++){
        document.querySelectorAll("button")[i].addEventListener("click",colorChange);
        document.querySelectorAll("button")[i+1].addEventListener("click",colorReverse);
    }

    function colorChange(){
        alert("Search Karo");
        random = RandomNumber();
       selected= document.querySelectorAll("button")[random];
       selected.classList.add("buttonRandom");
       
    }

    //for clicking again color shift to another and the present one toggles of

    function colorReverse(){
        selected.classList.toggle("buttonRandom");
    }


