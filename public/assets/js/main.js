
function convertToText() {
    // Get the value from the textarea
    const notesInput = document.getElementById('notes').value;

    // Convert the notes to a string
    const textResult = notesInput.toString();

    // Display the result
    document.getElementById('result').innerText = textResult;
}



// definitly needs more work.