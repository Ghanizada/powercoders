//GLOBAL SCOPE

// VARIABLES-------------/
var aString = "this is a string";
var aNumber = 45; // this can be 22.3, -3 or 0
var aBoolean = true; // false
var anArray = []; // we can store object inside this
var anObject = {}; // we can store  sting or number of function
var aFunction = function() {

};

// ARRAYS [] -------------/
var myArray = [
  "String", 
  567,
   [1,2,3],
   {}
 ];
//calling the ARRAY-----
myArray [1]; //ths will show 567---- and 1 is the index
// PSUH STH IN ARRAY-----
myArray.push("dada");
// SIZE OF THE ARRAY-----
myArray.length;


// FUNCTIONS-------------/
function addTodo () {
  // whatever you want the function do
  //LOCAL SCOPE
  var bob = 3;
}
// the same function we can also wirte

var addTodoOther = function() {
   // whatever you want the function do
  //LOCAL SCOPE
  addTodo (); // you cant see bob here, because its not outside
  //console.log(bob);
}
// calling the function
addTodo();
addTodoOther ();


//Display name
function nameJohn() {
  console.log("john");
  //console.log(4+5); instede of repeting this we need to creat and argument so  and this is a hard code or fixed value
}
nameJohn();


function name ( theName, theAge) {
  console.log(theName, " ", theAge);
}
name("John", 34);
name("Shela", 29);
name("Maria", 30);

// OBJECT {}---this will help us to simplify complexe functions----------/
var car = {
  make: "Volvo",
  Model: "V7",
  color: "red",

  moreinfo: function(myArg) /*this called method*/ 
  {
    var html = ' ';
    html += '<a>Blas</a>';
    html += '<a>Blas</a>';
    return html;
  }
};
// to retrive the color, make or both or all
 console.log (car.color);
 console.log (car.make);
 console.log (car.color, car.make);
