// These variables provide the answers that the test will be marked against
const SECTION_ONE_ANSWERS = ["b", "d", "c", "c", "b"]; 

let globalScore = 0;

// This function will hide the current section and show the next when clicked
function nextSection(currentSection, nextSection) { 
    document.querySelector('#' + currentSection).style.display = "none";
    document.querySelector('#' + nextSection).style.display = "block";
}

// This function will check that the answers inputed by the user are correct
function markSection(sectionNumber) { 
    let i = 1;
    let sectionScore = 0;
    while (i < 6) {
        let input = document.querySelector("#answer" + i);
        input = input.value;

        if (input == SECTION_ONE_ANSWERS[(i-1)]) {
            document.querySelector("#answer" + i).style = "background-color:green;";
            sectionScore++;
        } else {
            document.querySelector("#answer" + i).style = "background-color:red;";
        }
        i++;
    }

    allowContinue(sectionNumber, sectionScore);

    globalScore=+ sectionScore;
    return i;
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