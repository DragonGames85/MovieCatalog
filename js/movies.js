function loadMovies(page) {
    fetch("https://react-midterm.kreosoft.space/api/movies/"+page)
    .then((response) => {return response.json();})
    .then((json) => {
        $("#movie-container").empty();
        let template = $("#card-template1");
        for(let mv of json.movies) {
            let block = template.clone();
            block.attr("id","movie"+mv.id);

            block.find("#movie-poster").attr("src",mv.poster)
                .click(function(e) {InitDetailPage(mv.id);})
                .hover(function() {
                    $(this).css('cursor','pointer');
                });

            block.find(".movie-name").text(mv.name)
                .click(function(e) {InitDetailPage(mv.id);})
                .hover(function() {
                    $(this).css('cursor','pointer');
                });

            block.find(".movie-year").text(mv.year);
            if (calculateMovieRate(mv) == 0) {block.find(".movie-rate").text("Оценка отсутствует");}
            else {block.find(".movie-rate").text("Средняя оценка - " + calculateMovieRate(mv));}
            let genreList =mv.country + " 🞄 ";
            for (let i=0; i < mv.genres.length; i++) {
               genreList += (i == mv.genres.length-1)? mv.genres[i].name:mv.genres[i].name + ", "; 
            }
            block.find(".movie-country-genre").text(genreList);

            $("#movie-container").append(block);
        }
    });
}

function loadPages() {
    $(".movie-page").click(function(e) {loadMovies(1);});
    fetch("https://react-midterm.kreosoft.space/api/movies/1")
    .then((response) => {return response.json();})
    .then((json) => {
        let template = $(".movie-page");
        for (let i=0; i<json.pageInfo.pageCount-1; i++) {
            newPage=template.clone();
            newPage.text(i+2).click(function(e){loadMovies(i+2);});
            $(".page-list").append(newPage);
        }
    });

}

function calculateMovieRate(movie) {
    let rateMark=0.0;
    for(let rev of movie.reviews) rateMark+=rev.rating;
    return ((rateMark==0)? 0:rateMark/movie.reviews.length).toFixed(1);
}

function loadReviews(block, arr){
    let template = $("#movieReviews");
    for (let rev of arr) {
        let review = template.clone();
        if (rev.author.avatar != null) review.find("#reviewIcon").attr("src", rev.author.avatar);
        else review.find("#reviewIcon").attr("src","https://w7.pngwing.com/pngs/188/501/png-transparent-computer-icons-anonymous-anonymity-anonymous-face-monochrome-head.png");
        review.find("#reviewUser").text(rev.author.nickName);
        review.find("#reviewRate").text(rev.rating);
        review.find("#reviewDate").text("Дата Отзыва: "+rev.createDateTime.slice(0,10));
        review.find(".reviewText").text(rev.reviewText);
        if (rev.rating < 6) {review.addClass("border-danger"); review.find("#reviewRate").addClass("bg-danger");}
        else {review.addClass("border-success"); review.find("#reviewRate").addClass("bg-success");}
        $(block).append(review);
    }
}

async function InitDetailPage(id){
    updatePage();
    let t = await userCheck();
    if  (!t.auth) $(".favorite-button").addClass("d-none");
    else $(".favorite-button").removeClass('d-none');

    $('#detail-container').removeClass('d-none');
    fetch("https://react-midterm.kreosoft.space/api/movies/details/"+id)
    .then((response) => {return response.json();})
    .then((json) => {

        

        $("#detail-container").empty();
        let template = $("#card-template2");
        let block = template.clone();

        block.find(".movie-name-detail").text(json.name + " (" + json.year + ")");
        block.find(".movie-description-detail").text(json.description);
        block.find(".movie-country-detail").append('<strong>' + json.country+'</strong>');
        block.find(".movie-year-detail").append('<strong>' + json.year+'</strong>');
        block.find(".movie-director-detail").append('<strong>' + json.director+'</strong>');
        block.find(".movie-tagline-detail").append('<strong>' + "«" + json.tagline + "»"+'</strong>');
        block.find(".movie-time-detail").append('<strong>' + json.time + " мин."+'</strong>');
        block.find("#movie-poster-detail").attr("src",json.poster)
        block.find(".movie-age-detail").append('<strong>' + json.ageLimit+"+"+'</strong>');

        let genreList = "";
        for (let i=0; i < json.genres.length; i++) {
           genreList += (i == json.genres.length-1)? json.genres[i].name:json.genres[i].name + ", "; 
        }
        block.find(".movie-genre-detail").append('<strong>'+genreList+'</strong>');
        
        let budget = ""+json.budget, fees =""+json.fees, dollars="";
        budget=budget.split("").reverse().join("");
        fees=fees.split("").reverse().join("");
        
        for (let i = 1; i <= budget.length; i++) dollars+=(i%3==0)?(budget[i-1])+" ":budget[i-1];
        if(dollars[dollars.length-1]==" ") {
            let newStrDollars="";
            for (let i = 0; i < dollars.length-1; i++) newStrDollars+=dollars[i];
            dollars = newStrDollars;
        }

        block.find(".movie-budget-detail").append('<strong>' + "$"+dollars.split("").reverse().join("") + '</strong>');
        
        dollars="";
        for (let i = 1; i <= fees.length; i++) dollars+=(i%3==0)?(fees[i-1])+" ":fees[i-1];

        if(dollars[dollars.length-1]==" ") {
            let newStrDollars="";
            for (let i = 0; i < dollars.length-1; i++) newStrDollars+=dollars[i];
            dollars = newStrDollars;
        }

        block.find(".movie-fees-detail").append('<strong>' + "$"+dollars.split("").reverse().join("") + '</strong>');

        loadReviews(block, json.reviews);
        $("#detail-container").append(block);
    });
}
