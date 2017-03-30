angular.module('alurapic')
.controller('FotoController', function($scope, $http){

	$scope.foto = {};
	$scope.mensagem = '';

	
	$scope.submeter = function(){
		if($scope.formulario.$valid){
			console.log($scope.foto);

			$http.post('/v1/fotos', $scope.foto)
			.success(function(){
				$scope.foto = {};
				$scope.mensagem = 'Foto adicionada com sucesso!';
			})
			.error(function(erro){
				console.log(erro);
				$scope.mensagem = 'Não foi possível cadastrar a foto';
			})	
		}
	};		
});