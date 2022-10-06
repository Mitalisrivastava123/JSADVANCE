let newarr = [
    {
        id: "1",
        name: "john",
        salary: "10000",
        updatedsal:"10000"
        

    },
    {
        id: "2",
        name: "mark",
        salary: "10000",
        updatedsal:"10000"

    },
    {
        id: "3",
        name: "yash",
        salary: "10000",
        updatedsal:"10000"

    },
];

function adding() {
    var id = document.getElementById("id").value;
    console.log(id);
    var name = document.getElementById("name").value;
    console.log(name);
    var salary = document.getElementById("salary").value;
    console.log(salary);
    alert(salary);

    let message = document.getElementById("messagealert");
    message.innerHTML = "";


    try {
        if (id == "" || name == "" || salary == "") throw "All fields must be filled";
    }
    catch (err) {
        message.innerHTML = "" + err;
    }




    var obj = { id: id, name: name, salary: salary };
    console.log(obj);
    newarr.push(obj);
    var str = "<table><tr><th>Id</th><th>Name</th><th>Total Salary</th><th>Action</th></tr>";


    for (let x of newarr) {

        str += "<tr><td>" + x['id'] + "</td><td>" + x['name'] + "</td><td>" + x['salary'] + "</td><td><input type='submit' onclick='del()' value='delete' class=del></td></tr>";


    }

    str += "</table>";
    document.getElementById("table").innerHTML = str;
}



function del() {
    newarr.forEach(e => {
        var td = event.target.parentNode;
        var tr = td.parentNode;
        tr.parentNode.removeChild(tr);
    });

}
del();
function displaydata() {
// var id = document.getElementById("id").value;
// console.log(id);
// var name = document.getElementById("name").value;
// console.log(name);
// var salary = document.getElementById("salary").value;
// console.log(salary);


// var objmy1 = { id: id, name: name, salary: salary };
// console.log(objmy1);
var strnew1 = "<table><tr><th>Id</th><th>Name</th><th>Total Salary</th><th> 15% of  Salary</tr>";

for (let y2 of newarr) {

    var m2 = (parseInt(y2.salary)*15)/100;

    console.log(m2);
    strnew1 += "<tr><td>" + y2['id'] + "</td><td>" + y2['name'] + "</td><td>"+y2['salary']+"</td><td>" + m2 + "</td></tr>";

}
strnew1 += "</table>";
document.getElementById("tablesal").innerHTML = strnew1;
}
function displaydata1() {
    "use strict";
    class Employee {
        constructor(id, name, salary) {
            this.id = id;
            this.name = name;
            this.salary = salary;
        }
    }
    var str1 = "<table><tr><th>Id</th><th>Name</th><th>Total Salary</th></tr>";

    for (let y of newarr) {

        str1 += "<tr><td>" + y['id'] + "</td><td>" + y['name'] + "</td><td>" + y['salary'] + "</td></tr>";
    }

    const myEmp = new Employee("1", "John", "8000");
    document.getElementById("arrowmessage1").innerHTML = myEmp.id + " " + myEmp.name + " " + myEmp.salary;

    str1 += "</table>";
    document.getElementById("table2").innerHTML = str1;
}
function updatedata() {

    var id = document.getElementById("id").value;
    console.log(id);
    var name = document.getElementById("name").value;
    console.log(name);
    var salary = document.getElementById("salary").value;
    console.log(salary);


    var objmy = { id: id, name: name, salary: salary };
    console.log(objmy);
    var strone = "<table><tr><th>Id</th><th>Name</th><th>Total Salary</th></tr>";

    for (let y1 of newarr) {

        var m1 = y1.salary = 30000;

        console.log(m1);
        strone += "<tr><td>" + y1['id'] + "</td><td>" + y1['name'] + "</td><td>" + y1['salary'] + "</td></tr>";

    }
  
    strone += "</table>";
    document.getElementById("tableupdate").innerHTML = strone;

}



function debugging() {

    var id = document.getElementById("id").value;
    console.log(id);
    var name = document.getElementById("name").value;
    console.log(name);
    var salary = document.getElementById("salary").value;
    console.log(salary);


    var objmy = { id: id, name: name, salary: salary };
    console.log(objmy);
    newarr.push(objmy);


    var strone1 = "<table><tr><th>Id</th><th>Name</th><th>Total Salary</th></tr>";


    for (let y1 of newarr) {


        if (salary < 0) {


            console.log("salary is not less then zero");
            strone1 += "<tr><td>" + y1['id'] + "</td><td>" + y1['name'] + "</td><td>" + y1['salary'] + "</td></tr>";
        }
        debugger;


    }

    strone1 += "</table>";
    document.getElementById("tableupdate3").innerHTML = strone1;

}










