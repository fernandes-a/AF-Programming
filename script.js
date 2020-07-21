// This variable provides the answers that the test will be marked against
const ANSWERS_MULTICHOICE = ["b", "d", "c", "c", "b", "6", "sphere", "equal", "no", "0"]; 
const ANSWERS_PLACEVALUE = [145, 493, 42, 1000, 7503];

let globalScore = 0;

// This function will hide the current section and show the next when clicked
function nextSection(currentSection, nextSection) { 
    document.querySelector('#' + currentSection).style.display = "none";
    document.querySelector('#' + nextSection).style.display = "block";
}

// This function will check that the answers inputed by the user are correct for the multichoice sections 
function markMultichoice(sectionNumber, firstQuestion) { 
    let i = firstQuestion;
    let sectionScore = 0;
    while (i < (firstQuestion + 5)) {
        let input = document.querySelector("#answer" + i);
        input = input.value;

        if (input == ANSWERS_MULTICHOICE[(i-1)]) {
            document.querySelector("#answer" + i).style = "background-color:#bcfcb0;";
            sectionScore++;
        } else {
            document.querySelector("#answer" + i).style = "background-color:#fcb0b0;";
        }
        i++;
    }

    allowContinue(sectionNumber, sectionScore);

    globalScore=+ sectionScore;
    return i;
}

// This function will check that answers inputed by the user are correct for the placevalue section
function markPlaceValue(firstQuestion) {
    let i = firstQuestion;
    let sectionScore = 0;

    let thousands = document.querySelector("#answer11thousands").value;
    let hundreds = document.querySelector("#answer11hundreds").value;
    let tens = document.querySelector("#answer11tens").value;
    let ones = document.querySelector("#answer11ones").value;


    if (thousands == "" && hundreds == 1 && tens == 4 && ones == 5) {
        alert("correct");
    } else {
        alert("nope");
    }
}

// This function will reveal the continue button if they get more than 3 correct answers, otherwise they will have to repeat some questions
function allowContinue(sectionNumber, sectionScore) {
    let comment = document.querySelector('#section-results' + sectionNumber);
    comment.style.display = "block";
    if (sectionScore > 3) {
        comment.innerHTML = `Well done! You got ${sectionScore}/5`;
        document.querySelector('#next-button' + sectionNumber).style.display = "inline";
    } else {
        comment.innerHTML = `You got ${sectionScore}/5, you should try again to move onto the next section`;
    }
}