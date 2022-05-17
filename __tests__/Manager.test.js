const Manager = require('../lib/Manager');

test('create manager object', () => {
    const manager = new Manager('John', '00001', 'hellothere@obi-wan.com', '1234567890');

    expect(manager.name).toBe('John')
    expect(manager.id).toBe('00001')
    expect(manager.email).toBe('hellothere@obi-wan.com')
    expect(manager.officeNumber).toBe('1234567890')
})
test('test the getName(), getId(), getEmail, getRole and getOfficeNumber methods', () => {
    const manager = new Manager('John', '00001', 'hellothere@obi-wan.com', '1234567890');

    expect(manager.getName()).toBe('John')
    expect(manager.getId()).toBe('00001')
    expect(manager.getEmail()).toBe('hellothere@obi-wan.com')
    expect(manager.getOfficeNumber()).toBe('1234567890')
})