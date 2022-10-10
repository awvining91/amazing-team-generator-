

//add needed dependencies like inquireer and fs

const inquirer = require('inquirer');

const fs = require('fs');


//require team files
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

//create array for roles
const managers = [];
const engineers = [];
const interns = [];

//confirm new team member
const compileTeamMember = () => {
    inquirer
        .prompt ([
            {
                type: 'confirm',
                name: 'compileTeamMember',
                message: 'Would you like to add another team member?',
            },
        ])
        .then((answers) => {
            if(answers.compileTeamMember === true) {
                question1();
            } else {
                console.log(managers, engineers, interns);
                module.exports = managers;
                module.exports = engineers;
                module.exports = interns;
                deleteHtml();
                topHtmlFile();
                managerGenerator();
                engineerGenerator();
                internGenerator();
                bottomHtmlFile();
                return answers;
            }
        });
};

//question1 
const question1 = () => {
    inquirer
        .prompt ([
            {
                type: 'list',
                name: 'role',
                message: 'What is employees role?',
                choices: ['Manager', 'Engineer', 'Intern'],
            },
        ])
        .then((answers) => {
            if (answers.role === 'Manager') {
                managerQuestions();
            } else if (answers.role === 'Engineer') {
                engineerQuestions();
            } else if (answers.role === 'Intern') {
                internQuestions();
            }
        });
};

question1();

//engineer questions
const engineerQuestions = () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is engineers name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is engineers id number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is engineers email?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is engineers github username (case sensitive)?',
            },
        ])
        .then((answers) => {
            const newEngineer = new Engineer (
                answers.name,
                answers.id,
                answers.email,
                answers.github
            );
            engineers.push(newEngineer);
            compileTeamMember();
        });
};

//intern questions
const internQuestions = () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is the interns name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the interns id number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the interns email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school did the intern attend?',
            },
        ])
        .then((answers) => {
            const newIntern = new Intern (
                answers.name,
                answers.id,
                answers.email,
                answers.school,
            );
            interns.push(newIntern);
            compileTeamMember();
        });
};

//manager questions
const managerQuestions = () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is the managers name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the managers id number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the managers email?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the managers office number?',
            },
        ])
        .then((answers) => {
            const newManager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber,
            );
            managers.push(newManager);
            compileTeamMember();
        });
};

//delete html file in none
const deleteHtml = () => {
    fs.unlinkSync('./index.html');
};

//append top html
const topHtmlFile = () => {
    fs.appendFileSync('index.html', generateHTML());
};

//append manager
const managerGenerator = () => {
    managers.forEach((manager => {
        fs.appendFileSync('index.html', generateMgr(manager));
    }));
};

//append engineer
const engineerGenerator = () => {
    engineers.forEach((engineer => {
        fs.appendFileSync('index.html', generateEng(engineer));
    }));
};

//append intern
const internGenerator = () => {
    interns.forEach((intern => {
        fs.appendFileSync('index.html', generateIntern(intern));
    }));
};

//append html bottom
const bottomHtmlFile = () => {
    fs.appendFileSync('index.html', generateBtm());
};

const generateHTML = () => {
   return ` 
   
   
   
   <!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <title>My Amazing Super-Team!!! 🦸</title>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-2">

                <h1 class="text-center">My Amazing Super-Team!!! 🦸</h1>
            </div>

        </div>
    </div>
    
    
    
    
    `
}    

//add intern card html
const generateIntern = (intern) => {
    return `<div class="container mb-3 card-custom shadow-lg border-primary rounded">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            <h2 class="intern">Intern
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-helicopter" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 10l1 2h6" />
                    <path d="M12 9a2 2 0 0 0 -2 2v3c0 1.1 .9 2 2 2h7a2 2 0 0 0 2 -2c0 -3.31 -3.13 -5 -7 -5h-2z" />
                    <line x1="13" y1="9" x2="13" y2="6" />
                    <line x1="5" y1="6" x2="20" y2="6" />
                    <path d="M15 9.1v3.9h5.5" />
                    <line x1="15" y1="19" x2="15" y2="16" />
                    <line x1="19" y1="19" x2="11" y2="19" />
                  </svg>
            </h2>
        </div>
    </div>    
            <div class="employee">
                <p>Name: ${intern.name}</p>
                <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>Id: ${intern.id}</p>
                <p>Role: ${intern.role}</p>
                <p>School: ${intern.school}</p>
            </div>
</div>`
}

//add engineer card html
const generateEng = (engineer) => {
    return `
    
    
    
    <div class="container mb-2 shadow-lg">
    <div class="row">

        <div class=" col-12 d-flex   justify-content-center">
            <h2 class="engineer">Master Engineer Ninja 🥷
              
            </h2>  
            
            
        </div>
    </div>
            <div class="employee">

                <p>Name: ${engineer.name}</p>
                <p>E-mail: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Id-Number: ${engineer.id}</p>
                <p>Job: ${engineer.role}</p>
                <p>Github Account: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>

            </div>
</div>


`
}

 //add manager card html
const generateMgr = (manager) => {
    return `
    
    
    <div class="container mb-2  shadow-lg ">
    <div class="row">
        <div class=" col-12 d-flex justify-content-center">

            <h2 class="manager">The Boss 🎃
                
            </h2>
        </div>

    </div>
            <div class="employee">

                <p>Name: ${manager.name}</p>
                <p>E-email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Id-Number: ${manager.id}</p>
                <p>Job: ${manager.role}</p>
                <p>Phone: ${manager.officeNumber}</p>
        </div>

</div>


`
}

//append the lower part of the frontend html

const generateBtm = () => {
    return `</body>
    </html>`

}
    
