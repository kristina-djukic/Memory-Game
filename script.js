let card = document.querySelectorAll('.card');
let face_up = document.getElementsByClassName('face_up');
let container = document.getElementById('container');
let score = document.getElementById('score');


window.onload=function(){   
    shuffleImage();   
    clicking();
}       

function shuffleImage(){

    card.forEach(applyForEach);
}

function applyForEach(randomize){

    let num = [...Array(card.length).keys()];
    let random = Math.floor(Math.random()*card.length);

    randomize.style.order = num[random];

}


function clicking(){

    for(let i =0; i<card.length; i++){


        face_up[i].classList.add('show');

        setInterval(flipAll, 2000);

        function flipAll(){
        face_up[i].classList.remove('show');
        }

        card[i].addEventListener('click' , clickOne);


        function clickOne(){

            face_up[i].classList.add('flip');
            let filppedCard = document.getElementsByClassName('flip');

            if(filppedCard.length == 2){

                container.style.pointerEvents ='none';
                
                setInterval(clickableAgain, 1000);
                
                function clickableAgain(){
                    
                    container.style.pointerEvents ='all';
                }

                match(filppedCard[0] , filppedCard[1]);
            }
        }
        
    }
}



let scoreCount = 0;

function match(clickedCard1 , clickedCard2){

    if(clickedCard1.dataset.index == clickedCard2.dataset.index){

        scoreCount++;

        score.innerHTML = "Score: " +scoreCount;
       
        clickedCard1.classList.remove('flip');
        clickedCard2.classList.remove('flip');


        clickedCard1.classList.add('match');
        clickedCard2.classList.add('match');


    }else{

        setTimeout(itsNotaMatch, 1000);
            
            function itsNotaMatch(){
            
            clickedCard1.classList.remove('flip');
            clickedCard2.classList.remove('flip');
    }
}
}