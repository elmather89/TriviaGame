$(document).ready(function () {

    $("#start").on("click", function() {
        $("#start").remove();
        $(".main-div").addClass("h2");

        game.loadQuestion();

    })

    $(document).on("click", ".answer-button", function(e) {
        game.clicked(e);
    })

    $(".resetButton").on("click", function() {
        game.loadQuestion();
    })
    // question variables ==============================================
    var questions = [{
        question: "What ingredient in milk is eventually devoured by bacteria, causing the sour taste?",
        answers: ["lectin", "lactose", "butter"],
        correctAnswer: "lactose",
        image: ("../TriviaGame/assets/images/milk.gif")
    }, {
        question: "What is the 'groundnut' better known as?",
        answers: ["acorn", "cashew", "peanut"],
        correctAnswer: "peanut",
        image: ("../TriviaGame/assets/images/peanut.gif")
    }, {
        question: "What was the first frozen vegetable besides spinach?",
        answers: ["carrots", "peas", "corn"],
        correctAnswer: "peas",
        image: ("../TriviaGame/assets/images/peas.gif")
    }, {
        question: "What Indian dish is also the national dish of England?",
        answers: ["Saag Paneer", "Baingan Bharta", "Chicken Tikka Masala"],
        correctAnswer: "Chicken Tikka Masala",
        image: ("../TriviaGame/assets/images/tikka.gif")
    }, {
        question: "Who invented Coca-Cola?",
        answers: ["Bernie Sanders", "John Pemberton", "Warren Buffet"],
        correctAnswer: "John Pemberton",
        image: ("../TriviaGame/assets/images/cola.gif")
    }];

    // game object with properties =================================================
    var game = {
        questions: questions,
        currentQuestion: 0,
        counter: 30,
        correct: 0,
        incorrect: 0,
        unanswered: 0,
        countdown: function () {
            game.counter--;
            $(".count-dwn").text(game.counter);
            if (game.counter <= 0) {
                game.timeUp();
            }
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
            game.counter = 30;
            $("#strt-btn-apnd").html(game.counter);
            game.currentQuestion++;
            $(".answer-rsp").empty();
            game.loadQuestion();
        },
        timeUp: function () {
            // timer stops
            clearInterval(timer);
            game.unanswered++;
            $(".strt-btn-apnd").html("<h2>You ran out of time!");
            $(".main-div").append(questions[game.currentQuestion].correctAnswer);

            if (game.currentQuestion == questions.length - 1) {
                setTimeout(game.results, 3 * 1000);
            }
            else {
                setTimeout(game.nextQuestion, 3 * 1000);
            }
        },
        results: function () {
            clearInterval(timer);
            $(".main-div").html("You've answered all the questions! ");
            $(".main-div").append("<h3>Correct: " + game.correct + "</h3>");
            $(".main-div").append("<h3>Incorrect: " + game.incorrect + "</h3>");
            $(".main-div").append("<h3>Unanswered: " + game.unanswered + "</h3>");

            reset();
        },
        clicked: function (e) { 
            clearInterval(timer);
            if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
                // $(".answer-rsp").html("<h2>Correct!</h2>");
                $(".answer-rsp").html("<img src=" + questions[game.currentQuestion].image + " width='400px'>");

                game.answeredCorrect();
            }
            else {
                game.answeredIncorrect();
            }
        },
        answeredCorrect: function () {
            clearInterval(timer);
            game.correct++;

            if (game.currentQuestion == questions.length - 1) {
                setTimeout(game.results, 3 * 1000);
            }
            else {
                setTimeout(game.nextQuestion, 3 * 1000);
            }
        },
        answeredIncorrect: function () {
            clearInterval(timer);
            game.incorrect++;
            $(".strt-btn-apnd").html("<h2>Try Again!</h2>");
            
            if (game.currentQuestion == questions.length - 1) {
                setTimeout(game.results, 3 * 1000);
            }
            else {
                setTimeout(game.nextQuestion, 3 * 1000);
            }
        },
        reset: function () {
            var resetButton = $("<button>");
            resetButton.text("Reset the Game");
            resetButton.addClass("start");
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
    //         intervalId = setInterval(count, 1000);
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