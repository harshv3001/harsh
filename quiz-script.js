var currentQuestion = 0;
var score = 0;
var unattempted = 0;
var totQuestions = questions.length;


var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var prevButton = document.getElementById('prevButton');
var resultCont = document.getElementById('result');


document.getElementById('prevButton').style.visibility = "hidden";


function loadQuestion(questionIndex) {

   var q = questions[questionIndex];
    questionEl.textContent = parseInt(questionIndex) + 1 + '.' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;

}
loadQuestion(currentQuestion);

function loadsNextQuestion() {
    

   var SelectedOption = document.querySelector('input[type=radio]:checked');

  
    if(!SelectedOption){
    
            currentQuestion++;

            loadQuestion(currentQuestion);

            unattempted++;
            if(currentQuestion > 0) {
                document.getElementById('prevButton').style.visibility = "visible";
            }
            if(currentQuestion == totQuestions - 1){
                nextButton.textContent = 'finish';
            }

            if(currentQuestion == totQuestions ) {
                container.style.display = 'none';
                resultCont.style.display = '';
                resultCont.textContent = 'Your Score: ' + score + 'Unattempted: '+ unattempted;    
            }
            
    }
   
            
        
   
            var answer = SelectedOption.value;

            if(questions[currentQuestion].answer == answer){
                score += 1;
            } 
            currentQuestion++;
            if(currentQuestion > 0) {
                 document.getElementById('prevButton').style.visibility = "visible";
            }
            SelectedOption.checked = false;
            

            if(currentQuestion == totQuestions - 1){
                nextButton.textContent = 'finish';

            }
            if(currentQuestion == totQuestions ) {
                container.style.display = 'none';
                resultCont.style.display = '';
                resultCont.textContent = 'Your Score: ' + score + 'Unattempted: '+ unattempted;    
            }
           
            loadQuestion(currentQuestion);
        

        
        
    
}     
      
function loadsPrevQuestion() {

    currentQuestion--;
    loadQuestion(currentQuestion);
}

function reply_click(clicked_id)
{
    loadQuestion(clicked_id);
}

/*function loadQuestion1(questionIndex) {

    var q = questions[questionIndex];
     questionEl.textContent = (questionIndex) + '.' + q.question;
     opt1.textContent = q.option1;
     opt2.textContent = q.option2;
     opt3.textContent = q.option3;
     opt4.textContent = q.option4;
 
 }*/


    
