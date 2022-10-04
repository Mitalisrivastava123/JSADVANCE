
let arr = [
    {

        id: "1",
        name: "john",
        salary: "8000",
        updatedsalary: "8000"

    },
    {
        id: "2",
        name: "mark",
        salary: "9000",
        updatedsalary: "8000"

    },
    {
        id: "3",
        name: "yash",
        salary: "7000",
        updatedsalary: "8000"

    }
];


function updatedata1() {
    try {
        arr.forEach(element => {
            element.updatedsalary = element.salary * 1.10;
        });

    }
    catch (err) {

    }


    var stringtr = "<table><tr><th>Id</th><th>Name</th><th>Total Salary</th><th>Updated Salary</th></tr>";
    for (let x of arr) {
        stringtr += "<tr><td>" + x['id'] + "</td><td>" + x['name'] + "</td><td>" + x['salary'] + "</td><td>" + x['updatedsalary'] + "</td></tr>";
    }
    stringtr += "</table>";
    document.getElementById("tablecatch").innerHTML = stringtr;
}

function Person(id, first, salary) {
    this.id = id;
    this.firstName = first;
    this.salary = salary;


}

const myName = new Person("1", "John", 5000, "blue");
const myName2 = new Person("2", "Sally", "Rally", 48, "green");

document.getElementById("tableupdate2").innerHTML =
    "My id is" + myName.id + "My Name is " + myName.firstName + "My Salary is " + myName.salary + "";


// using this keyword 
var employee = {
    id: "1",
    name: "john",
    salary: "8000",
    salary: function () {
        this.salary = 8000;


    },
    information: function () {
        // document.writeln("Id: " + employee.id);
        // document.writeln("Name: " + employee.name);
        // document.writeln("Total Salary: " + this.salary);


document.getElementById("tableupdating").innerHTML =
"My id is" + this.id + "My Name is " + this.name + "My Salary is " + this.salary + "";


    }
}

employee.salary()
employee.information()







