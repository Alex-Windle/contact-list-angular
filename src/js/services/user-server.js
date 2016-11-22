import { SERVER } from '../server'; 

function UserService($http, $stateParams){

	this.addUser = function(user){
		return $http.post(SERVER, user);
	};

	this.getList = function(){
		return $http.get(SERVER);
	};

	this.getSingle = function(userid){
		console.log('Activate Service: getSingle!');
		return $http.get(SERVER + "/" + userid); 
	}; 

}

UserService.$inject = ['$http', '$stateParams']; 
export { UserService }; 