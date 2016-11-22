import { SERVER } from '../server'; 

function UserService($http, $stateParams){

	this.addUser = function(user){
		return $http.post(SERVER, user);
	};

	this.getList = function(){
		return $http.get(SERVER);
	};

	this.getSingle = function(userId){
		return $http.get(SERVER + "/" + userId); 
	};

	this.deleteSingle = function(userId){
		return $http.delete(SERVER + "/" + userId);
	}; 

}

UserService.$inject = ['$http', '$stateParams']; 
export { UserService }; 