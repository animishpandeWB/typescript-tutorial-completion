var score = 33;
score = "A+";
var animish = {
    username: "Animish", id: 1
};
function getDbId(id) {
    // console.log(`Db ID is: ${id}`);
    if (typeof id === "string") {
        id.toLowerCase();
    }
    if (typeof id === "number") {
        id + 2;
    }
}
getDbId(1);
getDbId("1");
var data = [1, 2, 3, "4"];
var pi = 3.14;
var seatAllotment = "Middle";
