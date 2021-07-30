//void 
function logToConsole(): void{
    console.log("Hello Worls ! ");
    return;
}

//array 
let fruits:string[];
fruits = ['🍎','🍓','🍇',"🍉".toUpperCase(), (()=>'🥝')(), null, undefined];
    //other ways to declare arrays 
let food:Array<string>;
food =['🍕',"🍔", ];
    //multiple var 
let genericArray:Array<string | number | boolean>;
genericArray = ['🍝',"🍆" , 0b101, false, true, null, undefined ];

//Tuple 
let coordinates : [number , number , number];
coordinates = [12, 13, 14];
    //other declaration
let genTuple:[number, string, boolean];
genTuple = [12 , 'yuni' , false];

//object 
let user = {
    firstName:'Farah',
    lastName:'Mohammad',
    username:'FarahMohammad',
    getUserName: (): string => this.username
};

//Enum 
enum DaysOfTheWeek{
    MONDAY = 'mon',
    TUESDAY = 'tues',
    WEDNESDAY = 'wed ',
};
let dayToday : DaysOfTheWeek;
dayToday = DaysOfTheWeek.MONDAY;
dayToday = DaysOfTheWeek.WEDNESDAY;

//any 
let authorisedUser : any = {
    firstName:'Farah',
    lastName:'Mohammad',
    username:'FarahMohammad',
};  


