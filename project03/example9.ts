const nickNames = [ "Alexander", "Danny", "Alexander the great" ]

function allNicknames(callback: (index:number)=>string){
    for ( let i = 0 ; i<nickNames.length ; i++ ){
        console.log(callback(i));
        
    }
}

function getNameAt(index:number){
    return `${nickNames[index]}`
}

allNicknames(getNameAt)