function routerConfig($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('root', {
			abstract: true,
			templateUrl: 'templates/layout.tpl.html'
		})
		.state('root.list', {
			url: '/list',
			templateUrl: 'templates/list.tpl.html',
			controller: 'ListController as list'
		})
		.state('root.single', {
			url: '/list/:id',
			templateUrl: 'templates/single.tpl.html',
			controller: 'SingleController as single'
		})
		.state('root.add', {
			url: '/add',
			templateUrl: 'templates/add.tpl.html',
			controller: 'AddController as add'
		})
	
	$urlRouterProvider.otherwise('/list')

}; 

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider']; 
export { routerConfig }; 