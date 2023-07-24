let score: number | string = 33;

score = "A+";

type User6 = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let animish: User6 | Admin = {
    username: "Animish", id: 1
}

function getDbId(id: number | string) {
    // console.log(`Db ID is: ${id}`);
    if(typeof id === "string") {
        id.toLowerCase();
    }
    if(typeof id === "number") {
        id + 2;
    }
}

getDbId(1);
getDbId("1");

const data: (number | string)[] = [1, 2, 3, "4"];

let pi:3.14 = 3.14;

let seatAllotment: "Aisle" | "Middle" | "Window" = "Middle";
