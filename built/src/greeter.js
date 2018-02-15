"use strict";
console.log('greete.js running ...');
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}
function greeter(person) {
    return `Hello, ${person.fullName}`;
}
console.log('greeter func defined');
let user = new Student("Jane", "M", "User");
let message = greeter(user);
console.log(message);
//# sourceMappingURL=greeter.js.map