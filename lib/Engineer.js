const Employee = require ('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitUsername) {
        super(name, id, email);
        this.gitUsername = gitUsername;
    }
    getGitUsername() {
        return this.gitUsername;
    }
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;