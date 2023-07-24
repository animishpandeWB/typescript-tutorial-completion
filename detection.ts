function detectType(val: number | string) {
    if(typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}


function provideId(id: string | null) {
    if(!id) {
        console.log("No ID found.");
        return;
    }

    return "Id: " + id.toLowerCase();
}


interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function AdminCheck(account: User | Admin) {
    if("isAdmin" in account) {
        return account.isAdmin;
    }
}

function checkDate(x: Date | string) {
    if(x instanceof Date) {
        console.log(x.toUTCString());
    }else {
        console.log(x.toLowerCase());
    }
}

type Fish = {swim: () => void};
type Bird = {fly: ()=> void};

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if(isFish(pet)) {
        pet;
        return "Fish Food";
    }else {
        pet; 
        return "Bird Food";
    }
}


interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    breadth: number
}

type Shape = Square | Circle | Rectangle;

function getTrueShape(shape: Shape) {
    if(shape.kind === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    if(shape.kind === "square")
        return shape.side * shape.side;
}

function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
            
        case "square":
            return shape.side * shape.side;
            
        case "rectangle":
            return shape.length * shape.breadth;

        default:
            const _defaultforshape: never = shape;
            return _defaultforshape;
    }
}