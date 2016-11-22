function AddController($state, UserService){
	console.log('Activate AddController');

	let vm = this;

	this.addUser = addUser;

	function addUser(user){
		UserService.addUser(user).then((resp) => {
      	$state.go('root.list');
    });

	};
}

AddController.$inject = ['$state', 'UserService']; 
export { AddController }; 