import { SERVER } from '../server'; 

function UserService($http){

	this.addUser = function(user){
		return $http.post(SERVER, user);
	};

}

UserService.$inject = ['$http']; 
export { UserService }; 