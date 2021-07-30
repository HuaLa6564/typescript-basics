var _this = this;
//void 
function logToConsole() {
    console.log("Hello Worls ! ");
    return;
}
//array 
var fruits;
fruits = ['🍎', '🍓', '🍇', "🍉".toUpperCase(), (function () { return '🥝'; })(), null, undefined];
//other ways to declare arrays 
var food;
food = ['🍕', "🍔",];
//multiple var 
var genericArray;
genericArray = ['🍝', "🍆", 5, false, true, null, undefined];
//Tuple 
var coordinates;
coordinates = [12, 13, 14];
//other declaration
var genTuple;
genTuple = [12, 'yuni', false];
//object 
var user = {
    firstName: 'Farah',
    lastName: 'Mohammad',
    username: 'FarahMohammad',
    getUserName: function () { return _this.username; }
};
//Enum 
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek["MONDAY"] = "mon";
    DaysOfTheWeek["TUESDAY"] = "tues";
    DaysOfTheWeek["WEDNESDAY"] = "wed ";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
;
var dayToday;
dayToday = DaysOfTheWeek.MONDAY;
dayToday = DaysOfTheWeek.WEDNESDAY;
//any 
var authorisedUser = {
    firstName: 'Farah',
    lastName: 'Mohammad',
    username: 'FarahMohammad'
};
