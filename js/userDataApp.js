var app = angular.module('loginApp', []);
app.controller('userDataForm', function($scope,$http) {
    console.log('need to use cors plugin to get response from api');
	$scope.userData = {};
	  $scope.hobbies=['Reading','Cycling','Swimming','Tennis','Cricket','Football','Painting'];
      $scope.selectedHobbies=[];
      $scope.showDetails = false;
      
	  $scope.toggleSelection = function toggleSelection(hobby) {
        var idx = $scope.selectedHobbies.indexOf(hobby);
        if (idx > -1) {
          $scope.selectedHobbies.splice(idx, 1);
         }
         else {
           $scope.selectedHobbies.push(hobby);
         }
      };
	  
	  function fetchCountries() {
		$http.get("http://country.io/names.json")
    .then(function(response) {
        $scope.countries = response.data;
    });
	  }
	  
	  fetchCountries();
	  
	 $scope.submitForm =function(){
		 console.log($scope.userData);
		 $scope.showDetails = true;
		 
	 } 
	  $scope.clear =function(){
		 $scope.userData = {};
		 $scope.selectedHobbies =[];
		 $scope.showDetails = false;
		 
	 }
	 
	 
});