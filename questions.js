//Welcome to the main page! I hope you like my project!

//add needed dependencies like inquireer and fs

const inquirer = require('inquirer');

const fs = require('fs');




const Engineer = require('./lib/engineer');

const Manager = require('./lib/manager');

const Intern = require('./lib/intern');


//Empty arrays to hold needed data

const managers = [];

const engineers = [];

const interns = [];


//Do you want another team member?

const addNewPerson = () => {

    inquirer

        .prompt ([
            {
                type: 'confirm',
                name: 'addNewPerson',
                message: 'Want to have another team member?',
            },
        ])

        .then((info) => {

            if(info.addNewPerson === true) {
                firstQ();

            } else {

                console.log(managers, engineers, interns);

                module.exports = managers;

                module.exports = engineers;

                module.exports = interns;
                //new local methods to help with html generation
                eraseOldStuff();

                upperWebsite();

                bossCreator();

                engCreator();

                intCreator();

                LowerWebsite();

                return info;
            }
        });
};
// The methods will get defined later, but are called here, so everything 'hopefully' works correctly

//-Questions and such--------------------------------------------------------------------------------------------------------------//


//The first question prompt

const firstQ = () => {
    inquirer

        .prompt ([

            {
                type: 'list',
                name: 'role',
                message: 'What job do they have?',
                choices: ['The Boss', 'Engineer', 'Intern'],
            },
        ])

        .then((info) => {

            if (info.role === 'The Boss') {
                bossPrompts();

            } else if (info.role === 'Engineer') {
                engPrompts();


            } else if (info.role === 'Intern') {
                intPrompts();

            }
        });
};

firstQ();

//Prompts for the awesome engineer

const engPrompts = () => {

    inquirer

        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is their name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their e-mail?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is their github name?',
            },
        ])
        .then((info) => {

            const newEngineer = new Engineer (
                info.name,
                info.id,
                info.email,
                info.github
            );

            engineers.push(newEngineer);
            addNewPerson();
        });
};

//Prompts for the future employee to be

const intPrompts = () => {

    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name?',
            },

            {
                type: 'input',
                name: 'id',
                message: 'What is the id?',
            },



            {
                type: 'input',
                name: 'email',
                message: 'What is the email?',
            },

            {
                type: 'input',
                name: 'school',
                message: 'What university are they from?',
            },
        ])

        .then((info) => {

            const newIntern = new Intern (

                info.name,
                info.id,
                info.email,
                info.school,
            );
            interns.push(newIntern);
            addNewPerson();
        });
};

//Prompts for the boss

const bossPrompts = () => {

    inquirer

        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is the boss called?',

            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is their phone number?',
            },
        ])

        .then((info) => {
            const newManager = new Manager(
                info.name,
                info.id,

                info.email,
                info.officeNumber,
            );

            managers.push(newManager);

            addNewPerson();
        });
};


//-Logic for adding the html parts----------------------------------------------------------------------------------------------------------------------------//


//Get rid of the old data in index.html to avoid using old stuff

const eraseOldStuff = () => {
    fs.unlinkSync('./index.html');
};

//Add in the upper part of the website

const upperWebsite = () => {
    fs.appendFileSync('index.html', createWebsite());
};

//Add in info for the Boss that was entered

const bossCreator = () => {
    managers.forEach((boss => {
        fs.appendFileSync('index.html', makeBoss(boss));
    }));
};

//Add new info to the engineer section on website

const engCreator = () => {
    engineers.forEach((engineer => {
        fs.appendFileSync('index.html', makeEng(engineer));
    }));
};

//Add intern info to the website

const intCreator = () => {
    interns.forEach((intern => {
        fs.appendFileSync('index.html', makeInt(intern));
    }));
};

//Add in the bottom chunk of the new website

const LowerWebsite = () => {
    fs.appendFileSync('index.html', createLowerSite());
};




// Generate html stuff----------------------------------------------------------------------------------------------------------------------------------//


const createWebsite = () => {
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
const makeInt = (intern) => {
    return `
    
    <div class="container mb-2   shadow-lg ">
    <div class="row">

        <div class=" col-12 d-flex    justify-content-center">

            <h2 class="intern">Super Intern 🎓
               
            </h2>
        </div>
    </div>    
            <div class="employee">

                <p>Name: ${intern.name}</p>
                <p>E-mail: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>Id-Number: ${intern.id}</p>
                <p>Job: ${intern.role}</p>
                <p>University: ${intern.school}</p>
            </div>

</div>


`
}

//add engineer card html
const makeEng = (engineer) => {
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
const makeBoss = (boss) => {
    return `
    
    
    <div class="container mb-2  shadow-lg ">
    <div class="row">
        <div class=" col-12 d-flex justify-content-center">

            <h2 class="manager">The Boss 🎃
                
            </h2>
        </div>

    </div>
            <div class="employee">

                <p>Name: ${boss.name}</p>
                <p>E-email: <a href="mailto:${boss.email}">${boss.email}</a></p>
                <p>Id-Number: ${boss.id}</p>
                <p>Job: ${boss.role}</p>
                <p>Phone: ${boss.officeNumber}</p>
        </div>

</div>


`
}

//append the lower part of the frontend html

const createLowerSite = () => {
    return `</body>
    </html>`

}
    
/* References

https://getbootstrap.com/docs/4.0/components/card/#card-styles
https://benyoss4.medium.com/what-is-js-subclassing-and-how-its-a-time-saver-be46995c95ce
https://www.youtube.com/watch?v=K0vzRHZEsxc&list=WL&index=34&t=3s

https://www.youtube.com/watch?v=NPgg3rpZ_RU
https://www.youtube.com/watch?v=VVGgacjzc2Y
class mini-project
https://www.freecodecamp.org/news/how-javascript-implements-oop/
https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/

class activities
https://benyoss4.medium.com/what-is-js-subclassing-and-how-its-a-time-saver-be46995c95ce
Lots of stack overflow :)

*/