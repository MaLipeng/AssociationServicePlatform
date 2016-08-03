angular.module('starter.controllers',  ['ionic'])

.controller('DashCtrl', function($scope, Groups) {
  $scope.groups = Groups.all();
  $scope.remove = function(group) {
    Groups.remove(group);
  };	
})
.controller('NewsCtrl', function($scope, News) {
  $scope.news = News.all();
  $scope.remove = function(n) {
    News.remove(n);
  };	
})
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('indexCtrl', function ($scope, $ionicActionSheet, $timeout) {

	$scope.add = function () {

		var hideSheet = $ionicActionSheet.show({
				buttons : [ { text: '添加协会' },
							{ text: '添加会员' }
				],
				titleText : '添加',
				buttonClicked : function (index) {
					switch(index){
						case 0:
						break;
						case 1:
						break;
						default:
						break;
					}
					return true;
				}
			});
		$timeout(function () {
			hideSheet();
		}, 5000);

	};
});