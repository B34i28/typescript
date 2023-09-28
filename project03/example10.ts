let returnStringOrNumber : (() => string |number) | number

returnStringOrNumber = function ():number {return 7}
returnStringOrNumber = function (): string { return "Hello" }

returnStringOrNumber = 8

let aboutImran : (name:string) => number

aboutImran = (name:string) => {
    return 7
}