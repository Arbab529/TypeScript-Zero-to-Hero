function sum(num1:number,num2:number):number{
    return num1+num2;
}

//  Type aliases

type sumType = (num1:number,num2:number) => number;
 const sum2:sumType = (num1,num2) => {
    return num1+num2;
}

//  Type Guard

function printId(a:number,b:number,c?:number):number{
    if(typeof c === "undefined"){
        return a+b;
    }else{
        return a+b+c;
    }
}

// Rest Operator

function printId2(...rest:number[]):number{
    return rest[0]; // output: 1
}

printId2(1,2,3,4,5,6,7,8,9,10);