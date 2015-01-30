'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.PruebaController
 * @description PruebaController
 * @requires ng.$scope
*/
angular.module('core').controller('PruebaController', ['$scope',function($scope) {

    $scope.mensaje='linea1\nlinea2\nlinea3\nlinea4';

    $scope.initControlador= function(){
        console.log('inicializado .....');
    }

    $scope.listarDispositivos = function(){
        console.log('listarDispositivos.......');
        if(window.cordova){
            console.log('Estas en cordova.......');
            printer.list(
                function(success){
                    var v1=success;
                    console.log('success: '+v1);
                    alert('bluethooth: '+success);
                },function(error){
                    var v2=error;
                    console.log('error: '+v2);
                });
        }else{
            console.log('otra vaina.......');
        }
    }

    function openBt(){
        var msj=$scope.mensaje;
        console.log('openBt.......:'+msj);
        if(window.cordova){
            printer.open(function(success){
                    var v1=success;
                    console.log('success: '+v1);
                },function(error){
                    var v2=error;
                    console.log('error: '+v2);
                },'XXXXJ134200170');
        }else{
            console.log('otra vaina.......');
        }
    }

    function imprimir(txt){
        console.log('imprimir.....'+$scope.mensaje);
        if(window.cordova){
            printer.print(function(success){
                console.log('success: '+success);
            },function(error){
                console.log('error: '+error);
            },txt);
        }else{
            console.log('otra vaina.......');
        }
    }

    function closeBt(){
        console.log('cerrar....');
        if(window.cordova){
            printer.close(function(success){
                console.log('success: '+success);
            },function(error){
                console.log('error: '+error);
            });
        }
    }

    function cambiarSaltosDeLinea(texto){
        var newText = texto.replace(/(?:\\[n]|[\n]+)+/g,'\r\n');
        alert('Va a imprimir: '+newText);
        return newText;
    }

    $scope.imprimirDoc = function(){
        openBt();
        var txt = cambiarSaltosDeLinea($scope.mensaje);
        imprimir(txt);
        closeBt();
        //alert($scope.mensaje);
    }

}]);
