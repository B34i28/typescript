type imranType = {
    name: {fName:string,lName:string},
    age: number,
    teaching: boolean,
    dob: Date,
    cirtification: string[]
}

let imran1:imranType;

imran1 = {
    name : {fName:"imran",lName:"Cheema"},
    age : 30,
    teaching : true,
    dob : new Date(),
    cirtification : ["AWS","Rust","javascript"]
}

export {}