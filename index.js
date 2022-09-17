const inquirer = require ("inquirer")
const fs = require ("fs")
const Manager = require ("./lib/Manager")
const Intern = require ("./lib/Intern")
const Engineer = require ("./lib/Engineer")
const path = require ("path")
const generatehtml = require ("./src/generatehtml")
const Team = []

function mainMenu () {
    inquirer.prompt ({
        type: "list", 
        name: "direction",
        message: "What type of employee would you like to create?", 
        choices: ["Manager", "Intern", "Engineer", "build team"],

    }).then (answer => {
        if (answer.direction === "Manager"){
            createManager()
        }else if(answer.direction === "Intern"){
            createIntern()
        }else if(answer.direction === "Engineer"){
            createEngineer()
        }else {
            buildFile()
        }
    })
}

function createManager() {
    inquirer.prompt ([
        {type: "input", name: "name", message: "What is the employees name?"},
        {type: "input", name: "id", message: "What is the employees id?"},
        {type: "input", name: "email", message: "What is the employees email?"},
        {type: "input", name: "officeNumber", message: "What is the employees office number?"},
    ]).then (answers => {
        const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber)
        Team.push(manager)
        console.log(Team);
        mainMenu()
    })
}

function createIntern() {
    inquirer.prompt ([
        {type: "input", name: "name", message: "What is the employees name?"},
        {type: "input", name: "id", message: "What is the employees id?"},
        {type: "input", name: "email", message: "What is the employees email?"},
        {type: "input", name: "school", message: "What is the employees school?"},
    ]).then (answers => {
        console.log(answers); 
        const intern = new Intern (answers.name, answers.id, answers.email, answers.school);
        Team.push(intern)
        mainMenu()
    })
}

function createEngineer() {
    inquirer.prompt ([
        {type: "input", name: "name", message: "What is the employees name?"},
        {type: "input", name: "id", message: "What is the employees id?"},
        {type: "input", name: "email", message: "What is the employees email?"},
        {type: "input", name: "github", message: "What is the employees github?"},
    ]).then (answers => {
        console.log(answers);
        const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github)
        Team.push(engineer)
        mainMenu()
    })
} 

function buildFile() {
    fs.writeFileSync(path.join(__dirname,"/dist/team.html"), generatehtml (Team))
}
mainMenu()