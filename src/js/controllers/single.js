function SingleController($stateParams, UserService){
	console.log('Activate SingleController!');
	
	let vm = this;

	vm.user = {}; 

	function init(){
		UserService.getSingle($stateParams.id).then((resp)=>{ 
			vm.user = resp.data;  
		}); 
	}; 

	init();
}

SingleController.$inject = ['$stateParams', 'UserService']; 
export { SingleController }; 

// $stateParams.id 
// I don't understand what this references 
// I thought $stateParams._id would reference my object id on the BE