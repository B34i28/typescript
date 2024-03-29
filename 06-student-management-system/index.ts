#! /usr/bin/env node
class School {
    name : string ;
    students : Student[]=[]
    teachers : Teacher[]=[]

    addStudent(stdObj: Student){
        this.students.push(stdObj)
    }
    addTeacher(teObj : Teacher) {
        this.teachers.push(teObj)
    }
    constructor (name:string){
        this.name = name;
    }
}

class Student {
    name : string ;
    age : number ;
    schoolName : string;

    constructor (name:string,age:number,schoolName:string){
        this.name = name
        this.age = age
        this.schoolName = schoolName
    }
}

class Teacher extends Student{}

// School 
let school1 = new School("Happy Palace")
let school2 = new School("Karachi Academy")
let school3 = new School("Gulzar School ")

// Student

let s1 = new Student ("Ahsen",13,school1.name)
let s2 = new Student ("Rizwan",10,school2.name)
let s3 = new Student ("Ali",11,school3.name)

// Teacher

let t1 = new Teacher ("Uzma",35,school1.name)
let t2 = new Teacher ("Amna",40,school2.name)
let t3 = new Teacher ("Kanwal",42,school3.name)

school1.addStudent(s1)
school2.addStudent(s2)
school3.addStudent(s3)

school1.addTeacher(t1)
school2.addTeacher(t2)
school3.addTeacher(t3)

console.log(t1);
console.log(t2);
console.log(t3);

console.log(school1);
console.log(school2);
console.log(school3);


