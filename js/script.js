// Consumiendo REST API
// *********************
// Listar Posts
// Obtener atributo identicador de x post
// Listar comentarios a del post seleccionado a partir del atributo identificador

$(document).ready(function(){

 	function posts(beginning, end) {
<<<<<<< HEAD
 		$("#posts").empty();

		$.getJSON("https://jsonplaceholder.typicode.com/posts", function(dataProcessed) {
			var dataForPage = dataProcessed.slice(beginning, end); // DATOS DESMENUZADOS :/
			console.log(dataForPage);
			// Ciclo que pone cada dato del array desmenuzado al DOM
			for (var i = 0; i < dataForPage.length; i++) {
				var title = dataForPage[i]['title'];
				var post = dataForPage[i]['body'];
				var id = dataForPage[i]['userId'];

				$("#posts").append("<li class='post'><div class='post-view'><h4 class='post-title'></h4><br><h6 class='body-post'></h6><span class='comment-btn'>Comments<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-caret-down-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg></span></div></li>");

				$(".post-title").last().text(title);
				$(".body-post").last().text(post);
				$("#posts").attr("class", id);
			}
=======

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
>>>>>>> fead1f9656a9afc7018da0b9153669d0d356bf1e
		});

 	}
<<<<<<< HEAD
 	posts(0, 10); // Ejecutamos los primeros Posts
 	
 	// PAGINATION

	$("#pagination li").each(function() {
		if ($("#previous").hasClass("disabled")) {
			$("#1").addClass("disabled");
		}
	});

	// ********************************************************

 	$("#previous").click(function() {
 		if(!($(this).hasClass("disabled"))) {
 			var index = parseInt($("#posts").attr("class"));
 			switch(index) {
 				case 2:
 					posts(0, 10);
 					$("#pagination li").removeClass("disabled");
 					$("#1").addClass("disabled");
 					$("#previous").addClass("disabled");
 					break;
 				case 3:
 					posts(10, 20);
 					$("#pagination li").removeClass("disabled");
 					$("#2").addClass("disabled");
 					break;
 				case 4:
 					posts(20, 30);
 					$("#pagination li").removeClass("disabled");
 					$("#3").addClass("disabled");
 					break;
 				case 5:
 					posts(30, 40);
 					$("#pagination li").removeClass("disabled");
 					$("#4").addClass("disabled");
 					break;
 				case 6:
 					posts(40, 50);
 					$("#pagination li").removeClass("disabled");
 					$("#5").addClass("disabled");
 					break;
 				case 7:
 					posts(50, 60);
 					$("#pagination li").removeClass("disabled");
 					$("#6").addClass("disabled");
 					break;
 				case 8:
 					posts(60, 70);
 					$("#pagination li").removeClass("disabled");
 					$("#7").addClass("disabled");
 					break;
 				case 9:
 					posts(70, 80);
 					$("#pagination li").removeClass("disabled");
 					$("#8").addClass("disabled");
 					break;
 				case 10:
 					posts(80, 90);
 					$("#pagination li").removeClass("disabled");
 					$("#9").addClass("disabled");
 					break;
 			}
 		}

 	});

 	$("#next").click(function() {
 		if(!($(this).hasClass("disabled"))) {
 			var index = parseInt($("#posts").attr("class"));
 			switch(index) {
 				case 1:
 					posts(10, 20);
 					$("#pagination li").removeClass("disabled");
 					$("#2").addClass("disabled");
 					break;
 				case 2:
 					posts(20, 30);
 					$("#pagination li").removeClass("disabled");
 					$("#3").addClass("disabled");
 					break;
 				case 3:
 					posts(30, 40);
 					$("#pagination li").removeClass("disabled");
 					$("#4").addClass("disabled");
 					break;
 				case 4:
 					posts(40, 50);
 					$("#pagination li").removeClass("disabled");
 					$("#5").addClass("disabled");
 					break;
 				case 5:
 					posts(50, 60);
 					$("#pagination li").removeClass("disabled");
 					$("#6").addClass("disabled");
 					break;
 				case 6:
 					posts(60, 70);
 					$("#pagination li").removeClass("disabled");
 					$("#7").addClass("disabled");
 					break;
 				case 7:
 					posts(70, 80);
 					$("#pagination li").removeClass("disabled");
 					$("#8").addClass("disabled");
 					break;
 				case 8:
 					posts(80, 90);
 					$("#pagination li").removeClass("disabled");
 					$("#9").addClass("disabled");
 					break;
 				case 9:
 					posts(90, 100);
 					$("#pagination li").removeClass("disabled");
 					$("#10").addClass("disabled");
 					$("#next").addClass("disabled");
 					break;
 			}
 		}
 	});

 	// ********************************************************

 	$("#1").click(function() {
 		if(!($(this).hasClass("disabled"))) {
 			posts(0, 10);
 			$("#pagination li").removeClass("disabled");
 			$(this).addClass("disabled");
 			$("#previous").addClass("disabled");
 		} 
 	});
 	$("#2").click(function() { 
 		if(!($(this).hasClass("disabled"))) {
 			posts(10, 20);
 			$("#pagination li").removeClass("disabled");
 			$(this).addClass("disabled");
 		} 
 	});
 	$("#3").click(function() { 
 		if(!($(this).hasClass("disabled"))) {
 			posts(20, 30);
 			$("#pagination li").removeClass("disabled");
 			$(this).addClass("disabled");
 		}
 	});
 	$("#4").click(function() { 
 		if(!($(this).hasClass("disabled"))) {
 			posts(30, 40);
 			$("#pagination li").removeClass("disabled");
 			$(this).addClass("disabled");
 		} 
 	});
 	$("#5").click(function() { 
 		if(!($(this).hasClass("disabled"))) {
 			posts(40, 50);
 			$("#pagination li").removeClass("disabled");
 			$(this).addClass("disabled");
 		} 
 	});
 	$("#6").click(function() { 
 		if(!($(this).hasClass("disabled"))) {
 			posts(50, 60);
 			$("#pagination li").removeClass("disabled");
 			$(this).addClass("disabled");
 		}
 	});
 	$("#7").click(function() { 
 		if(!($(this).hasClass("disabled"))) {
 			posts(60, 70);
 			$("#pagination li").removeClass("disabled");
 			$(this).addClass("disabled");
 		}
 	});
 	$("#8").click(function() { 
 		if(!($(this).hasClass("disabled"))) {
 			posts(70, 80);
 			$("#pagination li").removeClass("disabled");
 			$(this).addClass("disabled");
 		}
 	});
 	$("#9").click(function() { 
 		if(!($(this).hasClass("disabled"))) {
 			posts(80, 90);
 			$("#pagination li").removeClass("disabled");
 			$(this).addClass("disabled");
 		}
 	});
 	$("#10").click(function() { 
 		if(!($(this).hasClass("disabled"))) {
 			posts(90, 100);
 			$("#pagination li").removeClass("disabled");
 			$(this).addClass("disabled");
 			$("#next").addClass("disabled");
 		} 
 	});
=======
 	posts(0, 10);
>>>>>>> fead1f9656a9afc7018da0b9153669d0d356bf1e

});