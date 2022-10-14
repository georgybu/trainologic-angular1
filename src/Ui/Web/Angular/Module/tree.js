import angular from 'angular'
import NodeController from '../../../../Presentation/Tree/NodeController'

/**
 * @type {angular.Module}
 */
export default angular.module('tree', [])
  .component('node', {
    templateUrl: '/src/Ui/Web/Angular/Public/_node.html',
    controller: 'NodeController',
    controllerAs: 'node',
    bindings: {
      node: '<',
      inputPort: '<'
    }
  })
  .controller('NodeController', NodeController)
