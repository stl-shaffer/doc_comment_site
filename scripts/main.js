import { handleTextSelection } from './textSelection.js';
import { handleCommentSubmission } from './commentHandling.js';

// Initialize event listeners and any other setup logic
document.querySelector('#text-content').addEventListener('mouseup', handleTextSelection);
document.querySelector('#submit-comment').addEventListener('click', handleCommentSubmission);

// Additional initialization code here
