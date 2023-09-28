class Car5 {
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

class Mercedes extends Car5 {
    alloyWheels = true;
    adjustableSuspension = true
}

let myCar1 = new Mercedes("Black","Karachi","1B")