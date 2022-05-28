const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const { writeFile } = require('./utils/generate-site');
const generatePage = require('./src/page-template');
const team = [];

const managerPrompt = () => {

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the manager's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter the manager's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter the Manager's id. (Required)",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter the manager's id!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter the Manager's email. (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter the manager's email!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Enter the Manager's office number. (Required)",
                validate: offNumberInput => {
                    if (offNumberInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter the manager's name!");
                        return false;
                    }
                }
            },

        ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(manager);
            menuPrompt();
        })
}

const menuPrompt = () => {

    console.log(`
    ----------------
    Add New Members
    ----------------
    `);

    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'addMembers',
                message: 'Do you wish to add a member to the team?',
                choices: ['Add Engineer', 'Add an Intern', 'Finish building the team'],
            }
        ])
        .then((choice) => {
            switch (choice.addMembers) {
                case "Add Engineer":
                    engineerPrompt();
                    break;
                case "Add an Intern":
                    internPrompt();
                    break;
                default:
                    writeFile(generatePage(team));
            }
        })
}

const engineerPrompt = () => {
    console.log(`
    ------------
    Add Engineer
    ------------`
    );

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter the engineer's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's id? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter the engineer's id!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter the engineer's email!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's Github Username? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter the engineer's Github Username!");
                        return false;
                    }
                }
            },
        ])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team.push(engineer);
            menuPrompt();
        })
}

const internPrompt = () => {
    console.log(`
    ----------
    Add Intern
    ----------
    `);

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter the intern's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's id? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter the intern's id!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter the intern's email!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter the intern's school!");
                        return false;
                    }
                }
            }
        ])
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            team.push(intern);
            menuPrompt();
        })
}

managerPrompt()
