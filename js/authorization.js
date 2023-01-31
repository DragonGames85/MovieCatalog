async function userCheck() {
    let jwt = localStorage.getItem('jwt-token');
    if (!jwt) return {
        auth: false,
        user: {}
    };
    try {
        let response = await fetch("https://react-midterm.kreosoft.space/api/account/profile", {
            headers: {
                "contentType": 'application/json',
                "Accept": "*/*",
                "Authorization": "Bearer " + jwt
            }
        });
        let json = await response.json();
        let user = {
            auth: true,
            user: json
        };
        localStorage.setItem("user", JSON.stringify(user));
        return user;
    } 
    catch {
        localStorage.removeItem("jwt-token");
        let user = {
            auth: false,
            user: {}
        };
        localStorage.setItem("user", JSON.stringify(user));
        return user;
    }
}

async function userLogout() {
    let jwt = localStorage.getItem("jwt-token");
    localStorage.removeItem("jwt-token");
    let user = {
        auth: false,
        user: {}
    };
    localStorage.setItem("user", JSON.stringify(user));
    if (!jwt) return;
    try {
        let response = await fetch(`${api_url}/account/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer" + jwt
            }
        });
    }
    finally {}
}

async function userLogin(arr) {
    try {
        let login = arr[0].value, password = arr[1].value;
        if (!login || !password) return;
        let response = await fetch("https://react-midterm.kreosoft.space/api/account/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                "username": login,
                "password": password
            })
        });
        if (response.ok) {
            let json = await response.json();
            localStorage.setItem("jwt-token", json.token);
        }
        else {
            $("#incorrect").text("Неправильный логин или пароль");
            e.preventDefault();
        }
    }
    catch {
        alert("Ошибка входа");
        e.preventDefault();
    }
}

function InitAuthorization(){
    $( "#formLog" ).submit(function(e) {
        console.log($( "#formLog" ).serializeArray());
        userLogin($( "#formLog" ).serializeArray());
        alert("stio");
    });

    $(".regLoginButton").click(function(e) {
        updatePage();
        $('#reg-part').css("color", "#0a58ca");
        $('.registration').removeClass('d-none');
        e.preventDefault();
    });
}