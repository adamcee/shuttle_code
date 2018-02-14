console.log('greete.js running ...');
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.fullName;
}
console.log('greeter func defined');
var user = new Student("Jane", "M", "User");
var message = greeter(user);
console.log(message);
