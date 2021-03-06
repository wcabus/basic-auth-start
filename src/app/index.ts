import * as angular from 'angular';
import * as router from 'angular-ui-router';

import {AuthService} from './auth/auth.service';
import appComponent from './root';
import routeConfig from './routes.config';
//import routeRun from './routes.run';

export default angular.module('app', [
  <any>router,
  appComponent.name
])
  .service(AuthService.iid, AuthService)
  .config(routeConfig)

  ;
