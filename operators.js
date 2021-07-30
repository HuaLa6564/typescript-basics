var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
//array 
var fruits = ['🍓', '🍏'];
var food = ['🍕', '🍟'];
var edibles = __spreadArray(__spreadArray([], fruits), food);
console.log("Got the edibles as: ", edibles);
//Object 
var user = {
    firstName: 'Ayu',
    lastName: 'Babu',
    username: 'AyuBabu'
};
var userDetails = __assign(__assign({}, user), { address: 'PT260 Kg Lanchang', email: 'aernadia@gmail.com' });
console.log('Got the user as :', userDetails);
//Function 
function add(x, y, z) {
    return x + y + z;
}
var numbers = [1, 2, 3];
// console.log('Got the sum of all the numbers as : ', add(numbers[0], numbers[1], numbers[2]) );
//using spread ..
console.log("got the sum of all numbers as :", add.apply(void 0, numbers));
//backticks 
//with backticks ``
console.log("The use with name " + user.firstName + " \n    has an address " + userDetails.address + " \n    and an email of " + userDetails.email);
//without backticks ``
console.log("The user with name : " +
    user.firstName +
    " has an address of : " +
    userDetails.address +
    " and an email of : " +
    userDetails.email);
console.log("Got the edibles as : " + edibles + " ");
console.log("Got the userDetails as : " + userDetails);
//Destructure 
var fName = user.firstName, lName = user.lastName;
console.log(fName);
console.log(lName);
