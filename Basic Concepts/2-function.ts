function sum(num1:number,num2:number):number{
    return num1+num2;
}

//  Type aliases
type sumType = (num1:number,num2:number) => number;
 const sum2:sumType = (num1,num2) => {
    return num1+num2;
}