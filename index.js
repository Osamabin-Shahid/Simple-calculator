import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiply", "Divide"],
    },
]);
//conditional Statement
if (answer.operator === "Addition") {
    console.log("your answer is:", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log("your answer is:", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiply") {
    console.log("your answer is:", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Divide") {
    console.log("your answer is:", answer.firstNumber / answer.secondNumber);
}
