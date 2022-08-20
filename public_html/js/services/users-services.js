/* global angular, api_url */

angular.module("app").service("usersService", [
	'$uhttp',
	function ($uhttp) {
		this.get_users = function () {
			return $uhttp({
				url: api_url + 'users/get_users'
			});
		};
	}
]);
