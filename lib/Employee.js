
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

/* References

https://benyoss4.medium.com/what-is-js-subclassing-and-how-its-a-time-saver-be46995c95ce
class mini-project
class activities
https://dev.to/cschratz/inheritance-and-subclasses-using-es6-3ncl




*/