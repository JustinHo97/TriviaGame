$(document).ready(function () {

    //Question Bank add as many questions as you want
    var QuizQuestions = {
        Trivia: [{
            question: "Question 1: What country's current capital city is an anagram of its former capital city?",
            answer: "Japan",
            decoys: ["New Zeland", "Italy", "The United States of America"]
        }, {
            question: 'Question 2: In the movie "The Wizard of Oz", what did the Scarecrow want from the wizard?',
            answer: "A brain",
            decoys: ["More straw", "A pet crow", "Cool sunglasses"]
        }, {
            question: "Question 3: What do the letters HTML, a markup language used to create web pages, stand for?",
            answer: "HyperText Markup Language",
            decoys: ["How To Make Love", "	High Temperature Materials Laboratory", "Hot Metal"]
        }, {
            question: "Question ?: Which Question is this?",
            answer: "4",
            decoys: ["3", "5", "6"]
        }, {
            question: "Question 5: How many moons does the planet Venus have?",
            answer: "Zero",
            decoys: ["One", "Two", "Five"]
        }
        ]
    }
    $("#Question").html("Welcome to my Trivia Game! There are a total of " + QuizQuestions.Trivia.length + " questions, can you solve them all?" + "<br>" + "<button id ='nextquestion'>Click to start Quiz!</button>");
    var number;
    var countdown;
    var correct = 0;
    var wrong = 0;
    var timeout = 0;

    var QuestionNumber = 0;

    function makeTrivia(mixedAnswers) {
        $("#Question").text(QuizQuestions.Trivia[QuestionNumber].question);
        $("#Answer1").html('<button class ="answer" data-name="' + mixedAnswers[0] + '">' + mixedAnswers[0] + '</button>');
        $("#Answer2").html('<button class ="answer" data-name="' + mixedAnswers[1] + '">' + mixedAnswers[1] + '</button>');
        $("#Answer3").html('<button class ="answer" data-name="' + mixedAnswers[2] + '">' + mixedAnswers[2] + '</button>');
        $("#Answer4").html('<button class ="answer" data-name="' + mixedAnswers[3] + '">' + mixedAnswers[3] + '</button>');
        timer();
    }

    function correctScreen() {
        $("#Question").html("Hurray! You're Correct!" + "<br>" + "<button id ='nextquestion'>Click to continue!</button>");
        $(".ans").empty();
        QuestionNumber++;
    }
    function wrongScreen() {
        $("#Question").html("Oh No! You're Wrong!" + "<br>" + "The correct answer was:<br>" + QuizQuestions.Trivia[QuestionNumber].answer + "<br>" + "<button id ='nextquestion'>Click to continue!</button>");
        $(".ans").empty();
        QuestionNumber++;
    }
    function endScreen() {
        var winnings = $("<div>You got " + correct + " questions right!</div>");
        var incorrect = $("<div>You got " + wrong + " questions wrong!</div>");
        var timedout = $("<div>You didn't answer " + timeout + " questions!</div>");
        $("#Question").html("You've finished the quiz!");
        $("#Question").append(winnings, incorrect, timedout);
        $(".ans").empty();
    }

    function timer() {
        number = 15;
        countdown = setInterval(decrement, 1000);
    }
    function stop() {
        clearInterval(countdown);
    }

    function decrement() {

        number--;

        $("#Timer").html("<h2>" + number + "</h2>");

        if (number === 0) {

            stop();
            timeout++;
            wrongScreen();
        }
    }

    //function randomize answer and decoy positions
    function mixup() {
        var mixedAnswers = [QuizQuestions.Trivia[QuestionNumber].answer, QuizQuestions.Trivia[QuestionNumber].decoys[0], QuizQuestions.Trivia[QuestionNumber].decoys[1], QuizQuestions.Trivia[QuestionNumber].decoys[2]]
        for (var i = 0; i < mixedAnswers.length - 1; i++) {
            var j = Math.floor(Math.random() * (mixedAnswers.length - i));
            var temp = mixedAnswers[j];
            mixedAnswers[j] = mixedAnswers[i];
            mixedAnswers[i] = temp;
        }
        makeTrivia(mixedAnswers);

    }
    $(document).on("click", "#nextquestion", function () {
        if (QuestionNumber === QuizQuestions.Trivia.length) {
            endScreen();
        }
        else {
            mixup();
        }
    });
    $(document).on("click", ".answer", function () {
        console.log($(this).data().name);
        console.log(QuizQuestions.Trivia[QuestionNumber].answer)
        if ($(this).data().name == QuizQuestions.Trivia[QuestionNumber].answer) {
            stop();
            correct++;
            correctScreen();
        }
        else {
            stop();
            wrong++;
            wrongScreen();
        }
    })
});