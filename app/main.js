$(document).ready(function () {
    $('#searchForm').on('submit', searchMovie);


    function searchMovie(e) {
        var input = $('#inputSearch').val();

        e.preventDefault();

        $.ajax({
            type: "GET",
            url: 'https://api.themoviedb.org/3/search/movie?api_key=2e13286c36011ef905e50c1893428ebc&language=en-US&page=1&query=' + input,
            data: 'json'
        }).done(function (movie) {

            var movies = movie.results;
            var output = "";

            $.each(movies, function (i, movie) {

                var picpath = movie.poster_path;
                var imgpath = 'https://image.tmdb.org/t/p/w500/' + picpath;
                var title = movie.title;
                var rating = movie.vote_average;

                output += '<div class="col-md-3 movie-container"><div class="rating">' + rating + '</div><img src="' + imgpath + '"><p>' + title + '</p><button class="btn btn-danger" onclick="viewInfo(' + movie.id + ')">View Info</button></div>';

                $('#movie').html(output);
            });

        });

    };

    function viewInfo(id) {

        var movieid = id;
        /*  $.ajax({
              type:"GET",
              url:
          });*/

        alert(id);
    };
});
