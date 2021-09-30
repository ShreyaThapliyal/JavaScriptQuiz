const restartBtn = document.getElementById("res");
const prevBtn = document.getElementById("prev");
const submitBtn = document.getElementById("sub"); 
const aBtn = document.getElementById("A");
const bBtn = document.getElementById("B");
const cBtn = document.getElementById("C");
const dBtn = document.getElementById("D");
const nextBtn = document.getElementById( "next"); 
const questionText = document.getElementById("qtext"); 
const userScore = document.getElementById("scr");

let currentQuestion=0;
let score=0;
let questions=[
    {question:"What's Gina's last name?", answers:[
        {option:"Laretti",answer:false},
        {option:"Peretti",answer:false},
        {option:"Linetti",answer:true},
        {option:"Pinetti",answer:false},
        ]
    },

    {question:"What's the Pontiac Banoit's real name?", answers:[
        {option:"Doug Joud",answer:false},
        {option:"Doug Judy",answer:true},
        {option:"Jeremy Figgis",answer:false},
        {option:"Jimmy Figgis",answer:false},
        ]
    },

    {question:"What's Charles' son's name?", answers:[
        {option:"Nikolas",answer:false},
        {option:"Christropher",answer:false},
        {option:"Niklaj",answer:true},
        {option:"Mac",answer:false},
        ]
    },

    {question:"Who has NOT won a Halloween Heist?", answers:[
        {option:"Rosa",answer:false},
        {option:"Terry",answer:false},
        {option:"Amy",answer:false},
        {option:"Charles",answer:true},
        ]
    },

    {question:"What were Jake and Holt's names while living in Florida?", answers:[
        {option:"Larry and Greg",answer:"true"},
        {option:"Larry and Graig",answer:"false"},
        {option:"Craig and Grey",answer:"false"},
        {option:"Barry and Greg",answer:"false"},
        ]
    }
]

restartBtn.addEventListener("click", restart); 
prevBtn.addEventListener("click",previous); 
nextBtn.addEventListener("click", next); 
submitBtn.addEventListener("click", submit);

function submit(){
    prevBtn.classList.add( 'hide'); 
    nextBtn.classList.add( 'hide');
    submitBtn.classList.add( 'hide');
    aBtn.classList.add( 'hide');
    bBtn.classList.add( "hide");
    cBtn.classList.add( "hide");
    dBtn.classList.add( "hide");    
    questionText.innerHTML = "Yayyy!! You finally submitted the quiz!";
}

function beginQuiz(){
    currentQuestion=0;
    questionText.innerText = questions[currentQuestion].question; 
    aBtn.innerText = questions[currentQuestion].answers[0].option; 
    bBtn.innerText = questions[currentQuestion].answers[1].option;
    cBtn.innerText = questions[currentQuestion].answers[2].option;
    dBtn.innerText = questions[currentQuestion].answers[3].option;

    aBtn.onclick=()=>{
    let ano=0; 
    if(questions[currentQuestion].answers[ano].answer){ 
        if(score<5){
            score=score+1; 
        }

    }

    userScore.innerText = score;
    if(currentQuestion<4){
        next();
    }
    }
    
    bBtn.onclick= ()=>{
    let ano=1; 
    if(questions [currentQuestion].answers[ano].answer){ 
        if(score<5){
            score=score+1;
        }
    }
    userScore.innerText = score; 
    if(currentQuestion<4){
    next();
    }
}

    cBtn.onclick=()=>{
    
    let ano=2; 
    if(questions [currentQuestion].answers [ano].answer){ 
        if(score<5){
            score=score+1;
        }
    }
    userScore.innerText = score; 
    if(currentQuestion<5){
    next();
    }
    }

    dBtn.onclick= () => {
    
        let ano=3; 
        if(questions [currentQuestion].answers [ano].answer){ 
            if(score<5){
                score=score+1;
            }
        }
        userScore.innerText = score; 
        if(currentQuestion<5){
            next();
        }
    }
    prevBtn.classList.add('hide');
}

