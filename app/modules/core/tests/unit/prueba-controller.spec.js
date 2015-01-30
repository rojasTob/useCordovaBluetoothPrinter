'use strict';

describe('Controller: PruebaController', function() {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('core'));

    var PruebaController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        PruebaController = $controller('PruebaController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
