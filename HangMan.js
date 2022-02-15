const bush = document.getElementById('bush')
const sign = document.getElementById('categories')
const gallows = document.getElementById('gallows')
const menuSign = document.getElementById('menu')
const keys = document.getElementById('keys')
const keyboard = document.getElementById('keyboardSub')
const game = document.getElementById('gameSub')
const answer = document.getElementById('answer')
const head  =document.getElementById('head')
const body  =document.getElementById('body')
const arms  =document.getElementById('arms')
const wholeBody  =document.getElementById('wholeBody')
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

let answer2 = 'Loremipsum'
// let Question = function(question , answer){
//     this.question = question;
//     this.answer = answer;
// }

// Question.prototype.selected = function(question,answer){
//     this.total  = question + answer
// };
// var n = new Question('naber','iyi senden')
// console.log(n)
// console.log(n.selected)

Bush()
 function Bush(){
   
    bush.style.left = '1700px'
    bush.style.transform = 'rotate(3600deg)'
    setInterval(Bush,40000)
    setInterval(function(){show(bush);},32000)
    setTimeout(function(){hide(bush);},16000)
    setTimeout(bushReturn,16000)
}
function bushReturn(){
    
    bush.style.left = '-100px'
    bush.style.transform = 'rotate(-3600deg)'
    
}
// Button click functions
function hideSignButtons(){
    sign.style.right = '-400px'
    setTimeout(function(){hide(sign);},1000)
    show(gallows)
    setTimeout(function(){gallows.style.left  = '0px';},500)
    show(menuSign)
    setTimeout(function(){menuSign.style.right  = '-70px';},500)
    show(game)
    setTimeout(function(){game.style.opacity  = '1';},1000)
    show(keyboard)
    setTimeout(function(){keyboard.style.opacity  = '1';},1000)
    // setTimeout(function(){show(wholeBody);},1000)
}
function Return(){
    show(sign)
    setTimeout(function(){sign.style.right = '35px';},1000)
    gallows.style.left  = '-550px';
    setTimeout(function(){hide(gallows);},1000)
    menuSign.style.right  = '-400px';
    setTimeout(function(){hide(menuSign);},1000)
    game.style.opacity  = '0';
    setTimeout(function(){hide(game);},1000)
    keyboard.style.opacity  = '0';
    setTimeout(function(){hide(keyboard);},1000)
    
}

function hide(x){
    x.classList.add('hide')
}
function show(x){
    x.classList.remove('hide')
}
function historyButton(){
    hideSignButtons()
}
function artButton(){
    hideSignButtons()
}
function geographyButton(){
    hideSignButtons()
}
function sportButton(){
    hideSignButtons()
}
function scienceButton(){
    hideSignButtons() 
}

//Create keyboard
CreateKeys()
function CreateKeys(){
    for(i=0;i<alphabet.length;i++){
        var key = document.createElement('DIV')
        key.classList.add('key')
        x = alphabet[i].toUpperCase()
        console.log(x)
        console.log(key)
        console.log(alphabet[i])
        key.innerText = x
        console.log(keys)
        keys.appendChild(key)
    }
}

window.onclick = function(e){
    console.log(e.target)
}

Answer()
function Answer(){
    answer2 = answer2.split('')
    for(i=0;i<answer2.length;i++){
        var parent = document.createElement('DIV')
        var text = document.createElement('span')
        parent.style.margin = '0'
        text.style.opacity = '0'
        parent.classList.add('key')
        text.innerText = answer2[i]
        parent.appendChild(text)
        answer.appendChild(parent)
    }
}
