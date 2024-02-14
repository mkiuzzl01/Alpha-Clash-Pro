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

//open game interface
function playNow(){
  addClass('paly')
  removeClass('palyGround')
  gameLoop()

}

//Play ground
function gameLoop(){
    const showElement = document.getElementById('showElement');
    const show = showElement.innerText = randomAlphabet();
    setBackgroundColor(show);
   
}