const Employee = require("../lib/Employee");
test("can set name",()=>{
    const employee = new Employee ("Manuela", 499, "manuela@gmail.com");
    expect (employee.name).toBe("Manuela");
});
test("can get name",()=>{
    const employee = new Employee ("Manuela", 499, "manuela@gmail.com");
    expect (employee.getname()).toBe("Manuela");
})