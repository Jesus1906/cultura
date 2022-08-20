/* global angular, page_title, base_url, Noty */
/*
 * Controlador login
 */
angular.module('app').controller("usersCtrl", [
	'$scope',
	'usersService',
	function ($scope, usersService) {
		$scope.new_user = "";

		$scope.get_users = function () {
			usersService.get_users().then(function (response) {
				$scope.users = response.users;
			});
		};

		$scope.get_users();
	}
]);
