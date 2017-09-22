const angular = require('angular')
const NodeController = require('../../../../Presentation/Tree/NodeController')

/**
 * @type {angular.Module}
 */
module.exports = angular.module('tree', [])
  .component('node', {
    templateUrl: '_node.html',
    controller: 'NodeController',
    controllerAs: 'node',
    bindings: {
      node: '<',
      inputPort: '<'
    }
  })
  .controller('NodeController', NodeController)
