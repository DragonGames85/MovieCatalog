function updatePage() {
    $('#movie-container').addClass("d-none");
    $('.registration').addClass("d-none");
    $('.page-list').addClass("d-none");
    $('.authorization').addClass("d-none");
    $('#detail-container').addClass('d-none');


    $('#movies-part').css("color", "white");
    $('#favors-part').css("color", "white");
    $('#profile-part').css("color", "white");
    $('#login-part').css("color", "white");
    $('#reg-part').css("color", "white");
}

async function InitNav(){

    $('#movies-part').css("color", "#0a58ca");
    $('#movies-part').click(function(e) {
        updatePage();
        $('#movies-part').css("color", "#0a58ca");
        $('#movie-container').removeClass('d-none');
        $('.page-list').removeClass("d-none");
        e.preventDefault();
    })

    $('#login-part').click(function(e) {
        updatePage();
        $('#login-part').css("color", "#0a58ca");
        $('.authorization').removeClass("d-none");
        e.preventDefault();
    })

    $('#reg-part').click(function(e) {
        updatePage();
        $('#reg-part').css("color", "#0a58ca");

        $('.registration').removeClass('d-none');
        e.preventDefault();
    })
    
    $('#logout-part').click(function(e) {
        userLogout();
    })

    let t = await userCheck();
    if (t.auth) {
        $('#user-part').text('Авторизирован как - '+t.user.name).removeClass('d-none');
        $('#logout-part').removeClass('d-none');
        $('#login-part').addClass('d-none');
        $('#reg-part').addClass('d-none');
    }
    else {
        $('#user-part').addClass('d-none');
        $('#logout-part').addClass('d-none');
        $('#login-part').removeClass('d-none');
        $('#reg-part').removeClass('d-none');
    }
    
}