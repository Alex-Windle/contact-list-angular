function AddController($scope){
	console.log('Activate AddController!');

	// let vm = this;

	// What is this doing? 
	this.addUser = addUser;

	function addUser(user){
		console.log('Clicked Add button!');
	};
}

AddController.$inject = ['$scope']; 
export { AddController }; 