const fs = require("fs");
const inquirer = require("inquirer");
markdown = require("./utils/generateMarkdown")



// Object array used to store questions for user
const questions = [

    
    {
        message: "Whats your gitHub user name?",
        name: "userName"
    },

    {
        message: "Whats the name of your project repo?",
        name: "repoName"
    },

    {
        message: "Whats the name of your project?",
        name: "title"
    },


    {
        message: "Enter the description of your project",
        name: "description"
    },


    {
        message: "How do you install your project?",
        name: "install"
    },

    {
        message: "What license was used for this page?",
        name:"license"
    },

    {
        message: "How do you use the project?",
        name: "usage"
    },


    {
        message: "Whos contributing?",
        name:"cont"
    },


    {
        message: "Any tests?",
        name: "test"
    },


    {
        message: "Whats your gitHub email?",
        name: "email"
    }

];


const gitAccount = questions.userName;


function writeToFile(fileName, data) {
    fs.writeFileSync(fileName + ".md", data);
}

 function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse) => { 
        console.log("Creating ReadMe");
        console.log(inquirerResponse);
        writeToFile(questions.title, markdown(inquirerResponse));


    })
    .catch((err) => {
        console.log(err);
    })
}

init();
