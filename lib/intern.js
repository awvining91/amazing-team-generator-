

//link to main class
const Employee = require('./employee');


class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {

        return this.school;
    }

    getRole() {
        return this.role;
    }
}



module.exports = Intern;

/* References

https://benyoss4.medium.com/what-is-js-subclassing-and-how-its-a-time-saver-be46995c95ce
class mini-project
class activities
https://dev.to/cschratz/inheritance-and-subclasses-using-es6-3ncl




*/