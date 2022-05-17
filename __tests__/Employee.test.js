const Employee = require("../lib/Employee.js")

test('create employee object', () => {

    const employee = new Employee('John', '00001', 'hellothere@obi-wan.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe('00001');
    expect(employee.email).toBe('hellothere@obi-wan.com');
});
test('test the getName(), getId(), getEmail and getRole methods', () => {
    const employee = new Employee('John', '00001', 'hellothere@obi-wan.com')

    expect(employee.getName()).toBe('John');
    expect(employee.getId()).toBe('00001');
    expect(employee.getEmail()).toBe('hellothere@obi-wan.com');
    expect(employee.getRole()).toBe('Employee');
});