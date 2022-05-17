const Engineer = require('../lib/Engineer');

test('create engineer object', () => {
    const engineer = new Engineer('John', '00001', 'hellothere@obi-wan.com', 'johnGit');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('00001');
    expect(engineer.email).toBe('hellothere@obi-wan.com');
    expect(engineer.gitUsername).toBe('johnGit');
});
test('test the getName(), getId(), getEmail, getRole and getGitUsername methods', () => {
    const engineer = new Engineer('John', '00001', 'hellothere@obi-wan.com', 'johnGit');

    expect(engineer.getName()).toBe('John');
    expect(engineer.getId()).toBe('00001');
    expect(engineer.getEmail()).toBe('hellothere@obi-wan.com');
    expect(engineer.getGitUsername()).toBe('johnGit');
});