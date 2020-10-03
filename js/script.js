// Consumiendo REST API
// *********************
// Listar Posts
// Obtener atributo identicador de x post
// Listar comentarios a del post seleccionado a partir del atributo identificador

$(document).ready(function(){

 	function posts(beginning, end) {

		fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(function(json) {
			var data = json;
			var dataForPage = data.slice(beginning, end); // DATOS DESMENUZADOS :/
			console.log(dataForPage);
			$.getJSON(dataForPage, function(dataProcessed) {

				// Ciclo que pone cada dato del array desmenuzado al DOM
				for (var i = 0; i < dataProcessed.length; i++) {
					var title = data[i]['title'];
					var post = data[i]['body'];

					$("#posts").append("<li class='post'><div class='post-view'><h4 class='post-title'></h4><br><h6 class='body-post'></h6><span class='comment-btn'>Comments<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-caret-down-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg></span></div></li>");

					$(".post-title").last().text(title);
					$(".body-post").last().text(post);
				}
			});
		});
 	}
 	posts(0, 10);

});