//tsc -w   - will run the script file in terminal 
//npm start - start the program

// console.log("Typescript file");
// console.log("Typescript is amazing");

// class User9 {
//     public email: string
//     name: string
//     private readonly city: string = "Mumbai"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }


class User9 {
    // public email: string
    // name: string
    // private _courseCount = 1;
    protected _courseCount = 1;
    readonly city: string = "Mumbai"
    constructor(
        public email:string, 
        public number:string
        ){
    }
    
    private deleteToken() {
        console.log("Token deleted");
    }

    get getAppleEmail(): string {
        return `apple${this.email}`;
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNumber) {
        if(courseNumber <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNumber;
    }
}

const animish = new User9("animish@abc.com", "Animish");

// animish.city = "Mumbai";
// console.log(animish.city);



class SubUser extends User9 {
    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 4;
    }
}