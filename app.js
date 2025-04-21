let bgOne = document.getElementById('bg1')
let bgTwo = document.getElementById('bg2')
let bgThree = document.getElementById('bg3')
let bgFour = document.getElementById('bg4')
let result = document.querySelector('.result')
let choiceOne = document.querySelectorAll('.choice1')
let choiceTwo = document.querySelectorAll('.choice2')
let choiceThree = document.querySelectorAll('.choice3')
let btnOne = document.querySelector('.button1')
let btnTwo= document.querySelector('.button2')
let btnThree= document.querySelector('.button3')
let i = 0;
const questions = [
    { choices: choiceOne, correctValue: '2' },  // 10x5 = 50
    { choices: choiceTwo, correctValue: '3' },  // 8x8 = 64
    { choices: choiceThree, correctValue: '2' } // 12x12 = 144
];

function testQuiz(){
    questions.forEach(group=>{
        let answered = false
        group.choices.forEach(e=>{
            e.addEventListener('change',function(){
                let answer = group.correctValue
                    if(!answered && e.value === answer){
                        i++
                        result.innerText=`${i} คะแนน`
                        answered = true
                    }
            })
        })
    })
}

function sendAnswer(){
    btnOne.addEventListener('click',function(){
        bgOne.style.display = 'none'
        bgTwo.style.display = 'flex'
    })
    btnTwo.addEventListener('click',function(){
        bgTwo.style.display = 'none'
        bgThree.style.display = 'flex'
    })
    btnThree.addEventListener('click',function(){
        bgThree.style.display = 'none'
        bgFour.style.display = 'flex'
    })
}
testQuiz();
sendAnswer();