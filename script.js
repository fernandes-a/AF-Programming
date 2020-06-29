function nextSection(currentSection, nextSection) { // This function will hide the section and show the next when clicked
    document.querySelector('#' + currentSection).style.display = "none";
    document.querySelector('#' + nextSection).style.display = "block";
}