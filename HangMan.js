const bush = document.getElementById('bush')
const sign = document.getElementById('categories')
const gallows = document.getElementById('gallows')
const menuSign = document.getElementById('menu')
const keys = document.getElementById('keys')
const keyboard = document.getElementById('keyboardSub')
const game = document.getElementById('gameSub')
const question = document.getElementById('question')
const answer = document.getElementById('answer')
const head = document.getElementById('head')
const body = document.getElementById('body')
const arms = document.getElementById('arms')
const wholeBody = document.getElementById('wholeBody')
const result = document.getElementById('resultSub')
const Win = document.getElementById('win')
const Loose = document.getElementById('loose')
const correct = document.getElementById('correct')

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let wrongAnswer = 0;


var HistoryQuestions = [{
    Question: 'Who is the king of the Greeks at the time of Trojan Horse built?',
    Answer: 'Agamemnon'
},
{
    Question: 'What is the name of the legendary sword of King Arthur? ',
    Answer: 'Excalibur'
}
]
var ArtQuestions = [{
    Question: 'Who is the famous painter cut his ear?',
    Answer: 'Van Gogh'
},
{
    Question: 'Which European sculptor created the statue “David”?',
    Answer: 'Michelangelo'
}
]
var GeographyQuestions = [{
    Question: 'The Golden Gate is the symbol of what city?',
    Answer: 'San Francisco'
},
{
    Question: 'On which sea does Romania have a coastline?',
    Answer: 'Black Sea'
}
]
var SportQuestions = [{
    Question: 'Dolphin style is related to what sport?',
    Answer: 'Swimming'
},
{
    Question: 'What do you score in American and Canadian football',
    Answer: 'Touchdown'
}
]
var ScienceQuestions = [{
    Question: 'How are the holes of Swiss cheese made?',
    Answer: 'Carbon dioxide'
},
{
    Question: 'What science studies the weather? ',
    Answer: ' Meteorology'
}
]

setTimeout(Bush, 5000)
function Bush() {
    bush.style.left = '1700px'
    bush.style.transform = 'rotate(3600deg)'
    setInterval(Bush, 40000)
    setTimeout(function () { show(bush); }, 39000)

    setTimeout(bushReturn, 15000)
}
function bushReturn() {
    hide(bush)
    bush.style.left = '-100px'
    bush.style.transform = 'rotate(0deg)'

}
// Button click functions
function hideSignButtons() {

    sign.style.right = '-400px'
    setTimeout(function () { hide(sign); }, 1000)
    show(gallows)
    setTimeout(function () { gallows.style.left = '0px'; }, 500)
    show(menuSign)
    setTimeout(function () { menuSign.style.right = '-70px'; }, 500)
    show(game)
    setTimeout(function () { game.style.opacity = '1'; }, 1000)
    show(keyboard)
    setTimeout(function () { keyboard.style.opacity = '1'; }, 1000) 

}
function Return(x) {
    if (x) {
        show(sign)
        setTimeout(function () { sign.style.right = '35px'; }, 1000)
    }
    else{
        show(result)
        setTimeout(function () { result.style.opacity = '1'; }, 1000)
        
    }
    gallows.style.left = '-550px';
    setTimeout(function () { hide(gallows); }, 1000)
    menuSign.style.right = '-400px';
    setTimeout(function () { hide(menuSign); }, 1000)
    game.style.opacity = '0';
    setTimeout(function () { hide(game); }, 1000)
    keyboard.style.opacity = '0';
    setTimeout(function () { hide(keyboard); }, 1000)
    clear()
}
function showAnswer() {
  
    for (i = 0; i < answer.children.length; i++) {
        answer.children[i].children[0].style.opacity = '1'
    }

}
function clear() {

    wrongAnswer = 0;
    answer.innerHTML = ''
    
    for(i=0;i<keys.children.length;i++){
        if(keys.children[i].classList[1] == 'disabled'){
            keys.children[i].classList.remove('disabled')
        }
       
    }
    setTimeout(function () { hide(head); }, 1000)
    setTimeout(function () { hide(body); }, 1000)
    setTimeout(function () { hide(arms); }, 1000)
    setTimeout(function () { hide(wholeBody); }, 1000)

}
function hide(x) {
    x.classList.add('hide')
}
function show(x) {
    x.classList.remove('hide')
}
function historyButton() {
    hideSignButtons()
    Game('history')
}
function artButton() {
    hideSignButtons()
    Game('art')
}
function geographyButton() {
    hideSignButtons()
    Game('geography')
}
function sportButton() {
    hideSignButtons()
    Game('sport')
}
function scienceButton() {
    hideSignButtons()
    Game('science')
}

