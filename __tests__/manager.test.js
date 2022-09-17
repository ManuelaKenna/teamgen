const Manager = require("../lib/Manager");
test("can set officenumber",()=>{
    const employee = new Manager ("Manuela", 303, "manuela@gmail.com", "303");
    expect (employee.officenumber).toBe("303");
});
test("can get officenumber",()=>{
    const employee = new Manager ("Manuela", 499, "manuela@gmail.com", "303");
    expect (employee.getofficenumber()).toBe("303");
})