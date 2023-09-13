"use strict";

let stu1 = {
    id: 1,
    name: "Huseyn",
    surname: "Huseynov",
    age: 20,
    address: "Ecemi"
}

let stu2 = {
    id: 2,
    name: "Aydemir",
    surname: "Resulov",
    age: 19,
    address: "Turkiye"
}

let stu3 = {
    id: 3,
    name: "Idmanci",
    surname: "Axundov",
    age: 20,
    address: "Xetai"
}

let stu4 = {
    id: 4,
    name: "Samir",
    surname: "Qehramanov",
    age: 24,
    address: "Californiya"
}


let group = {
    name: "P139",
    capacity: 6,
    students: [],
    addStudent: function(student){
        if (student == undefined) {
            alert("Parametr is empty");
            return;
        };
        if (this.students.length == this.capacity) {
            alert("Group already filled")
        }
        this.students.push(student);
    },
    getAllStudents: function(){
        return this.students;
    },
    getStudentById: function(id){
        let existStudent = this.students.find(m=>m.id ==id);
        if (existStudent==undefined) {
            alert("Student not found");
            return;
        }
        return existStudent; 
    },

    updateStudent: function(student){
        // let existStudent = this.students.find(m=>m.id ==id);

        // if (existStudent==undefined) {
        //     alert("Student not found");
        //     return;
        // }

        let existStudent = this.getStudentById(student.id);

        existStudent.name = student.name == undefined ? existStudent.name : student.name;
        existStudent.surname = student.surname == undefined ? existStudent.surname : student.surname;
        existStudent.age = student.age == undefined ? existStudent.age : student.age;
        existStudent.address = student.address == undefined ? existStudent.address : student.address;
    },

    deleteStudent: function(id){
        let deleteStudent = this.students.findIndex(m => m.id == id);

    if (deleteStudent != -1) {
      this.students.splice(deleteStudent, 1);
      
    } else {
      console.log(`Student  id not found!`);
    }
        
    },

    // searchStudent: function(str){
    //     let result = this.students;
    //     for (const item of result) {
    //         if (item.name.toLowerCase().includes(str) || item.surname.toLowerCase().includes(str)) {
    //             console.log(item.name + " " + item.surname);
    //         }
    //     }
        
    // }

    searchStudent: function(str){
        let result = this.students.filter(m=> m.name.toLowerCase().includes(str) || m.surname.toLowerCase().includes(str));
        for (const item of result) {
            console.log(item.name + " " +item.surname);
        }
        
    }

}


group.addStudent(stu1);
group.addStudent(stu2);
group.addStudent(stu3);
group.addStudent(stu4);

console.log(group.getStudentById(2));

// let result = group.getAllStudents();

// let studentsBefore = group.getAllStudents();
// // console.log(studentsBefore);

// let studentsAfter = group.getAllStudents();

// console.log(studentsBefore);


// 1)Delete

// group.deleteStudent(3);

// console.log(group.getAllStudents());

// 2)Search

group.searchStudent("a")



