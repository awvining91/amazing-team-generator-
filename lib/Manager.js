const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

    super(name, id, email, officeNumber)
    this.name = name;
    this.id = id;
    this.email = email; 
    this.officeNumber = officeNumber;

    }

    getName() {
        return this.name;
    }


    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.email;
    }

}

