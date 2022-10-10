
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

/* References

https://benyoss4.medium.com/what-is-js-subclassing-and-how-its-a-time-saver-be46995c95ce
class mini-project
class activities
https://dev.to/cschratz/inheritance-and-subclasses-using-es6-3ncl




*/