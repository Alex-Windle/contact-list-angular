import { SERVER } from '../server'; 

function UserService($http){

	this.addUser = function(user){
		return $http.post(SERVER, user);
	};

	this.getList = function(){
		return $http.get(SERVER);
	};

}

UserService.$inject = ['$http']; 
export { UserService }; 