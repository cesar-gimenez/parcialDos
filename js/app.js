(function($) {
	$(function () {
		var panelTemplate;
		var url = 'servicio/posts.json'
		//console.log(url);
		$.get('template/panel.html',function(dom){
				panelTemplate = dom;
		 	});

		$.get(url)
							.done(function(data) {
								//console.log(data);
								for(var i=0;i<data.length;i++){
											var panel = $(panelTemplate);
											var datos = data[i];
											panel.find('images').append(datos.avatar);
											panel.find('#username').append(datos.username);
											panel.find('#text').append(datos.text);
											$('#principal').append(panel);
										}


							})
							.fail(function() {
								alert('Error de Ajax');
							})
			$('button').click(function(event) { //evento al boton
			$(this).toggleClass('btn-danger btn-default');
								//danger=rojo 
		});

	


	});

		




})(jQuery);




