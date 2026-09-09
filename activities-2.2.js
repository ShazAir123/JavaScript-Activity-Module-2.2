//Activity 2.2: Change HTML content with JavaScript code

function changeHeadingText() {
    //Targeted the id of the HTML heading element
    var headingElement = document.getElementById("change-html-content");
    //assign new text to the HTML heading element. Used var named headingElement.
    headingElement.textContent = "New Heading Text";
    }