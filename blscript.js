$(document).ready(function(){
   /* console.log("hi");
    var data;
    $(".k").click(function(){
     fetch("http://blogg.adventurehero.se/wp-json/wp/v2/posts")
    .then(function(response) {
         return response.json();
    })
    .then(function(text){
       data = text;
       console.log(data[0].id);
    });
});*/

  var data;

   // fetch("myfile.json")
   fetch("http://blogg.adventurehero.se/wp-json/wp/v2/posts")
    .then(function(response)
    {
        return response.json();
    })
    .then(function(text)
    {
        data = text;
        showPost();
    });
    function showPost(){
        for (var i=0; i<4; i++){
            cardTitle = data[i].title.rendered;
            cardText = data[i].excerpt.rendered.substring(0,150);
            cardLink = data[i].link;
            cardImg = data[i].better_featured_image.source_url;
            $(".container").append('<div class="card" style="width:400px"><h4 class="card-title">'+cardTitle+'</h4><img class="card-img-top" src="'+ cardImg +'" alt="image!" style="width:100%; height:300px;"><div class="card-body"><p class="card-text"> '+cardText+ "[...]"+'</p><a class="card-link" href="'+cardLink+'">Läs mer</a></div></div>' );

        }
    }
});
