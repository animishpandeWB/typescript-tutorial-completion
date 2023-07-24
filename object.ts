type User = {
    name: string;
    email: string;
    isActive: boolean
}



function createUser(user: User): User {
    return {
        name: user.name,
        email: user.email,
        isActive: user.isActive
    };
}

const user1 = createUser({name: "ABC", email:"abc@def.com", isActive: true});


type User2 = {
    readonly _id: string
    name: string;
    email: string;
    isActive: boolean
    credCardDetails?: number
}

let myUser: User2 = {
    _id: "123",
    name: "h",
    email: "h@h.com",
    isActive: false
}

myUser.name = "abc";


type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}