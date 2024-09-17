const fs = require('fs');
const path = require('path');

// Arithmetic Expressions function

//  input/output 
const inputFilePath = path.join(__dirname, 'input.txt');
const outputFilePath = path.join(__dirname, 'output.txt');

// function
function evaluateExpression(expression) {
    try {
        // replacing non-standard characters en-dash
        const sanitizedExpression = expression
            .replace(/–/g, '-')
            .replace(/\^/g, '**')
            .replace(/(\d)\s*\(/g, '$1*(')
            .replace(/\)\s*(\d)/g, ')*$1')
            .replace(/\)\s*\(/g, ')*(');

        console.log('Sanitized expression:', sanitizedExpression);

        // Evaluating sanitized exp by Func constructor
        return new Function('return ' + sanitizedExpression)();
    } catch (error) {
        return `Error: ${expression} - ${error.message}`;
    }
}

// i/p file reading 
fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('reading input file err:', err);
        return;
    }

    // Splitting data into lines
    const lines = data.split('\n');

    // Evaluating each line and collecting results
    const results = lines.map(line => {
        // Remove the '=' at the end of the line
        const expression = line.replace('=', '').trim();

        if (expression) {
            const result = evaluateExpression(expression);
            return `${line.trim()} ${result}`;
        }
        return '';
    }).filter(line => line.length > 0); // Remove empty lines

    // writing res in o/p file
    fs.writeFile(outputFilePath, results.join('\n'), 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the output file:', err);
        } else {
            console.log('Output written to', outputFilePath);
        }
    });
});
