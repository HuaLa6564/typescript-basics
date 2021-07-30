//array 
let fruits: Array<string> = ['🍓', '🍏'];
let food: string[] = ['🍕','🍟'];
let edibles: Array<string> = [...fruits, ...food];
console.log("Got the edibles as: ", edibles);


//Object 
let user = {
    firstName: 'Ayu',
    lastName: 'Babu',
    username: 'AyuBabu',
};

let userDetails = {
    ...user, 
    address: 'PT260 Kg Lanchang',
    email: 'aernadia@gmail.com',
};

console.log('Got the user as :', userDetails);


//Function 
function add(x?:number, y?:number , z?:number){
    return x + y + z;
}
let numbers: Array<number> = [1,2,3];
    // console.log('Got the sum of all the numbers as : ', add(numbers[0], numbers[1], numbers[2]) );
    //using spread ..
console.log("got the sum of all numbers as :" , add( ... numbers));


//backticks 
    //with backticks ``
console.log(
    `The use with name ${user.firstName} 
    has an address ${userDetails.address} 
    and an email of ${userDetails.email}`
    );
    //without backticks ``
console.log(
    "The user with name : " + 
    user.firstName + 
    " has an address of : " + 
    userDetails.address + 
    " and an email of : " + 
    userDetails.email
    );
    
console.log(`Got the edibles as : ${edibles} `);
console.log(`Got the userDetails as : ${userDetails}`);


//Destructure 
let { firstName :fName , lastName: lName } = user;
console.log(fName);
console.log(lName);