
app.controller("PinListCtrl", function($rootScope, $location, $scope, PinFactory) {

	$scope.pins = [];
	let boardid = "global";
	let getPins = (boardId) => {
		PinFactory.getPinList(boardid).then((pinz) => {
			$scope.pins = pinz;
		}).catch((error) => {
			console.log("getPinList error", error);
		});
	};
	getPins();

	$scope.viewPin = (id) => {
		$location.url(`/pin/view/${id}`)
	}

});