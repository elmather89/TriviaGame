$(document).ready(function () {

    // question variables
    var questions = [{
        question: "What ingredient in milk is eventually devoured by bacteria, causing the sour taste?",
        answers: ["Lactose", "Legumes", "Butter"],
        correctAnswer: "Lactose",
        image: ("../TriviaGame/assets/images/milk.gif"),
        surprise: ("../TriviaGame/assets/images/surprise.gif")
    }, {
        question: "What is the 'groundnut' better known as?",
        answers: ["Acorn", "Cashew", "Peanut"],
        correctAnswer: "Peanut",
        image: ("../TriviaGame/assets/images/peanut.gif"),
        surprise: ("../TriviaGame/assets/images/surprise.gif")
    }, {
        question: "What was the first frozen vegetable besides spinach?",
        answers: ["Carrots", "Peas", "Corn"],
        correctAnswer: "Peas",
        image: ("../TriviaGame/assets/images/peas.gif"),
        surprise: ("../TriviaGame/assets/images/surprise.gif")
    }, {
        question: "What Indian dish is also the national dish of England?",
        answers: ["Saag Paneer", "Baingan Bharta", "Chicken Tikka Masala"],
        correctAnswer: "Chicken Tikka Masala",
        image: ("../TriviaGame/assets/images/tikka.gif"),
        surprise: ("../TriviaGame/assets/images/surprise.gif")
    }, {
        question: "Who invented Coca-Cola?",
        answers: ["Bernie Sanders", "John Pemberton", "Warren Buffet"],
        correctAnswer: "John Pemberton",
        image: ("../TriviaGame/assets/images/cola.gif"),
        surprise: ("../TriviaGame/assets/images/surprise.gif")
    }];

    // timer variables
    var count = 0;
    var timer = 2;
    var intervalId;

    // score variables
    var correctA = 0;
    var wrongA = 0;
    var unAnswered = 0;

    // index tracker
    var qTracker = 0;
    var aTracker = 0;
    var corrTracker = 0;

    // user variables
    var userInput = [];

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

    // on click event for buttons, tally scores
    $(".q-btns").on("click", function () {
        var userAnswer = $(".q-btns").val().trim();
        userInput.push(userAnswer);
        $(".q-btns").val("");

        // if ($(".q-btns").children().length === 0) {
        //     console.log(userAnswer);
        // }
    });


    function firstQuestion() {
        $(".main-div").empty();

        // question
        $(".main-div").text(questions[qTracker].question);

        // answers
        for (var i = 0; i < questions[qTracker].answers.length; i++) {
            var answerBtns = $("<button>");
            answerBtns.addClass("q-btns");
            answerBtns.text(questions[qTracker].answers[i]);
            answerBtns.attr("data-corrAnswer", questions[qTracker].answers[i]);

            $(".main-div").append(answerBtns);
        }

        // timer
        setTimeout(nextQuestion, 1000 * 200);
        if (timer === questions.length) {
            qTracker = 0;
        }
    };

    function nextQuestion() {
        $(".main-div").empty();
        qTracker++;
        aTracker++;

        // question
        $(".main-div").text(questions[qTracker].question);

        // answers 
        for (var i = 0; i < questions[aTracker].answers.length; i++) {
            var answerBtns = $("<button>");
            answerBtns.addClass("q-btns");
            answerBtns.text(questions[aTracker].answers[i]);
            answerBtns.attr("data-corrAnswer", questions[qTracker].answers[i]);

            $(".main-div").append(answerBtns);
        }

        // timer
        setTimeout(nextQuestion, 1000 * 2);
        if (timer === questions.length) {
            qTracker = 0;
        }
    };

}) // end