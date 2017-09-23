const Application = require('./Ui/Web/Angular/Application')
/**
 * @type {angular.Module}
 */
const app = Application.bootstrap()

app.config(['$locationProvider', '$routeProvider',
  ($locationProvider, $routeProvider) => {
    $locationProvider.html5Mode(true)

    $routeProvider.when('/', {
      templateUrl: '_contactTree.html',
      controller: 'ContactTreeController',
      controllerAs: 'contacts'
    })

    $routeProvider.otherwise({
      redirectTo: '/'
    })
  }
])
