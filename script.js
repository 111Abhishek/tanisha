// Function to handle typing boxes
function handleTypingBoxes() {
    const inputBox1 = document.getElementById('textInput'); // Corrected variable name
    const rectangleDiv = document.getElementById('4:4');
    
}

function displayDate() {
    const dateElement = document.getElementById('date');
    
    if (dateElement) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const currentDate = new Date().toLocaleDateString('en-US', options);
        
        dateElement.textContent = currentDate;
    }
    else {
        console.error("Element with ID 'date' not found.");
    }
}

// Initialize the functions when the document is loaded
document.addEventListener('DOMContentLoaded', function () {
    handleTypingBoxes();
    displayDate();
});
