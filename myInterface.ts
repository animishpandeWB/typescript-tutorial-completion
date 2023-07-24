interface User8 {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponName: string, value: number): number
}

interface User8 {
    githubId: number
}

const abc: User8 = {
    dbId: 1133,
    email: "a@a.com",
    userId: 101,
    startTrail: () => {
        return "Trail started."
    },
    getCoupon: (name: "Animish", value: 1) => {
        return value;
    },
    githubId: 1102
}

abc.email = "n@n.com";


interface Admin2 extends User8 {
    role: "admin" | "ta" | "learner"
}

const def: Admin2 = {
    dbId: 1234,
    email: "a@a.com",
    userId: 101,
    startTrail: () => {
        return "Trail started."
    },
    getCoupon: (name: "Animish", value: 1) => {
        return value;
    },
    githubId: 1102,
    role: "admin"
}