// Rest array

let nicknamesof = ["Imran","Alexander","Alex"]
let prefrence = [1,2,3]

function logName (greeting:string , ...nickNames : (string|number)[]){
    for (const nickname of nickNames){
        console.log(`${greeting} ${nickname}`);
        
    }
}

// logName("Hello","Imran","Alexander","Alex")
logName("Hello", ...nicknamesof)
logName("Hello", ...prefrence)
