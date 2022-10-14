import Application from './src/Ui/Web/Angular/Application'

import './src/app.scss'

/**
 * @type {angular.Module}
 */
const app = Application.bootstrap()

app.config(['$locationProvider', '$routeProvider',
  ($locationProvider, $routeProvider) => {
    $locationProvider.html5Mode(true)

    $routeProvider.when('/', {
      templateUrl: '/src/Ui/Web/Angular/Public/_contactTree.html',
      controller: 'ContactTreeController',
      controllerAs: 'contacts'
    })

    $routeProvider.otherwise({
      redirectTo: '/'
    })
  }
])
