// Consumiendo REST API
// *********************
// Listar Posts
// Obtener atributo identicador de x post
// Listar comentarios a del post seleccionado a partir del atributo identificador

$(document).ready(function(){

 	function posts(beginning, end) {
 		$("#posts").empty();

		$.getJSON("https://jsonplaceholder.typicode.com/posts", function(dataProcessed) {
			var dataForPage = dataProcessed.slice(beginning, end); // DATOS DESMENUZADOS :/

			// Ciclo que pone cada dato del array desmenuzado al DOM
			for (var i = 0; i < dataForPage.length; i++) {
				var title = dataForPage[i]['title'];
				var post = dataForPage[i]['body'];
				var id = dataForPage[i]['userId'];
				var idPost = dataForPage[i]['id'];

				$("#posts").append("<li class='post'><div class='post-view'><h4 class='post-title'></h4><br><h6 class='body-post'></h6><span class='comment-btn' id='"+idPost+"'>Comments<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-caret-down-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg></span><div class='commentsBox switch'></div></div></li>");
				$(".post-title").last().text(title);
				$(".body-post").last().text(post);
				$("#posts").attr("class", id);
			}

			$(".comment-btn").click(function () {
				var postId = $(this).attr('id');
				// .next() == .commentsBox
				if ($(this).next().hasClass("switch")) {
					comments(postId);
					$(this).next().removeClass("switch");
					$(this).html("Comments<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-caret-up-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z'/></svg>");
				}
				else {
					$(this).next().addClass("switch");
					$(this).next().empty();
					$(this).html("Comments<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-caret-down-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>");
				}
				// Aquí haremos la animación de entrada de los comentarios
			});
		});

 	}
 	posts(0, 10); // Ejecutamos los primeros Posts

 	function comments(post) {

 		var link = "https://jsonplaceholder.typicode.com/posts/"+post+"/comments";

 		$.getJSON(link, function(dataProcessed) {
			// Ciclo que pone cada dato del array desmenuzado al DOM
			for (var i = 0; i < dataProcessed.length; i++) {
				var email = dataProcessed[i]['email'];
				var name = dataProcessed[i]['name'];
				var body = dataProcessed[i]['body'];

				$("#"+post+"").next().append("<div class='comment'><h6 style='color: cadetblue;'>"+email+"</h6><strong>"+name+"</strong><br><p>"+body+"</p></div>");
			}
		});
 	}

 	
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

});