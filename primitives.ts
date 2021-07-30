//Boolean 
let authorized: boolean;
authorized = false;
authorized = true;
authorized = (()=> false )();
authorized = (()=> true )();
authorized = null ;
authorized = undefined;

//Number 
let myNumber:number;
myNumber=10;
myNumber=-10;
myNumber=10.10;
myNumber=-10.10;
myNumber=0b1010;
myNumber=0x369;
myNumber=0o122;
myNumber=(() => 0o123)();
myNumber=null;
myNumber=undefined;

//String 
let username:String;
username='yuni';
username=`yuni`;
username="yuni";
username=`yuni`.toUpperCase();
username=(()=> `yuni`)();
username=null;
username=undefined;

//Null 
let data:null;
data=null;
data=undefined;
data=(()=>null)();
data = (() => undefined)();
// userData = false;






