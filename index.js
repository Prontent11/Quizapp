const quiz=[
    {
        question:" Q1) What is the worst case time complexity of linear search algorithm?",
        a:"A - Ο(1)",
        b:"B - Ο(n)",
        c:"C - Ο(log n)",
        d:"D - Ο(n2)",
        ans:"ans2"
    },
    {
        question:"Q2) Which type of JavaScript language is",
        a:"A - Object-Oriented",
        b:"B - Object-based",
        c:"C - Structural",
        d:"D - High Level",
        ans:"ans2"
    },
    {
        question:"Q3) Stack is used for",
        a:"A - CPU Resource Allocation",
        b:"B - Breadth First Traversal",
        c:"C - Recursion",
        d:"D - None of the above",
        ans:"ans3"
    },
    {
        question:"Q4) Travelling salesman problem is an example of",
        a:"A - Dynamic Algorithm",

        b:"B - Greedy Algorithm",
        
        c:"C - Recursive Approach",
        
        d:"D - Divide & Conquer",
        ans:"ans2"
    }
];


const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
// var answers=new Array;
answers=document.querySelectorAll('.answer');
// var answers=[1,2,3,4];
const showscore=document.querySelector('#showscore')

var count=0;
var score=0;
const quizload=()=>{
    ques=quiz[count]
    question.innerHTML=ques.question;
    option1.innerHTML=ques.a;
    option2.innerHTML=ques.b;
    option3.innerHTML=ques.c;
    option4.innerHTML=ques.d;
   
}

quizload();
const checkanswer=()=>{
    let a;
    answers.forEach((currentelement)=> {
        if(currentelement.checked){
            a=currentelement.id
            // console.log(currentelement);
        }
    });
return a;


}
const deselect=()=>{
    answers.forEach(element => {
        element.checked=false;
    });
}
// checkanswer();
// const fil=answers.filter((element,index)=>{ let ans; if(element.checked){ans=element.id} return ans  })
submit.addEventListener('click',()=>{
const chkans=checkanswer();
    if(chkans == quiz[count].ans){
    score++;
        console.log(chkans);
    }  ; 
    count++;
    if (count<quiz.length) {
        deselect();
        quizload();
    }
    else{
        showscore.innerHTML = `<h3>So you scored ${score}/${count}</h3>
     <button onclick="location.reload()" class='btn' >Play again</button>`;
     showscore.classList.remove('scorearea');

    
    }
    
})


