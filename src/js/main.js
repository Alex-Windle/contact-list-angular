import angular from 'angular'; 
import 'angular-ui-router'; 

import { LayoutController } from './controllers/layout';
import { ListController } from './controllers/list';
import { SingleController }  from './controllers/single'; 
import { AddController } from './controllers/add'; 

angular
	.module('app', ['ui.router'])
	.config(routerConfig)
	.controller('LayoutController', LayoutController) 
	.controller('ListController', ListController)
	.controller('SingleController', SingleController)
	.controller('AddController', AddController); 