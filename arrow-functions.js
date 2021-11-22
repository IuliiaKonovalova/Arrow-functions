/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function


function sumNumbers (a, b) {
    return a + b
}

console.log(sumNumbers())

// Arrow Function With Parameters

const sumNumbersArrowFunction = (a, b) => {
    return a + b
}

console.log(sumNumbersArrowFunction())

// Single Line Arrow Function With Parameters

const sumNumbersArrowFunctionSingLine = (a, b) => a + b

console.log(sumNumbersArrowFunctionSingLine())

// Implicit Returns

const sayHellow = message => console.log(message)

console.log(sayHellow())

// Returning Multiple Lines

const returnMultipleLines = () => (
`    <p>
        <div>
            <h1></h1>
        </div>
    </p>`
)

console.log(returnMultipleLines())