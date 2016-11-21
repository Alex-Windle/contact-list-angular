function AddController($state, UserService){
	console.log('Activate AddController');

	let vm = this;

	this.addUser = addUser;

	function addUser(user){
		console.log('Clicked Add button!');
		UserService.addUser(user).then((resp) => {
      	console.log('response', resp);
    });

	};
}

AddController.$inject = ['$state', 'UserService']; 
export { AddController }; 