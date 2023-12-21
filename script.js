const questions = [{
    question:"Which animal is known as the \'Ship of the Desert\' ?",
    answer:[
        {text: "Camel", correct: true },
        {text: "Lion", correct: false},
        {text: "Tiger", correct: false },
        {text: "Tiger", correct: false},
    ]
},
{
    question:"How many days are there in a week?",
    answer:[
        {text: "11 days", correct: false },
        {text: "21days", correct: false },
        {text: "7 days", correct: true },
        {text: "41days", correct: false },
    ]
},{
    question:"How many hours are there in a day?",
    answer:[
        {text: "12 hours", correct: false },
        {text: "26 hours", correct: false },
        {text: "24 hours", correct: true },
        {text: "60 hours", correct: false },
    ]
    
},{
    question:"How many letters are there in the English alphabet?",
    answer:[
        {text: "32 letters", correct: false },
        {text: "25 letters", correct: false },
        {text: "27 letters", correct: false },
        {text: "26 letters", correct: true },
    ]
    
},{
    question:"Rainbow consist of how many colours?",
    answer:[
        {text: "5 colours", correct: false },
        {text: "7 colours", correct: true },
        {text: "10 colours", correct: false },
        {text: "8 colours", correct: false },
    ]
},{
    question:"Which is the principal source of energy for earth?",
    answer:[
        {text: "Sun", correct: true },
        {text: "moon", correct: false },
        {text: "water", correct: false },
        {text: "air", correct: false },
    ]
},{
    question:"Which is the largest country in the world?",
    answer:[
        {text: "Amarica (By area)", correct: false },
        {text: "India (By area)", correct: false },
        {text: "Australia (By area)", correct: false },
        {text: "Russia (By area)", correct: true },
    ]
},{
    question:"How many people are there in the world?",
    answer:[
        {text: "Over 10 billion", correct: false },
        {text: "Over 7 billion", correct: true },
        {text: "Over 20 billion", correct: false },
        {text: "Over 2 billion", correct: false },
    ]
}];

const questionElement=document.getElementById("Question");
const answerButtons=document.getElementById("answer_button");
const nextElement=document.getElementById("next_btn");

let currentQuestionIndex=0;
let Score = 0;
function startQuiz()
{
    currentQuestionIndex =0;
    Score=0;
    nextElement.innerHTML="Next";
    showQuestion();
}

function showQuestion()
{
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+ currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.append(button);
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });

}

function resetState()
{
    nextElement.style.display ='none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn = e.target;
    const isCorrect= selectedBtn.dataset.correct=== 'true';
    if(isCorrect)
    {
        selectedBtn.classList.add('correct');
        Score++;
    }
    else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true")
        {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextElement.style.display="block";

}

nextElement.addEventListener("click",()=>{
    if(currentQuestionIndex< questions.length)
    {
        handleNextElement();
    }else{
        startQuiz();
    }
});
function showScore()
{
    resetState();
    questionElement.innerHTML = `Your Scored ${Score} out of ${questions.length} 🎉`;
    nextElement.innerHTML="Play Again";
    nextElement.style.display = "block";
}

function handleNextElement()
{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }
    else
    {
        showScore();
    }
}



startQuiz();