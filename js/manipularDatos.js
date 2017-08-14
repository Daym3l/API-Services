/**
 * Created by Daymel on 26-May-16.
 */
var app = angular.module("app", []);

app.controller("appController", function ($scope, $http) {
    var objeto="";
    $scope.url = "js/plantillas/body_principal.html";
    $scope.visibilidad = true;
    $scope.visible = false;
    $scope.parametros = [{title:"No params ",type:" No type", descripcion:"No descrption"}];
    $http.get('data/data.json').
        success(function (data, status, headers, config) {
            objeto = data.results.conector.componentes.componente;
            $scope.titulo = data.results.conector.title;
            $scope.descripcion = data.results.conector.propiedades.descripcion;
            $scope.sermodule1 = data.results.conector.componentes.componente[0].servicio;
            $scope.sermodule2 = data.results.conector.componentes.componente[1].servicio;
            $scope.sermodule3 = data.results.conector.componentes.componente[2].servicio;
            $scope.sermodule4 = data.results.conector.componentes.componente[3].servicio;
            $scope.module1 = data.results.conector.componentes.componente[0];
            $scope.module2 = data.results.conector.componentes.componente[1];
            $scope.module3 = data.results.conector.componentes.componente[2];
            $scope.module4 = data.results.conector.componentes.componente[3];

        }).
        error(function (data, status, headers, config) {
            // log error
        });


    $scope.clickSimple = function (myE) {
        $scope.visibilidad = false
        $scope.visible = true;
        var servicio = myE.target.innerText;
        var datos = "";
        for (var i = 0; i < objeto.length; i++){
            for(var j= 0;j<objeto[i].servicio.length;j++){
                if(objeto[i].servicio[j].title == servicio){
                    datos =objeto[i].servicio[j];
                    break;
                }

            }

        }
           $scope.datos = datos;
        if( datos.parametros.param){
            $scope.parametros = datos.parametros.param;
            console.debug(datos.parametros.param)
        }else{
            $scope.parametros = [{title:"No params ",type:" No type", descripcion:"No descrption"}];
        }


    }
    $scope.cambiarVisibilidad = function () {
        $scope.visibilidad = true;
        $scope.visible = false;

    }
});

