function ListController(UserService){

	let vm = this;

	vm.list = [];

	function init () {
		console.log('Activate ListController...');
    	UserService.getList().then((resp) => {
      	console.log('List -->', resp.data);
      	vm.list = resp.data;
    	});
    };

  	init();
}

ListController.$inject = ['UserService']; 
export { ListController }; 