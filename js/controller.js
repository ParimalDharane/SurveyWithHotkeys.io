app.controller('mainCtrl',
    function mainCtrl($scope) {

        $scope.currQ = 0;

        $scope.qList = [
            { question: 'Test Question A', response : '' }
            ,{ question: 'Test Question B', response : '' }
            ,{ question: 'Test Question C', response : '' }
            ,{ question: 'Test Question D', response : '' }
            ,{ question: 'Test Question E', response : '' }
        ];

        var selectResponse = function(respCode) {
            $scope.qList[$scope.currQ].response = respCode;
        };

        $scope.nextQuestion = function () {
            if($scope.currQ < $scope.qList.length-1) {
                $scope.currQ++;
            }
        };

        $scope.prevQuestion = function () {
            if($scope.currQ > 0) {
                $scope.currQ--;
            }
        };

        $scope.select1 = function () {
            selectResponse('1');
        };

        $scope.select2 = function () {
            selectResponse('2');
        };

        $scope.select3 = function () {
            selectResponse('3');
        };

    }
);


