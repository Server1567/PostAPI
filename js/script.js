// Consumiendo REST API

$(document).ready(function(){
	fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(function(json) {
		var data = json;
		var title = data[0]['title'];
		var post = data[0]['body'];
		$(".post-title").text(title);
		$(".body-post").text(post);
		console.log(post);
	});
});


