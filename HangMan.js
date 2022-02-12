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