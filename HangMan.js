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
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let wrongAnswer = 0;
let answer2 = 'Loremipsum'

var HistoryQuestions = [{
    Question: 'Who is the king of the Greeks at the time of Trojan Horse',
    Answer: 'Agamemnon'
},
{
    Question: 'What is the name of the legendary sword of King Arthur ',
    Answer: 'Excalibur'
}
]

// 0000000000000000000000000000000000000000000000000000

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    
    if (xhr.status === 4 && xhr.status === 200) {
        
    }
}
xhr.open('GET', 'HistoryQuestions.txt', true);
xhr.send()

//textSplit()

function textSplit() {
    x = xhr.responseType
    console.log(x)
    x = String(x)
    console.log(x)
    x = x.split('Question:')
    console.log(x)
}

// 0000000000000000000000000000000000000000000000000000

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

setTimeout(Bush, 5000)
function Bush() {
    // show(bush)
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
    // setTimeout(function(){show(wholeBody);},1000)

}
function Return() {
    show(sign)
    setTimeout(function () { sign.style.right = '35px'; }, 1000)
    gallows.style.left = '-550px';
    setTimeout(function () { hide(gallows); }, 1000)
    menuSign.style.right = '-400px';
    setTimeout(function () { hide(menuSign); }, 1000)
    game.style.opacity = '0';
    setTimeout(function () { hide(game); }, 1000)
    keyboard.style.opacity = '0';
    setTimeout(function () { hide(keyboard); }, 1000)
}
function showAnswer() {
    console.log(answer.children[2].children)
    for (i = 0; i < answer.children.length; i++) {
        answer.children[i].children[0].style.opacity = '1'
    }
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
}
function geographyButton() {
    hideSignButtons()
}
function sportButton() {
    hideSignButtons()
}
function scienceButton() {
    hideSignButtons()
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
    console.log(e.target)
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
    }
}
function Game(x) {
    if (x == 'history') {
        q = HistoryQuestions[0].Question
        a = HistoryQuestions[0].Answer

    }
    if (x == 'art') {

    }
    if (x == 'geography') {

    }
    if (x == 'sport') {

    }
    if (x == 'science') {

    }
    question.innerText = q
    Answer(a)
}
document.getElementById('keys').onclick = function (e) {
    x = e.target.innerText
    if (e.target.classList[1] != 'disabled') {
        Play(x)
    }
    e.target.classList.add('disabled')

}
function Play(x) {
    var respond = false
    for (i = 0; i < answer.children.length; i++) {
        if (x == answer.children[i].children[0].innerText) {
            answer.children[i].children[0].style.opacity = '1'
            respond = true
        }

        
    }
    console.log(respond)
    console.log(wrongAnswer)
    if(respond === false){
        wrongAnswer ++;
        
    }
    if(wrongAnswer == 1){
        show(head)
    }
    if(wrongAnswer == 2){
        show(body)
    }
    if(wrongAnswer == 3){
        show(arms)
    }
    if(wrongAnswer == 4){
        show(wholeBody)
    }
    if(wrongAnswer == 5){
        
    }
    
}