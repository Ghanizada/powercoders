var todoList = {


	todos: [
		{
			todoText: "Item 1",
			completed: true
		},
		{
			todoText: "Item 2",
			completed: false
		},
		{
			todoText: "Item 3",
			completed: false
		}
	],


	displayTodos: function () {

		if (this.todos.length === 0) {
			console.log('Your todo list is empty!');
		}
		else {
			console.log('My Todos:');
			for (var i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed === true) {
					console.log('(x)', this.todos[i].todoText);
				}
				else {
					console.log('( )', this.todos[i].todoText);
				}
			}
		}

	},


	addTodo: function (todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},


	changeTodo: function (position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},


	deleteTodo: function (position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	},


	toggleCompleted: function (position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	},


	toggleAll: function () {
		var totalTodos = this.todos.length;
		var completedTodos = 0;
		// Get the number of completed todos
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}
		// If everything is true, make everything false.
		if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
			// Otherwise make everthing true.
		} else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
		this.displayTodos();
	}


};
	var displayTodoBtn = document.getElementById("displayTodoBtn");
	//console.log (displayTodoBtn);
	displayTodoBtn.addEventListener('click', function() {
		todoList.displayTodos();
	});
	var toggleAllBtn = document.getElementById("toggleAllBtn");
	toggleAllBtn.addEventListener('click', function(){
		todoList.toggleAll();
	});
	document.addEventListener('keydown', function(){
		todoList.toggleAll();
	});


// var displayTodoButton = document.getElementById('displayTodoButton');
// var toggleAllButton = document.getElementById('toggleAllButton');

// displayTodoButton.addEventListener('click', function () {
// 	todoList.displayTodos();
// });

// toggleAllButton.addEventListener('click', function () {
// 	todoList.toggleAll();
// });
