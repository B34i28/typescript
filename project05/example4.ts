class Car4 {
    constructor(color:string ,location:string ,vin:string){
        this.color = color
        this.location = location
        this.vin = vin
    };
    readonly vin :string;
    color :string;
    location :string;
    owner? :string;
    power(state:boolean){
        if(state === true){
            console.log("Starting Engine.");
        }else {
            console.log("Shutting down engine.");
        }
    }
}

let myCar4 = new Car4("Black","Islamabad","1");
let someoneCar1 = new Car4("Gray","Karachi","2")

// myCar.power(true)
