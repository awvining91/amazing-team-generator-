
//This links to the employee file which we need

const Employee = require('./employee');


//sub class engineer
class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email);
        this.github = github;

        this.role = 'Engineer';
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return this.role
    }
    
}

module.exports = Engineer;