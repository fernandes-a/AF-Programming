// These variables provide the answers that the test will be marked against
const SECTION_ONE_ANSWERS = ["b", "d", "c", "c", "b"]; 

let score = 0;

// This function will hide the current section and show the next when clicked
function nextSection(currentSection, nextSection) { 
    document.querySelector('#' + currentSection).style.display = "none";
    document.querySelector('#' + nextSection).style.display = "block";
}

// This function will check that the answers inputed by the user are correct
function markSection() { 
    let i = 1;
    while (i < 6) {
        let input = document.querySelector("#answer" + i);
        input = input.value;

        if (input == SECTION_ONE_ANSWERS[(i-1)]) {
            alert(`question ${i} correct!`)
        } else {
            alert(`question ${i} incorrect`)
        }
        i++;
    }
}