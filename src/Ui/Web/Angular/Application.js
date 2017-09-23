const angular = require('angular')
require('angular-route')
require('./Module/tree')
const ContactTreeController = require('../../../Presentation/ContactTreeController')
const ContactTree = require('../../../Application/ContactTree')

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

module.exports = Application
