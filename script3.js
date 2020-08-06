// This variable provides the answers that the test will be marked against
const ANSWERS = ["b", "d", "c", "c", "b", 6, "sphere", "equal", "no", 0, 4, 4, 2, 0, 7]; 

// Defines the global score and sets it to 0 at the begining of the test
let globalScore = 0;

// This function will hide the current section and show the next when clicked
function nextSection(currentSection, nextSection) { 
    document.querySelector('#' + currentSection).style.display = "none";
    document.querySelector('#' + nextSection).style.display = "block";
}

// This function will check that they have answered the question in the correct way
function inputCheck(sectionNumber, firstQuestion) {
    let i = firstQuestion;
    let invalidInput = 0; // Defines how many answers are "invalid" i.e. answered in the wrong way or not at all
    let correction;

    while (i < (firstQuestion + 5)) { // Only checks validity of 5 questions
        let input = document.querySelector("#answer" + i).value;
        correction = document.querySelector("#answer" + i +"correction");
        correction.innerHTML = ""; // Resets text to empty 

        document.querySelector("#answer" + i).style = "background-color:#fff;"; // Resets bgc to white

        try {
            if(input == "") throw "Please answer the question"; // If answer is left empty, tell to answer
            if(isNaN(input) && typeof(ANSWERS[(i-1)]) == 'number') throw "Please answer with a number"; // If they answer with words but should have answered with a number, tell to answer with number
            if(isFinite(input) && typeof(ANSWERS[(i-1)]) != 'number') throw "Please answer with a letter/word"; // If they answer with a number but should have answered with a word, tell to answer with a word
        } catch (error) {
            correction.innerHTML = error;
            document.querySelector("#answer" + i).style = "background-color:#f8fcb0;"; // Changes bgc to yellow

            invalidInput++; // Increase the number of answers that are invalid
        }
        i++;
    }

    if (invalidInput == 0) { // If no answers are invalid, move on to marking
        markSection(sectionNumber, firstQuestion);
    }
}

// This function will check that the answers inputed by the user are correct 
function markSection(sectionNumber, firstQuestion) { 
    let i = firstQuestion
    let sectionScore = 0;
    let input;

    while (i < (firstQuestion + 5)) { // Ensures that it only attempts to mark 5 questions
        input = document.querySelector("#answer" + i).value;
        input = input.toLowerCase(); // This makes sure that if they answer "A" but the answer is "a" they can still get it correct

        if (input == ANSWERS[(i-1)]) { // If the input = the corect answer from the variable defined above i.e. is correct
            document.querySelector("#answer" + i).style = "background-color:#bcfcb0;"; // Changes text input colour to green
            sectionScore++; // Increases score by 1
        } else {
            document.querySelector("#answer" + i).style = "background-color:#fcb0b0;"; // Changes text input colour to red
        }

        i++;
    }

    allowContinue(sectionNumber, sectionScore);
}

// This function will reveal the continue button if they get more than 3 correct answers, otherwise they will have to repeat some questions
function allowContinue(sectionNumber, sectionScore) {
    let comment = document.querySelector('#section-results' + sectionNumber);
    comment.style.display = "block"; // Show comment section
    if (sectionScore > 3) {
        comment.innerHTML = `Well done! You got ${sectionScore}/5`;
        document.querySelector('#next-button' + sectionNumber).style.display = "inline"; // Shows the continue button

        disableRetry(sectionNumber);

        globalScore += sectionScore; // Add section score to the global score
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