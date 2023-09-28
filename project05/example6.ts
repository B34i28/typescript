// Over ridden constructer

class Car6 {
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

class Mercedes1 extends Car6 {
    constructor(color:string ,location:string ,vin:string ,alloyWheels:boolean) {
        super(color,location,vin)
        this.alloyWheels = alloyWheels
    }
    alloyWheels:boolean
    adjustableSuspension = true
}

let myCar2 = new Mercedes1("Black","Karachi","1B",true)