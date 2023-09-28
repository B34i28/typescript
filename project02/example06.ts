// nested object type

type Author = {
    firstName:string;
    lastName:string;
}

// if we want to make an property optional use ?

type Book = {
    author: Author;
    name:string
    pages?:number;
}

const book:Book = {
    author :{
        firstName:"Nicolo",
        lastName:"Machiyavelle"
    },
    name:"The Prince"
}