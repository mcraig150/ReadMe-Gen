const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");


// Object array used to store questions for user
const questions = [

    {
        message: "Whats the name of your project",
        name: "title"
    },


    {
        message: "Enter the description of your project",
        name: "description"
    },


    {
        message: "Enter the table of contents",
        name: "table"
    },


    {
        message: "How do you install your project ?",
        name: "install"
    },

    {
        message: "What license was used for this page ?",
        name:"license"
    },


    {
        message: "Whos contributing ?",
        name:"cont"
    },


    {
        message: "Any tests ?",
        name: "tests"
    },


    {
        message: "Any questions ?",
        name: "questions"
    }

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName + ".md", data);
}

 function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse) => { 
        console.log("Making ReadMe");
        console.log(inquirerResponse);
        writeToFile(inquirerResponse.title, markdown(inquirerResponse));


    })
    .catch((err) => {
        console.log(err);
    })
}

init();
