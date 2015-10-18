var bsdApp = angular.module('bsdApp', ['ngRoute']);

// configure our routes
bsdApp.config(function($routeProvider) {
    $routeProvider

        // Home-page Route
        .when('/', {
            templateUrl : 'views/welcome.html',
            controller  : 'mainCtrl'
        })

        // Dream-Collective Route
        .when('/dream-collective', {
            templateUrl : 'views/dream-collective.html',
            controller  : 'dreamCtrl'
        })
});

// Factory to Dynamically set the page title
bsdApp.factory('Page', function(){
    
    return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle; }
    };
}); 

// create the controller and inject Angular's $scope
bsdApp.controller('mainCtrl', function($scope, Page) {
   
    // Set title to:    
    Page.setTitle('BSD | Home');
});

bsdApp.controller('dreamCtrl', function($scope, Page) {
    
    // Set title to:    
    Page.setTitle('Dream-Collective');
});
