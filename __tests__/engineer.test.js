const Engineer = require("../lib/Engineer");
test("can set github",()=>{
    const employee = new Engineer ("Manuela", 499, "manuela@gmail.com", "ManuelaKenna");
    expect (employee.github).toBe("ManuelaKenna");
});
test("can get name",()=>{
    const employee = new Engineer ("Manuela", 499, "manuela@gmail.com", "ManuelaKenna");
    expect (employee.getgithub()).toBe("ManuelaKenna");
})