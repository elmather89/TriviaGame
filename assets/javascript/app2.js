$(document).ready(function () {

  // global variables ===============================
  var q1 = ["What ingredient in milk is eventually devoured by bacteria, causing the sour taste?", "Lactose", "Legumes", "Butter"];
  var q2 = ["What is the 'groundnut' better known as?", "Acorn", "Cashew", "Peanut"];
  var q3 = ["What was the first frozen vegetable besides spinach?", "Carrots", "Peas", "Corn"];
  var q4 = ["What Indian dish is also the national dish of England?", "Saag Paneer", "Baingan Bharta", "Chicken Tikka Masala"]
  var q5 = ["Who invented Coca-Cola?", "Bernie Sanders", "John Pemberton", "Warren Buffet"];
  var allQuestions = [q1, q2, q3, q4, q5];

  var timer = 20;
  var questionTracker = 0;
  var correctA = 0;
  var wrongA = 0;
  var unAnswered = 0;

  startBtn();
  // generate a start button
  function startBtn() {
    var startButton = $("<button>");
    startButton.addClass("start");
    startButton.text("START");
    $("#strt-btn-apnd").append(startButton);
  };

  // on start button click,
    // remove start button,
    // load first question,
    // start the timer countdown
  $(".start").on("click", function () {
    $(".start").remove();
    loadQuestion();
    startTimer(); // define this function +++++++++
  });

  function loadQuestion() {
      $(".main-div").empty();

      // question
      var qDiv = $("<div>");
      qDiv.text(allQuestions[0][0]);
      $(".main-div").append(qDiv);

      // answer buttons
      for (var i = 1; i < q1.length; i++) {
          var aDiv = $("<button>");
          aDiv.text(q1[i]);
          aDiv.addClass("q-btns");          
          $(".main-div").append(aDiv);
    
          console.log(allQuestions[0][0]);
      };
  };

  // once timer hits 0,
    // function to check for correctA, wrongA, or unAnswered and tally
    // go to next question
  function startTimer() {
    // ..
  };

}) // everything inside this