let selectedText = '';
let selectedRange;

function handleTextSelection(event) {
    let selection = window.getSelection();
    selectedText = selection.toString();
    if (selectedText) {
        selectedRange = selection.getRangeAt(0).cloneRange(); // Clone the range to keep a reference
        document.querySelector('.comment-form').style.display = 'block';
    }
}

export { selectedText, selectedRange, handleTextSelection };
