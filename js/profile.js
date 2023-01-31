async function InitProfile() {
    let t = await userCheck();
    $('#profileDOB').val(t.user.birthDate.slice(0,10));
    $('.profileEmail').val(t.user.email);
    $('#profileGender').val((t.user.gender == 1)?"Мужской":"Женский");
    $("#profileFIO").val(t.user.name);
    $("#profileName").text(t.user.nickName);
    $('#profileAvatar').val((t.user.name == null)? "":t.user.avatarLink);
    $('#profileIcon').attr("src",(t.user.avatarLink == null)? 
    "https://w7.pngwing.com/pngs/188/501/png-transparent-computer-icons-anonymous-anonymity-anonymous-face-monochrome-head.png":t.user.avatarLink);
    $("#editProfileButton").click(function(e){
        // неготово
    });

    $( "#profile-form" ).submit(function(e) {
        // неготово
    });

}