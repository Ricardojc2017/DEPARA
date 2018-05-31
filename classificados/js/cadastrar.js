// Validação do Formulário de Cadastro
$(document).ready(function(){


	//exibirMensagem($(objForm).find("div.mensagem"), true,"");

    $("#btnCadastrar").click(function(event){
		event.preventDefault();
        var objForm = $( "#formCadastrar" );

		

	$.ajax({
		type: 'POST',
		url: 'xt_cadastrar.php',
		data: objForm.serialize(),
		success: function(data){
		//console.log("sucesso")
		alert('salvo com sucesso !!');
		

		},
		error: function(xhr, textStatus, error){

			console.log("error")
			alert('Houve um erro ,atualize a página !!')

		}
	});
  

  
        //$.post("xt_cadastrar5.php", objForm.serialize(), function(data, status){
            
            // alert("Data: " + data + "\nStatus: " + status);
		   //alert('Cadastrado com sucesso'); 
		 //  console.log('cadastra com sucesso !!'); 
		//Processando a resposta
		//console.log("dwdwd");

          console.log(status);


	//	var mensagem = "";
	//	var resposta = false;

	//	if(status !="success") mensagem = "Ocorreu um erro de comunicacao com o servidor.Por gentileza tente novamente .";

		//else{
		//  mensagem = data.mensagem;
		  
		// if(data.resposta) resposta = true;

		//}

		//exibirMensagem($(objForm).find("div.mensagem"), resposta, mensagem);
		
		//if (resposta && res.location.length > 0) location.href = res.location;

       // if (resposta) $(objForm).get(0).reset();

	     //,"json");
           
		});
	

		return false;

	});
	

	


    // function of mauricio.




/*var valor = document.getElementById('btnCadastrar'); 

valor.onclick = function() { 
var texto = document.getElementById('meutexto').value; 
alert(texto); 
}
  


<input id="meutexto" type="text" value="teste"> 
<button id="btnCadastrar">Enviar</button>*/


/* if(texto != null || texto != ''){

         alert('salvo com sucesso!');

   }*/

  // $(function(){

	/*$('#formCadastrar').submit(function(event){
		event.preventDefault();
		var formDados = new FormData($(this)[0]);

        console.log(formDados);
        /*
		$.ajax({
			url:'xt_cadastrar.php',
			type:'POST',
			data:formDados,
			cache:false,
			contentType:false,
			processData:false,
			success:function (data)
     {document.getElementById('resultado').innerHTML = 'Enviado! Em breve Entraremos em contato.';
			  $('#envia_msg').each (function(){
			this.reset();
           });
	  },
			dataType:'html'
        });
        */
		//return false;
	//});
//});