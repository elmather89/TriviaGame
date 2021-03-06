$(document).ready(function() {
  // new question variables ===============================
  var q1 = ["What ingredient in milk is eventually devoured by bacteria, causing the sour taste?"];
  var a1 = ["Lactose", "Legumes", "Butter"];

  var q2 = ["What is the 'groundnut' better known as?"];
  var a2 = [ "Acorn", "Cashew", "Peanut"];
  
  var q3 = ["What was the first frozen vegetable besides spinach?"];
  var a3 = ["Carrots", "Peas", "Corn"];

  var q4 = ["What Indian dish is also the national dish of England?"];
  var a4 = ["Saag Paneer", "Baingan Bharta", "Chicken Tikka Masala"];

  var q5 = ["Who invented Coca-Cola?"];
  var a5 = ["Bernie Sanders", "John Pemberton", "Warren Buffet"];

  // end ==================================================

//     // question variables
// var questions = [{
//     question: "What ingredient in milk is eventually devoured by bacteria, causing the sour taste?",
//     answers: ["Lactose", "Legumes", "Butter"],
//     correctAnswer: "Lactose",
//     image: ("../TriviaGame/assets/images/milk.gif"),
//     surprise: ("../TriviaGame/assets/images/surprise.gif")
// }, {
//     question: "What is the 'groundnut' better known as?",
//     answers: ["Acorn", "Cashew", "Peanut"],
//     correctAnswer: "Peanut",
//     image: ("../TriviaGame/assets/images/peanut.gif"),
//     surprise: ("../TriviaGame/assets/images/surprise.gif")
// }, {
//     question: "What was the first frozen vegetable besides spinach?",
//     answers: ["Carrots", "Peas", "Corn"],
//     correctAnswer: "Peas",
//     image: ("../TriviaGame/assets/images/peas.gif"),
//     surprise: ("../TriviaGame/assets/images/surprise.gif")
// }, {
//     question: "What Indian dish is also the national dish of England?",
//     answers: ["Saag Paneer", "Baingan Bharta", "Chicken Tikka Masala"],
//     correctAnswer: "Chicken Tikka Masala",
//     image: ("../TriviaGame/assets/images/tikka.gif"),
//     surprise: ("../TriviaGame/assets/images/surprise.gif")
// }, {
//     question: "Who invented Coca-Cola?",
//     answers: ["Bernie Sanders", "John Pemberton", "Warren Buffet"],
//     correctAnswer: "John Pemberton",
//     image: ("../TriviaGame/assets/images/cola.gif"),
//     surprise: ("../TriviaGame/assets/images/surprise.gif")
// }];

// timer variables
// var count = 0;
var timer = 2;
var intervalId;

// score variables
var correctA = 0;
var wrongA = 0;
var unAnswered = 0;

// index tracker
var qTracker = 0;
var aTracker = 0;

// ============================================================

startBtn();
// generate a start button
function startBtn() {
var startButton = $("<button>");
startButton.addClass("start");
startButton.text("START");
$("#strt-btn-apnd").append(startButton);
};

// start button on click event
$(".start").on("click", function () {
  $(".start").remove();
  firstQuestion();
  // startTimer();
});

function firstQuestion() {
  $(".main-div").empty();

  // question
  $(".main-div").text(q1);

  // answers array
  for (var i = 0; i < a1.length; i++) {
      var answerBtns = $("<button>");
      answerBtns.addClass("start");
      answerBtns.text(a1[i]);
      $(".main-div").append(answerBtns);    
  }

  // setTimeout(nextQuestion, 1000 * 2);
}; 

function nextQuestion() {
  $(".main-div").empty();
  qTracker++;

  $(".main-div").text(q2);

  setTimeout(nextQuestion, 1000 * 2);
};

}) // end