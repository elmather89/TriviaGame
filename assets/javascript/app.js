$(document).ready(function () {

    $(document).on("click", "#start", function () {
        $("#start").remove();
        $(".main-div").addClass("h2");

        game.loadQuestion();
    })

    // $("#start").on("click", function() {
    //     $("#start").remove();
    //     $(".main-div").addClass("h2");

    //     game.loadQuestion();
    // })

    $(document).on("click", ".answer-button", function (e) {
        game.clicked(e);
    })

    $(document).on("click", "#resetButton", function () {
        game.reset();
    })

    // question variables ==============================================
    var questions = [{
        question: "What ingredient in milk is eventually devoured by bacteria, causing the sour taste?",
        answers: ["Lactose", "Legumes", "Butter"],
        correctAnswer: "Lactose",
        image: ("../TriviaGame/assets/images/milk.gif"),
        surprise: ("../TriviaGame/assets/images/surprise.gif")
    },
    {
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

    // game object with properties =================================================
    var game = {
        questions: questions,
        currentQuestion: 0,
        counter: 25,
        correct: 0,
        incorrect: 0,
        unanswered: 0,
        surprise: ("../TriviaGame/assets/images/surprise.gif"),
        countdown: function () {
            game.counter--;
            $(".count-dwn").text(game.counter + " seconds");

            if (game.counter == 0) {
                game.timeUp();
            }
            console.log(game.counter);
        },
        loadQuestion: function () {
            timer = setInterval(game.countdown, 1000);
            $(".main-div").html("<h2 id='counter'></h2>");
            $(".main-div").append("<h2>" + questions[game.currentQuestion].question + "</h2>");

            for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
                $("#strt-btn-apnd").append('<button class="answer-button" id="button-' + i + '" data-name="' + questions[game.currentQuestion].answers[i] + '" > ' + questions[game.currentQuestion].answers[i] + '</button>');
                $(".answer-button").addClass("start");
            }
        },
        nextQuestion: function () {
            // want to reset the timer for each question
            game.counter = 25;
            $("#strt-btn-apnd").html(game.counter);
            game.currentQuestion++;
            $(".answer-rsp").empty();
            game.loadQuestion();
        },
        timeUp: function () {
            // timer stops
            clearInterval(timer);
            game.unanswered++;
            $("#strt-btn-apnd").html("<h2>You ran out of time!</h2>");
            $(".main-div").append(questions[game.currentQuestion].correctAnswer);

            if (game.currentQuestion == questions.length - 1) {
                setTimeout(game.results, 3000);
            }
            else {
                setTimeout(game.nextQuestion, 3000);
            }
        },
        results: function () {
            clearInterval(timer);
            $(".main-div").html("<h1>You've answered all the questions!</h1>");
            $(".main-div").append("<h3>Correct: " + game.correct + "</h3>");
            $(".main-div").append("<h3>Incorrect: " + game.incorrect + "</h3>");
            $(".main-div").append("<h3>Unanswered: " + game.unanswered + "</h3>");
            $(".main-div").append("<button id='resetButton'>Reset the game</button>");

            // $("#strt-btn-apnd").empty();
            $(".count-dwn").empty();

            if (game.correct > game.incorrect && game.correct > game.unanswered) {
                clearInterval(timer);
                console.log("Winner");
                $(".main-div").append("<h3>Nice Work!</h3>");
                $(".gif").append("<img src='../TriviaGame/assets/images/surprise.gif'></img>");
            }
            else {
                clearInterval(timer);
                console.log("Loser");
                $(".main-div").append("<h3>You gave it your best!</h3>");
                $(".gif").append("<img src='../TriviaGame/assets/images/niceTry.gif'></img>");
            }
        },
        clicked: function (e) {
            clearInterval(timer);
            if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
                // $(".answer-rsp").html("<h2>Correct!</h2>");

                // shows gif on correct answer click
                $(".main-div").append("<img src=" + questions[game.currentQuestion].image + " width='400px'>");

                game.answeredCorrect();
            }
            else {
                $(".main-div").append("Nope. The answer is " + questions[game.currentQuestion].correctAnswer + ".");
                game.answeredIncorrect();
            }
        },
        answeredCorrect: function () {
            clearInterval(timer);
            game.correct++;

            if (game.currentQuestion == questions.length - 1) {
                setTimeout(game.results, 3000);
            }
            else {
                setTimeout(game.nextQuestion, 3000);
            }
        },
        answeredIncorrect: function () {
            clearInterval(timer);
            game.incorrect++;
            // $(".remove").html("<h2>Try Again!</h2>");
            // setTimeout (function () {
            //     $(".remove").remove();
            // }, 1 * 500);

            if (game.currentQuestion == questions.length - 1) {
                setTimeout(game.results, 3000);
            }
            else {
                setTimeout(game.nextQuestion, 3000);
            }
        },
        reset: function () {
            clearInterval();
            game.currentQuestion = 0;
            game.counter = 30;
            game.correct = 0;
            game.incorrect = 0;
            game.unanswered = 0;

            $(".gif").empty();

            game.loadQuestion();
        }
    }

    // // Press start switches timer on ==================================
    // $(".start-btn").click(function () {
    //     startClock();
    // });

    // // timer variables =================================================
    // var intervalId;
    // var clockRunning = false;
    // var time = 02;
    // var lap = 1;
    // var countDown;


    // // reset function =================================================
    // function reset() {
    //     time = 0;
    //     lap = 1;
    //     // Change the ".start-btn" div to "00:00."
    //     $(".start-btn").text("00:00");
    // }

    // // start timer ==================================================
    // function startClock() {
    //     if (!clockRunning) {
    //         intervalId = setInterval(count, 500);
    //         clockRunning = true;
    //     }
    // }

    // // showTime funciton =============================================
    // function showTime() {
    //     var converted = timeConverter(time);
    //     $(".start-btn").append(lap + converted);
    //     lap++;
    // }

    // // count function
    // function count(timer) {
    //     time--;
    //     var converted = timeConverter(time);
    //     $(".start-btn").text(converted);
    // }

    // // time converter function ==============================================
    // function timeConverter(t) {
    //     var minutes = Math.floor(t / 60);
    //     var seconds = t - (minutes * 60);

    //     if (seconds < 10) {
    //         seconds = "0" + seconds;
    //     }

    //     if (minutes === 0) {
    //         minutes == "00";
    //     }

    //     else if (minutes < 10) {
    //         minutes = "0" + minutes;
    //     }

    //     return minutes + ":" + seconds;
    // }

  
    // // end of document below
});