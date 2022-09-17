const Intern = require("../lib/Intern");
test("can set school",()=>{
    const employee = new Intern ("Manuela", 499, "manuela@gmail.com", "Washington State");
    expect (employee.school).toBe("Washington State");
});
test("can get school",()=>{
    const employee = new Intern ("Manuela", 499, "manuela@gmail.com", "Washington State");
    expect (employee.getschool()).toBe("Washington State");
})