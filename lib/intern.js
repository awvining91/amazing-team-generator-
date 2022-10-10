//dependencies
const Employee = require('./employee');

//create intern class, extends employee class
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

//exports the intern class
module.exports = Intern;