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

	function deleteUser(user){
		UserService.deleteSingle(user).then((resp)=>{
		// $state.go('root.list');
		});
		
	}; 

	// function updateUser(user){
	// 	console.log("clicked button");
	// 	//go to an edit page ( populated with old data )
	// 	$state.go('')

	// 	//click the submit button and then send PUT request
	// 	UserService.updateUser(user).then((resp)=>{

	// 	})
	// }; 
}

SingleController.$inject = ['$stateParams', 'UserService']; 
export { SingleController }; 

// $stateParams.id 
// I don't understand what this references 
// I thought $stateParams._id would reference my object id on the BE

// Please explain vm / this / user = {} ; 