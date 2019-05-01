//alert ("this just awesome");
//adding todo object
var todoList = {

  /**
   * MY ARRAY
   * -----------------------------*/

  //----------------------------------


  todos: [
    {
      textTodo: "First",
      completed: true
    },
    {
      textTodo: "Second",
      completed: false
    },
    {
      textTodo: "Third",
      completed: false
    },
    {
      textTodo: "Fourth",
      completed: true
    },

  ], // inside and object an array close with comma not with semi column.




  //    /**
  //    * Display todos
  //    * -----------------------------*/

  displayTodos: function () {
    //start loop
    for (let i = 0; i < this.todos.length; i++) {



      var myItem = this.todos[i];

      //-------SIMPLE VALUE OF CONDItion
      var x = '';
      if (myItem.completed) {
        x = 'x';
      }

      var showItem = '( ' + x + ' ) ' + myItem.textTodo;
      console.log("showItem:", showItem);
    }// end of loop
    console.log("-----------");
  },

  //    /**
  //    * mY TODOS LIST
  //    * -----------------------------*/
  addTodo: function (text) {
    this.todos.textTodo.push(text);
    this.displayTodos();
  },
  changeTodo: function (index, text) {
    this.todos[index].textTodo = text;
    this.displayTodos();
  },
  deleteTodo: function (index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  },

  toggleCompleted: function(index){
    let item = this.todos[index];
    item.completed = ! item.completed;
    this.displayTodos();
  }

};
todoList.displayTodos();
todoList.toggleCompleted(2);
todoList.toggleCompleted(0);

// todoList.changeTodo (2, "this my change");
// todoList.deleteTodo (1);
//todoList.displayTodos (); // INSTED OF CONSOLE LOG THIS WORKS 
// console.log (todoList.todos);
// console.log (todoList.todos[2].textTodo);
// console.log (todoList.todos[2].completed);
// console.log (todoList.todos[2].textTodo, todoList.todos[2].completed);
//------OR-----
//var myItem = todoList.todos[1];
//console.log (myItem.textTodo, myItem.completed);
//--------OR----------



/* declaring var with let */

//i = i + 1; //is same as i++
//i += 1;
//-----INITIALISATION------//CONDITION......//INCREMENTATION.../
// for(let i = 0; i<10; i++ ) {
//   //debugger;
//   console.log("value of i: ", i);
// }
// i++ 

// weather-----------------------******
// var weather = 'cloudy'; // rain, sun
//   if(weather == 'snow') {
//   console.log ("Take my ski");
//   }
//   else if(weather == 'rain'){
//     console.log ("Take Umbrella");
//   }
//   else if(weather == 'cloudy'){
//     console.log ("Stay at home");
//   }
//   else {
//     console.log ("Its Not raining");
//   } 


// //-------Booleans----------
// var n = 1;
// var bool = true;
// // in compare we check if n and bool are matching.

// // == test for equality
// // === test for equality and dada type.

// var compare = (n == bool); // if use () (n==bool) we can 2 == also but it will be less strict 
// // example ------
// // 3 == '3' // this is gonna be true
// // 3 === '3' // this will be false 
// console.log(compare);