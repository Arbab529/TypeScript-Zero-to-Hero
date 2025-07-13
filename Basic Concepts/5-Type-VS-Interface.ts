 // Interface

 interface Obj {
    name: string;
    age: number;
    gender?: boolean;
}
const obj: Obj = {
    name: "Khan",
    age: 25,
    gender: true
}

interface NewObj extends Obj{
    weight: number
    func: () => void
}

const obj3: NewObj = {
    name: "Khan",
    age: 25,
    gender: true,
    weight: 50,
    func: function(){
        console.log("Hello");
    }
}

// Type

type Obj2 = {
    name: string;
    age: number;
    gender?: boolean;
}

const obj2: Obj2 = {
    name: "Khan",
    age: 25,
    gender: true
}


// Type vs Interface

// Interface can be extended like a class, Cannot use interface in type
// Type cannot be extended, can use type in interface
