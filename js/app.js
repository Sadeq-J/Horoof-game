const playBtn = document.querySelector('.ply-btn')

const team1Input = document.querySelector('#first-team')

const team2Input = document.querySelector('#second-team')

const boardElement = document.querySelector('.board')

const startScreen = document.querySelector(".start-screen")

const sqrElement = document.querySelectorAll('.sqr')

const questionMenu = document.querySelector('.qus')

const qun = document.querySelector('#qun')

const changeQuestionBtnElement = document.querySelector('#change-answer-btn')
const answerBtnElement = document.querySelector('#answer-btn')

const answerElement = document.querySelector('.ques-answer')

const noAnswerBtnElement = document.querySelector('#no-answer-btn')
const team1BtnElement = document.querySelector('#team-1')
const team2BtnElement = document.querySelector('#team-2')

const winnerScreen = document.querySelector(".winner-screen");
const winnerText = document.querySelector("#winner-text");
const restartBtn = document.querySelector("#restart-btn");

const questions = {
    "أ": [
        {
            question: "عاصمة قديمة للشام ايام البيزنطيين ؟",
            answer: "انطاكية"
        },
        {
            question: "ما معنى اسم الارقم ؟",
            answer: "القلم"
        },
        {
            question: "",
            answer: ""
        }
    ],

    "د": [
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        }
    ],

    "ن": [
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        }
    ],

    "س": [
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        }
    ],

    "ص": [
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        }
    ],

    "ع": [
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        }
    ],

    "ب": [
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        }
    ],

    "ر": [
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        }
    ],

    "خ": [
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        }
    ]
};

let team1
let team2

let turn

let selectedSquare

let pickedQuestion

let winner



const board = [
    {owner: null},
    {owner: null},
    {owner: null},

    {owner: null},
    {owner: null},
    {owner: null},

    {owner: null},
    {owner: null},
    {owner: null}
]

const team1WinningCombos = [
    [0, 3, 6],
    [0, 3, 4, 7],
    [0, 3, 4, 5, 8],
    [1, 4, 7],
    [1, 4, 3, 6],
    [1, 4, 5, 8],
    [2, 5, 8],
    [2, 5, 4, 7],
    [2, 5, 4, 3, 6]
]

const team2WinningCombos = [
    [2, 1, 0],
    [2, 1, 4, 3],
    [2, 1, 4, 7, 6],
    [5, 4, 3],
    [5, 4, 1, 0],
    [5, 4, 7, 6],
    [8, 7, 6],
    [8, 7, 4, 3],
    [8, 7, 4, 1, 0]
]

function playGame() {
    team1 = team1Input.value
    team2 = team2Input.value
    
    if(!team1 && !team2) return

    turn = team1

    document.body.classList.add("team1-turn")

    console.log(team1)
    console.log(team2)

    document.body.classList.add('new-background')
    startScreen.classList.add("hidden")
    boardElement.classList.remove('hidden')
}


function handleClick(event) {
    selectedSquare = event.target
    const index = Number(selectedSquare.id)

    if(board[index].owner) return

    questionMenu.classList.remove("hidden")
    document.querySelector('.letter').innerHTML = event.target.textContent
    
    getQuestion(event)
}

function getQuestion(event) {
    const letter = selectedSquare.textContent
    let randomQuestion = Math.floor(Math.random() * questions[letter].length)
    for (let letter in questions) {
        if (event.target.textContent === letter) {
            qun.textContent = questions[letter][randomQuestion].question
            pickedQuestion = questions[letter][randomQuestion].question
        }
    }
}

function getAnswer(event) {
    questionMenu.classList.add("hidden")
    document.querySelector('.answer-menu').classList.remove('hidden')
    q.textContent = pickedQuestion
    console.log(`picked question ${pickedQuestion}`)

    for (let letter in questions) {
        for (let q of questions[letter]) {
            if (q.question === pickedQuestion) {
                answerElement.textContent = q.answer
            }
        }
    }

    team1BtnElement.textContent = team1
    team2BtnElement.textContent = team2
}

function chooseTeam(team){
    const index = Number(selectedSquare.id)

    board[index].owner = team

    if(team === team1){
        selectedSquare.style.backgroundColor = "#9CBAA5"
        selectedSquare.textContent = ""
    }
    else if (team === team2){
        selectedSquare.style.backgroundColor = "#F2A35F"
        selectedSquare.textContent = ""
    }

    document.querySelector('.answer-menu').classList.add('hidden')

    console.log(board)

    if (checkWinner(team)) {
        winnerText.textContent = `الفريق الفائز ${team}`
        winnerScreen.classList.remove('hidden')
        boardElement.classList.add("hidden");
    }

    switchTurn()

}

function switchTurn() {
    if (turn === team1) {
        turn = team2

        document.body.classList.remove("team1-turn")
        document.body.classList.add("team2-turn")
    } else {
        turn = team1

        document.body.classList.remove("team2-turn")
        document.body.classList.add("team1-turn")
    }

    console.log("Turn:", turn)
}
function noAnswer(){
    document.querySelector('.answer-menu').classList.add('hidden')
    switchTurn()
}


function changeQuestion(){
    const letter = selectedSquare.textContent
    let randomQuestion = Math.floor(Math.random() * questions[letter].length)
    for (let letter in questions) {
        if (selectedSquare.textContent === letter) {
            qun.textContent = questions[letter][randomQuestion].question
            pickedQuestion = questions[letter][randomQuestion].question
        }
    }
}

function checkWinner(team) {

    let winningCombos

    if (team === team1) {
        winningCombos = team1WinningCombos
    } else {
        winningCombos = team2WinningCombos
    }

    return winningCombos.some(combo => combo.every(index => board[index].owner === team))

}


playBtn.addEventListener('click', playGame)

sqrElement.forEach(oneSquare => {
    oneSquare.addEventListener('click', handleClick)
})

changeQuestionBtnElement.addEventListener('click', changeQuestion)
answerBtnElement.addEventListener('click', getAnswer)

team1BtnElement.addEventListener("click", () => chooseTeam(team1));
team2BtnElement.addEventListener("click", () => chooseTeam(team2));
noAnswerBtnElement.addEventListener('click', noAnswer)


restartBtn.addEventListener("click", () => {
    location.reload();
});