beginQuiz();

function restart(){
    currentQuestion = 0; 
    prevBtn.classList.remove( 'hide'); 
    nextBtn.classList.remove('hide'); 
    submitBtn.classList.remove('hide'); 
    aBtn.classList.remove( 'hide'); 
    bBtn.classList.remove('hide');
    cBtn.classList.remove('hide');
    dBtn.classList.remove('hide'); 
    score = 0; 
    userScore.innerText = score; 
    beginQuiz();
}

function previous(){
    currentQuestion--;    
    if(currentQuestion<=0){
        prevBtn.classList.add( "hide"); 
        nextBtn.classList.remove( 'hide');
    }

    questionText.innerText = questions[currentQuestion].question; 
    aBtn.innerText = questions[currentQuestion].answers[0].option; 
    bBtn.innerText = questions[currentQuestion].answers[1].option;
    cBtn.innerText = questions[currentQuestion].answers[2].option;
    dBtn.innerText = questions[currentQuestion].answers[3].option;

    aBtn.onclick= () => {
    let ano=0; 
    if(questions[currentQuestion].answers[ano].answer){ 
        if(score<5){
            score=score+1;
        }

    }

    userScore.innerText = score;
    if(currentQuestion<4){
        next();
    }
    }
    
    bBtn.onclick= () => {
    
    let ano=1; 
    if(questions[currentQuestion].answers[ano].answer){ 
        if(score<5){
            score=score+1;
        }
    }
    userScore.innerText = score; 
    if(currentQuestion<4){
    next();
    }
}
    
    cBtn.onclick= () => {
    
    let ano=2; 
    if(questions [currentQuestion].answers [ano].answer){ 
        if(score<5){
            score=score+1;
        }
    }
    userScore.innerText = score; 
    if(currentQuestion<5){
    next();
    }
    }

    dBtn.onclick= () => {
    
        let ano=3; 
        if(questions [currentQuestion].answers [ano].answer){ 
            if(score<5){
                score=score+1;
            }
        }
        userScore.innerText = score; 
        if(currentQuestion<5){
            next();
        }
    }
    nextBtn.classList.remove('hide');
}

function next(){
    currentQuestion++;    
    if(currentQuestion>=4){
        nextBtn.classList.add( "hide"); 
        prevBtn.classList.remove( 'hide');
    } 
    
    questionText.innerText = questions[currentQuestion].question; 
    aBtn.innerText = questions[currentQuestion].answers[0].option; 
    bBtn.innerText = questions[currentQuestion].answers[1].option;
    cBtn.innerText = questions[currentQuestion].answers[2].option;
    dBtn.innerText = questions[currentQuestion].answers[3].option;
    
    aBtn.onclick= () => {
    let ano=0; 
    if(questions [currentQuestion].answers[ano].answer){ 
        if(score<5){
            score=score+1; 
        }

    }

    userScore.innerText = score;
    if(currentQuestion<4){
        next();
    }
    }
    
    
    bBtn.onclick= () => {
    
    let ano=1; 
    if(questions [currentQuestion].answers [ano].answer){ 
        if(score<5){
            score=score+1;
        }
    }
    userScore.innerText = score; 
    if(currentQuestion<4){
    next();
    }
}
    
    cBtn.onclick= () => {
    
    let ano=2; 
    if(questions [currentQuestion].answers [ano].answer){ 
        if(score<5){
            score=score+1;;
        }
    }
    userScore.innerText = score; 
    if(currentQuestion<5){
    next();
    }
    }
    
    dBtn.onclick= () => {
    
        let ano=3; 
        if(questions [currentQuestion].answers [ano].answer){ 
            if(score<5){
                score=score+1;;
            }
        }
        userScore.innerText = score; 
        if(currentQuestion<5){
            next();
        }
    }
    prevBtn.classList.remove('hide');
}

