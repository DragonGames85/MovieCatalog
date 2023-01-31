async function userRegister(array) {
    let login = array[0].value,
    password = array[1].value, 
    checkPassword=array[2].value,
    email = array[3].value,
    fio = array[4].value,
    dob = array[5].value,
    gender = (array[6].value == "Мужской")? 1:0;

    if (checkPassword != password) $("#regError").text("Пароли не совпадают");
    else if (login.length < 2) $("#regError").text("Логин слишком короткий");
    else if (dob > Date.now()) $("#regError").text("Неправильная дата рождения");
    try {
        let response = await fetch("https://react-midterm.kreosoft.space/api/account/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                "userName": login,
                "name": fio,
                "password": password,
                "email": email,
                "birthDate": dob + "T00:00:00.000Z",
                "gender":gender
            })
        });
        console.log(response);
        if (response.ok) {
            let json = await response.json();
            localStorage.setItem('jwt-token',json.token);
            location.pathname="/";
            alert(1);
            $("#regError").text("Пользователь зарегистрирован").removeClass("text-danger").addClass("text-success");
        }
    } catch {
        alert ("Error")
    }
}



function InitRegistration(){
    $( "#formReg" ).submit(function(e) {
        console.log($( "#formReg" ).serializeArray());
        userRegister($( "#formReg" ).serializeArray());
        e.preventDefault();
    });
}