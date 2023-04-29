// Variables to keep track of the highlighted text and comment form
let selectedText = '';
let selectedRange;
let commentForm = document.querySelector('.comment-form');
let commentInput = document.querySelector('#comment-input');
let commentDisplayArea = document.querySelector('.comment-display-area');
let connectorLines = document.querySelector('.connector-lines');

// Function to show/hide the connector line on hover
function toggleLineVisibility(lineId, show) {
    let line = document.getElementById(lineId);
    if (line) {
        line.style.display = show ? 'block' : 'none';
    }
}

// Add event listener to the text content for text selection
document.querySelector('#text-content').addEventListener('mouseup', function() {
    let selection = window.getSelection();
    selectedText = selection.toString();
    if (selectedText) {
        selectedRange = selection.getRangeAt(0);
        commentForm.style.display = 'block';
    }
});

// Add event listener to the submit comment button
document.querySelector('#submit-comment').addEventListener('click', function() {
    let commentText = commentInput.value;
    if (commentText && selectedText && selectedRange) {
        // Create a new comment element and add it to the comment display area
        let commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerText = commentText;
        commentDisplayArea.appendChild(commentElement);

        // Get the position of the selected text and the comment element
        let textRect = selectedRange.getBoundingClientRect();
        let commentRect = commentElement.getBoundingClientRect();

        // Create an SVG line element to connect the selected text to the comment
        let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        let lineId = 'line-' + Date.now(); // Generate a unique ID for the line
        line.setAttribute('id', lineId);
        line.setAttribute('x1', textRect.right);
        line.setAttribute('y1', textRect.top + window.scrollY);
        line.setAttribute('x2', commentRect.left);
        line.setAttribute('y2', commentRect.top + window.scrollY);
        line.style.stroke = 'black';
        line.style.strokeWidth = '1';
        line.style.display = 'none'; // Initially hide the line
        connectorLines.appendChild(line);

        // Add hover event listeners to the comment element
        commentElement.addEventListener('mouseover', () => toggleLineVisibility(lineId, true));
        commentElement.addEventListener('mouseout', () => toggleLineVisibility(lineId, false));

        // Clear the comment input field and hide the comment form
        commentInput.value = '';
        commentForm.style.display = 'none';
        selectedText = '';
        selectedRange = null;
    }
});
