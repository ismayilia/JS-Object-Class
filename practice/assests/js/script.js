"use strict";

// let stu1  = {
//     name: "Samir",
//     surname: "Qehramanov",
//     age: 24
// }

// let stu2 = new Object();

// stu2.name = "test";

// console.log(stu2.name);


// let stu1  = {
//     name: "Samir",
//     surname: "Qehramanov",
//     age: 24
// }


// //kohne object yaratmaq, func sheklinde..
// function Test(a,b){
//     this.name = a;
//     this.surname = b;
// }


// let test1 = new Test("xxx", "yyy");

// let test2 = new Test("xxx", "yyy");

// test1.age = 50;



// console.log(test1.name);
// console.log(test2.name);






// let stu1 = {
//     id: 1,
//     name: "Huseyn",
//     surname: "Huseynov",
//     age: 20,
//     address: "Ecemi"
// }

// let stu2 = {
//     id: 2,
//     name: "Aydemir",
//     surname: "Resulov",
//     age: 19,
//     address: "Turkiye"
// }

// let stu3 = {
//     id: 3,
//     name: "Idmanci",
//     surname: "Axundov",
//     age: 20,
//     address: "Xetai"
// }

// let stu4 = {
//     id: 4,
//     name: "Samir",
//     surname: "Qehramanov",
//     age: 24,
//     address: "Californiya"
// }

// let group = {
//     name: "P139",
//     capacity: 6,
//     students: [],
//     addStudent: function(student){
//         this.students.push(student);
//     },
//     getAllStudents: function(){
//         return this.students;
//     }
// }


// let group = {
//     name: "P139",
//     capacity: 6,
//     students: [],
//     addStudent: function(student){
//         if (student == undefined) {
//             alert("Parametr is empty");
//             return;
//         };
//         if (this.students.length == this.capacity) {
//             alert("Group already filled")
//         }
//         this.students.push(student);
//     },
    // getAllStudents: function(){
    //     return this.students;
    // },
    // getStudentById: function(id){
    //     let existStudent = this.students.find(m=>m.id ==id);
    //     if (existStudent==undefined) {
    //         alert("Student not found");
    //         return;
    //     }
    //     return existStudent;
    // },

    // updateStudent: function(student){
        // let existStudent = this.students.find(m=>m.id ==id);

        // if (existStudent==undefined) {
        //     alert("Student not found");
        //     return;
        // }

//         let existStudent = this.getStudentById(student.id);

//         existStudent.name = student.name == undefined ? existStudent.name : student.name;
//         existStudent.surname = student.surname == undefined ? existStudent.surname : student.surname;
//         existStudent.age = student.age == undefined ? existStudent.age : student.age;
//         existStudent.address = student.address == undefined ? existStudent.address : student.address;
//     }

// }

// group.addStudent(stu1);
// group.addStudent(stu2);
// group.addStudent(stu3);
// group.addStudent(stu4);

// console.log(group.getStudentById(2));

// let result = group.getAllStudents();

// let studentsBefore = group.getAllStudents();
// console.log(studentsBefore);

// function showBeforeUpdate(){
//     let studentsBefore = group.getAllStudents();

//     for (const item of studentsBefore) {
//         let li  = document.createElement("li")
//         li.className = "list-group-item";
//         let str = `${item.name} - ${item.surname} - ${item.age} - ${item.address}`;
//         li.innerText = str;
//         document.querySelector(".ul1").append(li);

//     }
// }

// showBeforeUpdate();



// function showAfterUpdate(){

//     let studentsAfter = group.getAllStudents();

//     for (const item of studentsAfter) {
//         let li  = document.createElement("li")
//         li.className = "list-group-item";
//         let str = `${item.name} - ${item.surname} - ${item.age} - ${item.address}`;
//         li.innerText = str;
//         document.querySelector(".ul2").append(li);

//     }
// }

// showAfterUpdate();



// console.log("-------------------");

// let studentsAfter = group.getAllStudents();

// console.log(studentsBefore);



// console.log(result);

// for (const item of result) {

//     let li = document.createElement("li");

//     li.className = "list-group-item"

//     let str = `${item.name} - ${item.surname} - ${item.age} - ${item.address}`;

//     li.innerText = str;

//     document.querySelector("ul").append(li);
// }




class Person{
    constructor(name,surname){
        this.name=name;
        this.surname = surname;
        // this.age = 23;
        // this.getFullName = function(){
        //     return this.name + " " + this.surname;
        // }

    }
}



let person1 = new Person("Surac", "Ismayilov");
let person2 = new Person("Xeyyam", "Isgenderov");

// person1.age = 40;

// console.log(person1.name + "-" + person1.surname + "-" + person1.age);
// console.log(person2.name + "-" + person2.surname + "-" + person2.age);
// console.log(person1.getFullName());

Person.prototype.getFullName = function(){
    return this.name + " " + this.surname + this.age;
}

Person.prototype.age = 100;

// console.log(person1.getFullName());
// console.log(person1.age);


// let name = "Surac";
// let surname = "Ismayilov";
//  String.prototype.test = "Salamlar";

//  String.prototype.hasDigitForStr = function(str){
//     return this.includes(str);
//  }

//  console.log(name.test);

//  console.log(name.hasDigitForStr("d"));
//  console.log(surname.hasDigitForStr("y"));