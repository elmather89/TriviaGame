$(document).ready(function () {

  // global variables ===============================
  var q1 = ["What ingredient in milk is eventually devoured by bacteria, causing the sour taste?", "Lactose", "Legumes", "Butter"];
  var q2 = ["What is the 'groundnut' better known as?", "Acorn", "Cashew", "Peanut"];
  var q3 = ["What was the first frozen vegetable besides spinach?", "Carrots", "Peas", "Corn"];
  var q4 = ["What Indian dish is also the national dish of England?", "Saag Paneer", "Baingan Bharta", "Chicken Tikka Masala"]
  var q5 = ["Who invented Coca-Cola?", "Bernie Sanders", "John Pemberton", "Warren Buffet"];
  var allQuestions = [q1, q2, q3, q4, q5];

  var count = 0;
  var timer = 2;
  var intervalId;

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
    startTimer();
  });

  function loadQuestion() {
    $(".main-div").empty();

    // question
    var qDiv = $("<div>");
    qDiv.text(allQuestions[questionTracker]);
    $(".main-div").append(qDiv);

    // answer buttons
    for (var i = 1; i < q1.length; i++) {
      var aDiv = $("<button>");
      aDiv.text(q1[i]);
      aDiv.addClass("q-btns");
      $(".main-div").append(aDiv);

      // console.log(allQuestions[0][0]);
    };
  };

  // once timer hits 0,
  // function to check for correctA, wrongA, or unAnswered and tally
  // go to next question
  function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  };

  function decrement() {
    timer--;
    $(".count-dwn").text(timer);

    // console.log(decrement);

    if (timer === 0) {
      // secondQuestion();
      resetTimer();
    }
  };

  function resetTimer() {
    clearInterval(intervalId);
    timer = 2;
  };

  // load the 2nd question
  function secondQuestion() {
    startTimer();
    count++;
    $(".main-div").empty();

    // question
    var qDiv = $("<div>");
    qDiv.text(allQuestions[1]);
    $(".main-div").append(qDiv);

    for (var j = 1; j < q2.length; j++) {
      // answer buttons
      var aDiv = $("<button>");
      aDiv.text(q2[j]);
      aDiv.addClass("q-btns");
      $(".main-div").append(aDiv);
    };
    thirdQuestion();
  };

  // function thirdQuestion() {
  //   startTimer();
  //   count++;
  //   $(".main-div").empty();

  //   var qDiv = $("<div>");
  //   qDiv.text(allQuestions[2]);
  //   $(".main-div").append(qDiv);

  //   for (var k = 1; k < q3.length; k++) {
  //     var aDiv = $("<button>");
  //     aDiv.text(q3[k]);
  //     aDiv.addClass("q-btns");
  //     $(".main-div").append(aDiv);
  //   };
  //   fourthQuestion();
  // };

  // function fourthQuestion() {
  //   startTimer();
  //   count++;
  //   $(".main-div").empty();

  //   var qDiv = $("<div>");
  //   qDiv.text(allQuestions[3]);
  //   $(".main-div").append(qDiv);

  //   for (var l = 1; l < q4.length; l++) {
  //     var aDiv = $("<button>");
  //     aDiv.text(q4[l]);
  //     aDiv.addClass("q-btns");
  //     $(".main-div").append(aDiv);
  //   };
  //   console.log(fourthQuestion);
  // };


  // on answer button click, check if right or wrong

}) // everything inside this