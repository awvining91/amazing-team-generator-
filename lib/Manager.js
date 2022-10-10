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