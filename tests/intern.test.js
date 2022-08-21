const Intern = require("../library/Intern");

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "School");
  expect(e.getRole()).toBe(testValue);
});
