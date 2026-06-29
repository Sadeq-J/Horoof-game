const playBtn = document.querySelector('.ply-btn')

const team1Input = document.querySelector('#first-team')

const team2Input = document.querySelector('#second-team')



let team1
let team2

let turn = team1


function playGame(){
    team1 = team1Input.value
    team2 = team2Input.value

    console.log(team1)
    console.log(team2)

    document.body.classList.add('new-background')
    startScreen.classList.add("hidden")
    boardElement.classList.remove('hidden')
}


playBtn.addEventListener('click', playGame)
