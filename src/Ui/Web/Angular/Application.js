import angular from 'angular'
import ContactTreeController from '../../../Presentation/ContactTreeController'
import ContactTree from '../../../Application/ContactTree'

import 'angular-route';
import './Module/tree';

/**
 * @class Application
 */
class Application {
  /**
   * @return angular.Module
   */
  static bootstrap () {
    return angular.module('contactTree', [
      'tree',
      'ngRoute'
    ])
      .service('ContactTree', ContactTree)
      .controller('ContactTreeController', ['ContactTree', ContactTreeController])
  }
}

export default Application
