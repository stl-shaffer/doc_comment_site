function createConnectorLine(textRect, commentRect) {
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
    document.querySelector('.connector-lines').appendChild(line);
    return lineId;
}

function toggleLineVisibility(lineId, show) {
    let line = document.getElementById(lineId);
    if (line) {
        line.style.display = show ? 'block' : 'none';
    }
    // Toggle the highlight class on the text range if needed
    // Additional code to handle highlighting can be added here
}

export { createConnectorLine, toggleLineVisibility };
