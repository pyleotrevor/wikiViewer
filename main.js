$(document).ready(function() {
  $("button").on( "click", function() {
    var randomApi = "https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=1&origin=*&format=json";

    $.ajax({url: randomApi, success: function(randomWikiData) {
          console.log(randomWikiData);
          var randomSearchTerm = randomWikiData.query.random[0].title;
          $('#searchTerm').val(randomSearchTerm)
          }
        });
  });

  $('#searchTerm').keydown(function(e) {
    if (e.keyCode == 13) {
      $("#container").html("");
      var apiRoute = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&namespace=0&origin=*&search="
      var searchterm = $("#searchTerm").val();
      var api = apiRoute + searchterm;
      console.log(api);
      $.ajax({url: api, success: function(wikiData) {
          console.log(wikiData);
          for (var i = 0; i < wikiData[1].length; i++) {
            $("#container").append("<a><div><h2>" + wikiData[1][i] + "</h2><br/>" + wikiData[2][i] + "<br/>" + "</div></a>")
            $("div:last").addClass("hvr-overline-from-left")
            $("a:last").attr("href", wikiData[3][i]);
            $

          }
        }
      });
    }
  });
});
