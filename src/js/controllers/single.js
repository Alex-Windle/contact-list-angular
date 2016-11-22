function SingleController($stateParams, UserService){
	console.log('Activate SingleController!');
	
	let vm = this;

	vm.user = {};

	this.deleteUser = deleteUser;  

	function init(){
		UserService.getSingle($stateParams.id).then((resp)=>{ 
			vm.user = resp.data;  
		}); 
	}; 

	init();

	function deleteUser(banana){
		console.log("clicked button");
		UserService.deleteSingle(banana).then((resp)=>{
			console.log("deleted contact");
		});
	}; 
}

SingleController.$inject = ['$stateParams', 'UserService']; 
export { SingleController }; 

// $stateParams.id 
// I don't understand what this references 
// I thought $stateParams._id would reference my object id on the BE

// Please explain vm / this / user = {} ; 