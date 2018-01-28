angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $state, $timeout, $ionicPopup, $location) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    var username = $scope.loginData.username;
    var password = $scope.loginData.password;
    console.log('Doing login', $scope.loginData);
    
    if( username == 'admin' && password == 'admin') {
      $state.go('app.dashboard');
    } else {
      // alert('invalid Username/Password!');
      $scope.showPopup();
    }
  };

  $scope.showPopup = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Message',
      template: 'Invalid Username/Password!'
    });
    alertPopup.then(function(res) {
      console.log('Invalid login Credientials!');
    });
  };

  $scope.myProfile = function() {
    $state.go('app.edit_my_profile');
  }

})

.controller('dashboardCtrl', function($scope) {
  $scope.firstName = "Andrew";
  // $scope.lastName = "McGivery";
  console.log('First Name - ', $scope.firstName);
})


.controller('usersCtrl', function($scope, $http) {
  $http.get("http://matrixdevelopers.com/pro/testing_apis/select.php").then(function (response) {
      $scope.users = response.data.records;
      console.log(response.data.records);
  });

  // $http.get("http://thisisbig.ae/advanced/backend/web/customersapi").then(function (response) {
  // $http.get("http://thisisbig.ae/advanced/backend/web/customersapi").then(function (response) {
  //     $scope.users = response;
  //     console.log(response);
  // });
})

.controller('editProfileCtrl', function($scope, $stateParams) {
  
  $scope.userId = $stateParams.userId;
})
;
