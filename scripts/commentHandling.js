import { selectedText, selectedRange } from './textSelection.js';
import { createConnectorLine, toggleLineVisibility } from './connectorLines.js';

function handleCommentSubmission(event) {
    let commentInput = document.querySelector('#comment-input');
    let commentText = commentInput.value;
    if (commentText && selectedText && selectedRange) {
        // Create a new comment element and add it to the comment display area
        let commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerText = commentText;
        document.querySelector('.comment-display-area').appendChild(commentElement);

        // Get the position of the selected text and the comment element
        let textRect = selectedRange.getBoundingClientRect();
        let commentRect = commentElement.getBoundingClientRect();

        // Create an SVG line element to connect the selected text to the comment
        let lineId = createConnectorLine(textRect, commentRect);

        // Add hover event listeners to the comment element
        commentElement.addEventListener('mouseover', () => toggleLineVisibility(lineId, true));
        commentElement.addEventListener('mouseout', () => toggleLineVisibility(lineId, false));

        // Clear the comment input field and hide the comment form
        commentInput.value = '';
        document.querySelector('.comment-form').style.display = 'none';
    }
}

export { handleCommentSubmission };
