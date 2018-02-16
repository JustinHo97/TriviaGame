$(document).ready(function () {

    //Question Bank
    var QuizQuestions = {
        Trivia: [{
            question: "Question1 Goes Here",
            answer: "Answer1 Goes Here",
            decoys: ["Decoy1 Goes Here", "Decoy1 Goes Here", "Decoy1 Goes Here"]
        },{
            question: "Question2 Goes Here",
            answer: "Answer 2 Goes Here",
            decoys: ["Decoy2 Goes Here", "Decoy2 Goes Here", "Decoy2 Goes Here"]
        },{
            question: "Question3 Goes Here",
            answer: "Answer 3 Goes Here",
            decoys: ["Decoy3 Goes Here", "Decoy2 Goes Here", "Decoy2 Goes Here"]
        },{
            question: "Question4 Goes Here",
            answer: "Answer 4 Goes Here",
            decoys: ["Decoy4 Goes Here", "Decoy2 Goes Here", "Decoy2 Goes Here"]
        },{
            question: "Question5 Goes Here",
            answer: "Answer 5 Goes Here",
            decoys: ["Decoy5 Goes Here", "Decoy2 Goes Here", "Decoy5 Goes Here"]
        }
        ]
    }

    var QuestionNumber = 0;

    function makeTrivia() {
        console.log(QuizQuestions);
        $("#QuestionNumber").text("#"+(QuestionNumber + 1));
        $("#Question").text(QuizQuestions.Trivia[QuestionNumber].question);
        $("#Answer1").text(QuizQuestions.Trivia[QuestionNumber].answer);
        $("#Answer2").text(QuizQuestions.Trivia[QuestionNumber].decoys[0]);
        $("#Answer3").text(QuizQuestions.Trivia[QuestionNumber].decoys[1]);
        $("#Answer4").text(QuizQuestions.Trivia[QuestionNumber].decoys[2]);
        console.log(QuizQuestions.Trivia[QuestionNumber].question);
        console.log(QuestionNumber);
    }

    $(document).on("click", function () {
        makeTrivia();
        QuestionNumber++;
    });
});