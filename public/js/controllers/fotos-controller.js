angular.module('alurapic').controller('FotosController', function($scope, $http){

  $scope.foto = [];
  $scope.filtro = '';
  $scope.mensagem = '';

  $http.get('/v1/fotos')
  .success(function(fotos){
    $scope.fotos = fotos;
  })
  .error(function(erro){
    console.log(erro);
  })


	$scope.remover = function(foto){
		$http.delete('/v1/fotos/' + foto._id)
		.success(function(){
			var indiceDaFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceDaFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
			//$scope.formulario.$setPristine(); //impede a validação do formulário logo depois de limpá-lo
		})
		.error(function(erro){
			console.log('Não foi possível apagar a foto ' + foto.titulo);
			$scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
		})
	};
});
