



const Employee = require("../lib/Employee.js");

describe('getName', () => {
    it('should return the name')
        let name = 'mark';
        let obj = new Employee(name)
    expect( obj.name).toBe(name);


});
