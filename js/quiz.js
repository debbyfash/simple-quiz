let questions=["What is 10/2? (a) 3 (b) 5 (c)10 ",
                        "Who invented JavaScript? (a) Douglas Crockford (b) Sheryl Sandberg (c) Brendan Eich" ,
                        "Which one of these is a JavaScript package manager? (a) Node.js (b) TypeScript (c) npm  ",
                        "Which tool can you use to ensure code quality? (a) Angular (b) ESLint (c) jQuery ",
                        "__________is the heart of the computer and this is where all the computing is done (a) Keyboard (b) Mouse (c) CPU (d) Printer "]

        let questionAnswer = ["b", "c", "c", "b", "c"]
 

    let name = prompt(`What is your name?`)
        
    let score = 0
    
    for (var i=0; i < questions.length; i++){
          var answer = prompt(` ${questions[i]}`);
          if (answer.toUpperCase() === questionAnswer[i].toUpperCase()){
            score += 1;        
          }     
        else if(answer.toUpperCase() === "Q" || answer === null ){
            break;
        } 
        
        }
        document.write(`${name}! You got ${score} out of  ${questions.length} correctly`);