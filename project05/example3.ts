class Car3 {
    constructor(color:string ,location:string){
        this.color = color
        this.location = location
    };
    color :string;
    location :string
    power(state:boolean){
        if(state === true){
            console.log("Starting Engine.");
        }else {
            console.log("Shutting down engine.");
        }
    }
}

let myCar3 = new Car3("Black","Islamabad");
let someoneCar = new Car3("Gray","Karachi")

// myCar.power(true)
console.log(myCar3.color);
console.log(myCar3.location);

console.log(someoneCar.color);
console.log(someoneCar.location);


