console.log("services==> angular without this throws a injector module error");
angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http', function($http) {
		return {
			get : function() {
				console.log("just a get function of the angular service");
	     	//with out return statement js explicitly returns the undefined
				return $http.get('/api/todos');
			},
			create : function(todoData) {
				console.log("create function from service");
				return $http.post('/api/todos', todoData);
			},
			delete : function(id) {
				console.log("just an delete service ");
				return $http.delete('/api/todos/' + id);
			}
		}
	}]);