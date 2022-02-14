const bush = document.getElementById('bush')
const sign = document.getElementById('categories')
const gallows = document.getElementById('gallows')
const menuSign = document.getElementById('menu')

let Question = function(question , answer){
    this.question = question;
    this.answer = answer;
}

Question.prototype.selected = function(question,answer){
    this.total  = question + answer
};
var n = new Question('naber','iyi senden')
console.log(n)
console.log(n.selected)

var x = document.getElementById('artButton').onclick = function(){
    bush.style.left = '1700px'
    bush.style.transform = 'rotate(3600deg)'
    
}



// Button click functions
function hideSignButtons(){
    sign.style.right = '-400px'
    setTimeout(function(){hide(sign);},1000)
    show(gallows)
    setTimeout(function(){gallows.style.left  = '0px';},500)
    show(menuSign)
    setTimeout(function(){menuSign.style.right  = '-70px';},500)
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

