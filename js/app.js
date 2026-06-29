const playBtn = document.querySelector('.ply-btn')

const team1Input = document.querySelector('#first-team')

const team2Input = document.querySelector('#second-team')

const boardElement = document.querySelector('.board')

const startScreen = document.querySelector(".start-screen")

const sqrElement = document.querySelectorAll('.sqr')

const questionMenu = document.querySelector('.qus')

const qun = document.querySelector('#qun')



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

let turn = team1

let randomQuestion = Math.floor(Math.random() * 3)
const board = [
    'أ', 'د', 'ن',
    'س', 'ص', 'ع',
    'ب', 'ر', 'خ']

const team1WinningCombos = [
    [0, 3, 6],
    [0, 3, 4, 7],
    [0, 3, 4, 5, 8],
    [1, 4, 7],
    [1, 4, 3, 6],
    [1, 4, 5, 8],
    [2, 5, 8],
    [2, 5, 4, 7],
    [2, 5, 5, 3, 6]
]

const team2WinningCombos = [
    [2, 1, 0],
    [2, 1, 4, 3],
    [2, 1, 4, 7, 6],
    [5, 4, 3],
    [5, 4, 1, 0],
    [5, 4, 7, 8],
    [8, 7, 6],
    [8, 7, 4, 3],
    [8, 7, 4, 1, 0]
]

function playGame(){
    team1 = team1Input.value
    team2 = team2Input.value

    console.log(team1)
    console.log(team2)

    document.body.classList.add('new-background')
    startScreen.classList.add("hidden")
    boardElement.classList.remove('hidden')
}

function updateBoard(){
    board.forEach((Cell, index) =>{
        sqrElement[index].textContent = Cell;
    }) 
}

function handleClick(event){
    questionMenu.classList.remove("hidden")
    document.querySelector('.letter').innerHTML = event.target.textContent

    getQuestion(event)
}

function getQuestion(event){
    for(letter in questions){
        if(event.target.textContent === letter ){
            qun.textContent = questions[letter][randomQuestion].question
        }
    }
}

playBtn.addEventListener('click', playGame)

sqrElement.forEach(oneSquare=>{
    oneSquare.addEventListener('click', handleClick)
})
