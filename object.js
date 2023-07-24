function createUser(user) {
    return {
        name: user.name,
        email: user.email,
        isActive: user.isActive
    };
}
var user1 = createUser({ name: "ABC", email: "abc@def.com", isActive: true });
var myUser = {
    _id: "123",
    name: "h",
    email: "h@h.com",
    isActive: false
};
myUser.name = "abc";
