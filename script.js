// This variable provides the answers that the test will be marked against
const ANSWERS = ["b", "d", "c", "c", "b", "6", "sphere", "equal", "no", "0", "4", "4", "2", "0", "7"]; 

// Defines the global score and sets it to 0 at the begining of the test
let globalScore = 0;

// This function will hide the current section and show the next when clicked
function nextSection(currentSection, nextSection) { 
    document.querySelector('#' + currentSection).style.display = "none";
    document.querySelector('#' + nextSection).style.display = "block";
}

// This function will check that the answers inputed by the user are correct 
function markSection(sectionNumber, firstQuestion) { 
    let i = firstQuestion;
    let sectionScore = 0;
    while (i < (firstQuestion + 5)) { // Ensures that it only attempts to mark 5 questions
        let input = document.querySelector("#answer" + i).value;
        input = input.toLowerCase();

        if (input == ANSWERS[(i-1)]) { // If the input = the corect answer from the variable defined above...
            document.querySelector("#answer" + i).style = "background-color:#bcfcb0;";
            sectionScore++;
        } else {
            document.querySelector("#answer" + i).style = "background-color:#fcb0b0;";
        }
        i++;
    }

    allowContinue(sectionNumber, sectionScore);
}

// This function will check that they have answered the question in the correct way
function inputCheck() {
    let correction = document.querySelector("#answer" + i + "correction");
    correction.innerHTML = "";

    if(input == "") { // If input is left empty...
        correction.innerHTML = "Please answer the question";
    }

    if(isANumber == true) { // If the answer is supposed to be a number
        try {
            isNaN(input); 
        } catch (error) { // but isn't, tell them to answer with a number
            correction.innerHTML = "Please answer with a number";
        } 
    }
}

// This function will reveal the continue button if they get more than 3 correct answers, otherwise they will have to repeat some questions
function allowContinue(sectionNumber, sectionScore) {
    let comment = document.querySelector('#section-results' + sectionNumber);
    comment.style.display = "block";
    if (sectionScore > 3) {
        comment.innerHTML = `Well done! You got ${sectionScore}/5`;
        document.querySelector('#next-button' + sectionNumber).style.display = "inline"; // Shows the continue button

        disableRetry(sectionNumber);

        globalScore += sectionScore;
    } else {
        comment.innerHTML = `You got ${sectionScore}/5, you should try again to move onto the next section`;
    }

    return globalScore;
}


// This function will prevent the user from repeating the questions
function disableRetry(sectionNumber) {
    document.querySelector('#done-button' + sectionNumber).disabled = true; // Prevents button from being used
    document.querySelector('#done-button' + sectionNumber).style.cursor = "default";
}

// This function will reveal the results for the whole test
function shareResults() {
    let score = document.querySelector('#test-results');
    score.innerHTML = `You got ${globalScore}/15!!`
}