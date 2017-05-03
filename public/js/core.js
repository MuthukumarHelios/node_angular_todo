console.log("core.js==> inject for todo service and controller");
//scotchTodo angular app--> todoController , service --> todoService
//main application  
angular.module('scotchTodo', ['todoController', 'todoService']);
