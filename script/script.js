//utility function
function addClass(elementID){
    const addClass = document.getElementById(elementID);
    const add = addClass.classList.add('hidden')
    return add;
}
function removeClass(elementID){
    const removeClass = document.getElementById(elementID);
    const remove = removeClass.classList.remove('hidden')
    return remove;
}

function randomAlphabet(){
    const alphabet ='abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabet.split('');
    
    const randomNumber = Math.random()*26;
    const randomIndex = Math.round(randomNumber);
    const randomAlphabet = alphabetArray[randomIndex];
    return randomAlphabet;

}
function setBackgroundColor(elementID){
    const getID = document.getElementById(elementID);
    const setBackgroundColor = getID.classList.add('bg-orange-400');
    return setBackgroundColor;
}

function removeBackgroundColor(elementID){
    const getID = document.getElementById(elementID);
    const removeBackgroundColor = getID.classList.remove('bg-orange-400');
    return removeBackgroundColor;
}

function getElementValue(value){
    const element = document.getElementById(value);
    const ElementValue = element.innerText;
    const newValue = parseInt(ElementValue);
    return newValue;
}
function setElementValue(element,value){
    const setElementValue = document.getElementById(element);
    setElementValue.innerText = value;
}


//those function actually working inside the game;
function keyPress(event){
    const gamerPressKey = event.key;

    if(gamerPressKey === 'Enter'){
        playNow();
    }else if (gamerPressKey === 'Escape'){
        gameOver();
    }

    //expected Press key
    const currentAlphabet = document.getElementById('showElement');
    const TargetPressKey = currentAlphabet.innerText;
    const expectedPressKey = TargetPressKey.toLocaleLowerCase();


    if (gamerPressKey === expectedPressKey){
        removeBackgroundColor(expectedPressKey);
        gameLoop();
        //score update
        const setScore = getElementValue('score') + 1;
        //show the score
        setElementValue('score',setScore);
    }else{
        //decrease life
        const newLife = getElementValue('life') - 1;
        //show current life
        setElementValue('life',newLife);

        if (newLife <= 0){
            gameOver();
        }
    }

    
}
//Game running
document.addEventListener('keyup',keyPress);

//open game interface
function playNow(){
//hide everything without playground
  addClass('paly');
  addClass('scoreBoard');

//initial value before start game
  setElementValue('life',5);
  setElementValue('score',0);

  removeClass('palyGround');
//   gameLoop();


}

//Play ground
function gameLoop(){
    const showElement = document.getElementById('showElement');
    const show = showElement.innerText = randomAlphabet();
    setBackgroundColor(show);
   
}

//game over function
function gameOver(){
    addClass('palyGround');
    removeClass('scoreBoard');

    // show the total score
    const totalScore = getElementValue('score');
    console.log(totalScore);
    setElementValue('total-Score',totalScore);
}