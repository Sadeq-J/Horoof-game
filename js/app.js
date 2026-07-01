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
            question: "عاصمة تركيا",
            answer: "أنقرة"
        },
        {
            question: "ما هو الاسم الذي كان يطلق على أسبانيا قديماً ؟",
            answer: "الأندلس"
        },
        {
            question: "هو أحد معاني الوحي وأنواعه",
            answer: "الإلهام"
        },
        {
            question: "ما هو الحيوان المائي الذي له ثلاثة قلوب ؟",
            answer: "الأخطبوط"
        },
        {
            question: "هو أن يكون جُرمان سماويان على استقامة واحدة بالنّسبة للنّاظر .",
            answer: "الاقتران"
        },
        {
            question: "ما هو لون زهرة البابونج ؟",
            answer: "أصفر"
        }
    ],

    "د": [
        {
            question: "مفردة قرآنية في سورة الشمس تعني أخفى نفسه في المعاصي .",
            answer: "دَسَّاها"
        },
        {
            question: "هي نشر معلومات بطرق مختلفة بغرض جذب انتباه الناس تجاه سلعة معينة .",
            answer: "دعاية"
        },
        {
            question: "المدينة التي تسمى بجلق؟",
            answer: "دمشق"
        },
        {
            question: "يُقال ( وافقَ شنٌّ طبقة ) فما هي الصفة التي جمعت بين شنٍّ وطبقة ؟",
            answer: "الدهاء"
        }
    ],

    "ن": [
        {
            question: "من المعادن ذات الوسط الموصّل للكهرباء.",
            answer: "النحاس"
        },
        {
            question: "ماذا يعني أسم طارق؟",
            answer: "نجم في السماء"
        },
        {
            question: "في اللغة بمعنى بَرَكَ الجملُ وقَعَد.",
            answer: "ناخ"
        },
        {
            question: "وقائمةٌ أبداً لا تنامْ *** وما قعدت مُذ قامت *** تعيش إذا غسّلوا رجلها *** وإن حلقوا رأسها ماتت ؟",
            answer: "النخلة"
        }
    ],

    "س": [
        {
            question: "كراهية وغضب من شخص او أمر ما؟",
            answer: "سخط"
        },
        {
            question: "ما عاصمة البوسنة والهرسك ؟",
            answer: "سراييفو"
        },
        {
            question: "حيوان لبون لونه أزرق رمادي له ذنب طويل كثيف الشعر يتخذ من جلده فراء حسنة ثمينة ؟",
            answer: "سنجاب"
        },
        {
            question: "هي وجه بلا لسان و تتحدث عن الزمان ؟",
            answer: "الساعة"
        }
    ],

    "ص": [
        {
            question: "ما هو الموطن الأَصلي للأرز ؟",
            answer: "الصين"
        },
        {
            question: "أول من استخدم الحبر في الكتابة؟",
            answer: "الصينيون"
        },
        {
            question: "بماذا تُسمى الغدد التي تفرز هرموناتها بدون قنوات ؟",
            answer: "الصماء"
        },
        {
            question: "مفتاح وليس له علاقة بالباب ؛ ولكنه في مَثَلٍ من الأمثال .",
            answer: "الصبر"
        },
        {
            question: "هو الإمساك عن الطعام و الكلام القبيح.",
            answer: "الصوم"
        }
    ],

    "ع": [
        {
            question: "ماذا يسمى ذكر الضفدع",
            answer: "العلجوم"
        },
        {
            question: "اللقب الذي أطلق على القارة الأمريكية عندما اكتشفها كولومبوس ؟",
            answer: "العالم الجديد"
        },
        {
            question: " ماذا يسمى طعام المولود في اليوم السابع ؟",
            answer: "العقيقة"
        },
        {
            question: "أحد الاختراعات لتصحيح النظر ؟",
            answer: "العدسات"
        },
        {
            question: "لقب السيدة مريم عليها السلام ؟",
            answer: "العذراء"
        },
        {
            question: "من الحشرات التي ذكرت في القرآن ؟",
            answer: "العنكبوت"
        }
    ],

    "ب": [
        {
            question: "من هو النادي الذي خسر بثمانية أهداف من ليفربول بدوري أبطال أوروبا لموسم 2007/2008م ؟",
            answer: "بشكتاش التركي"
        },
        {
            question: "ما هي أول مَدينة بُنيت خارج شبه الجزيرة العربية ؟",
            answer: "البصرة"
        },
        {
            question: "الغدة التي تفرز الأنسولين في الجسم؟",
            answer: "البنكرياس"
        },
        {
            question: "في اللغة هو الإحياء بعد الموت.",
            answer: "البعث"
        },
        {
            question: "أين تقع جزيرة ماكاو؟",
            answer: "البرتغال"
        }
    ],

    "ر": [
        {
            question: "من الفواكه المذكورة في القرآن الكريم .",
            answer: "الرمان"
        },
        {
            question: "مصانع البروتينات في الخلية الحية هي عضيات دقيقة جداً ، بماذا تُسمى ؟",
            answer: "الرايبوسومات"
        },
        {
            question: "هي النظام السياسي الاقتصادي القائم على الملكية الخاصة والربح الخاص.",
            answer: "الـرأسمالية"
        },
        {
            question: "هو العبودية ، وهو نظام ساد المجتمعات في أقدم العصور .",
            answer: "الرِّق"
        },
        {
            question: "المكون الرئيسي للزجاج؟",
            answer: "الرمل"
        }
    ],

    "خ": [
        {
            question: "ماذا تعني اليد المضمومة في كرة السلة ؟",
            answer: "خطأ شخصي"
        },
        {
            question: "كم يبلغ عدد عيون النحلة ؟",
            answer: "خمس أعين"
        },
        {
            question: "هي وسيلة لتمثيل سطح الأرض أو جزء منه على لوحة مستوية.",
            answer: "الخريطة"
        },
        {
            question: "هي صفة للشيطان سمي به لأنه يتأخر أو يخنس كلما ذُكر الله عز وجل .",
            answer: "الخنّاس"
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