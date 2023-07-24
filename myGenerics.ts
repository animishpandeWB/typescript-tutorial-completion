const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number) : boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

const value2 = identityThree("Animish");

function identityFour<T>(val: T): T {
    return val;
}

const value1 = identityFour(false);
console.log(value1);
console.log(value2);


interface Bottle {
    brand: string,
    type: number,
    price: number
}

const bottle = identityFour<Bottle>({brand: "Milton", type: 5, price: 1500});
console.log(bottle.brand);


function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3;
    return products[myIndex];
}


//ARROW FUNCTION
const getMoreSearchProducts = <T,>(products: T[]): T => {
    const myIndex = 4;
    return products[myIndex];
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function getObject<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

const object = getObject(
    3, 
    {
    connection: "Db1",
    username: "animish",
    password: "1234"
    }
);
console.log(object);


interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string,
    price: number
}

class Sellable<T> {
    public cart: T[] = [];

    addToCart(product: T){
        this.cart.push(product);
    };
}