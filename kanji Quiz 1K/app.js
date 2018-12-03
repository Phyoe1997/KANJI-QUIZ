// The area where kanji goes
const kanji = document.querySelector('.kanji');

// The area where the user type the romaji

const input = document.getElementById('input');

// the button the user clicks to check their answer 

const check = document.getElementById('check');

const kanjiObj = {
    jin:"人",
    shin:"新",
    eki:"駅",
    den:"電"
}

const kanjiValue =Object.values(kanjiObj);

const kanjiKey = Object.keys(kanjiObj);

let counter = 0;

let nowKanji = kanjiValue[counter];

let nowRomaji = kanjiKey[counter];

check.addEventListener('click',function(){
   if(input.value==nowRomaji){
       displayCorrect();
       sayCorrect();
   }else{
       displayIncorrect();
   }
});
function displayCorrect(){

    if(counter<=kanjiValue.length){
        counter++
        nowKanji = kanjiValue[counter]
        nowRomaji = kanjiKey[counter]
        kanji.innerHTML = nowKanji;
        input.value ='';
    }else{
        kanji.innerHTML = "GAME OVER!!!!!!";
    }
   
}
function displayIncorrect(){
    kanji.innerHTML= "Wrong";
    kanji.style.color = "red";
    input.value ="";
    setTimeout(function(){
        kanji.style.color = "black";
        kanji.innerHTML = nowKanji;
    },1000);
}

function sayCorrect(){
    if(counter<=3){
    kanji.innerHTML = ":)Correct:)";
    setTimeout(function(){
        kanji.innerHTML = nowKanji;
    },1000);
    }else{
        kanji.innerHTML= 
        
        "good luck :)"
    }
}