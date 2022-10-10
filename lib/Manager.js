//links to employee

const Employee = require('./employee.js');

//Manager sub class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email)

        this.officeNumber = officeNumber;
        
        this.role = "Manager"

    }


    getOfficeNumber() {
        return this.officeNumber
    }


    getRole() {
        return this.role;
    }

}

module.exports = Manager;

/* References

https://benyoss4.medium.com/what-is-js-subclassing-and-how-its-a-time-saver-be46995c95ce
class mini-project
class activities
https://dev.to/cschratz/inheritance-and-subclasses-using-es6-3ncl




*/