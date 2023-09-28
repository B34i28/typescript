export{};


type ImranInPakistan = { name:string; age:number; type:"Pakistan" }
type ImranOverseas = { name:string; age:number; type:"Overseas"; nickName:string }

type Imran = ImranInPakistan | ImranOverseas

const imran: Imran =
Math.random() > 0.5 ? { name:"imran", age:30 , type:"Pakistan" }
                    : { name:"imran", age:21, type:"Overseas", nickName:"Alexander" }


if (imran.type === "Pakistan" ){
    console.log(`He is in ${imran.type}`);
    
}else{
    console.log(`He is ${imran.type} call him ${imran.nickName}`);
    
}