//Create keyboard
CreateKeys()
function CreateKeys() {
    for (i = 0; i < alphabet.length; i++) {
        var key = document.createElement('div')
        key.classList.add('key')
        x = alphabet[i].toUpperCase()

        key.innerText = x

        keys.appendChild(key)
    }
}

window.onclick = function (e) {
  
}

function Answer(x) {
    x = x.toUpperCase()
    x = x.split('')

    for (i = 0; i < x.length; i++) {
        var parent = document.createElement('DIV')
        var text = document.createElement('span')
        parent.style.margin = '0'
        text.style.opacity = '0'
        text.style.transition = '1s'
        parent.classList.add('key')
        text.innerText = x[i]
        parent.appendChild(text)
        answer.appendChild(parent)
        
        if (text.innerText == '') {
            parent.style.opacity = '0'
            parent.classList.add('done')
        }
    }
}
function Game(x) {
    r = Math.floor(Math.random()*2)
  
    if (x === 'history') {
        q = HistoryQuestions[r].Question
        a = HistoryQuestions[r].Answer
    }
    if (x === 'art') {
        q = ArtQuestions[r].Question
        a = ArtQuestions[r].Answer
    }
    if (x === 'geography') {
        q = GeographyQuestions[r].Question
        a = GeographyQuestions[r].Answer
    }
    if (x === 'sport') {
        q = SportQuestions[r].Question
        a = SportQuestions[r].Answer
    }
    if (x === 'science') {
        q = ScienceQuestions[r].Question
        a = ScienceQuestions[r].Answer
    }
    
    correct.innerText = 'Answer: '+ a
    question.innerText = q
    Answer(a)
}
keys.onclick = function (e) {
    x = e.target.innerText
    y = x.length
    if(y<2){
        
        if (e.target.classList[1] != 'disabled') {
            Play(x)
            win()
            
        }
        e.target.classList.add('disabled')
    
    }
   
}
function Play(x) {
    var respond = false
    for (i = 0; i < answer.children.length; i++) {
        if (x == answer.children[i].children[0].innerText) {
            answer.children[i].children[0].style.opacity = '1'
            respond = true
            answer.children[i].classList.add('done')
        }


    }
    if (respond === false) {
        wrongAnswer++;

    }
    if (wrongAnswer == 1) {
        show(head)
    }
    if (wrongAnswer == 2) {
        show(body)
    }
    if (wrongAnswer == 3) {
        show(arms)
    }
    if (wrongAnswer == 4) {
        show(wholeBody)
    }
    if (wrongAnswer == 5) {
        loose()
        setTimeout(function () { Loose.style.opacity = '1'; }, 1500)
    }

}
function win() {
    var letters = []
    
    for (i = 0; i < answer.children.length; i++) {
        if (answer.children[i].classList.length > 1) {
            letters.push(answer.children[i])
            
        }
    }
    
    if (letters.length == answer.children.length && letters.length>0) {
        x = false
        
        setTimeout(function () { Return(x); }, 3000)
        setTimeout(function () { Win.style.opacity = '1'; }, 4500)

    }
}

function loose() {
   
    x = false
    Return(x)
    
    setTimeout(function () { correct.style.opacity = '1'; }, 3500)

}
function OK(){
    Win.style.opacity = '0';
    Loose.style.opacity = '0';
    result.style.opacity = '0';
    setTimeout(function () { hide(result); }, 1000)
    Return(x=true)
    setTimeout(function () { correct.style.opacity = '0' ; }, 1000)

}
