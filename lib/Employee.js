
//Here is the main class for Employee

class Employee {

    constructor(name=null, id=null, email=null) {
        this.name = name;
        
        this.id = id;

        this.email = email;
        this.role = "Employee";

    }
//functions to return our data from our awesome employees; like name, id, email etc.
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
        return this.role;
    }

}

module.exports = Employee;
//this exports the module so other files can use it