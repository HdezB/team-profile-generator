const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('John', '00001', 'hellothere@obi-wan.com', 'Univ. of JS');

    expect(intern.name).toBe('John');
    expect(intern.id).toBe('00001');
    expect(intern.email).toBe('hellothere@obi-wan.com');
    expect(intern.school).toBe('Univ. of JS');
});
test('test the getName(), getId(), getEmail, getRole and getSchool methods', () => {
    const intern = new Intern('John', '00001', 'hellothere@obi-wan.com', 'Univ. of JS');

    expect(intern.getName()).toBe('John');
    expect(intern.getId()).toBe('00001');
    expect(intern.getEmail()).toBe('hellothere@obi-wan.com');
    expect(intern.getSchool()).toBe('Univ. of JS');
});