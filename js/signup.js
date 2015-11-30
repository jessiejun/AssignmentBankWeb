//function for signup form ajax
function signup() {
    var fn = $('#firstname').val();
    var ln = $('#lastname').val();
    var emadd = $('#email').val();
    var pwd = $('#password').val();
    var pwd2 = $('#password2').val();
    var sbj1 = $('#subject1').val();
    var sbj2 = $('#subject2').val();
    var sbj3 = $('#subject3').val();


    console.log("ajaxstart");
    $.ajax ({

        method: "POST",
        url: "./signup.php",
        data: "firstn=" + fn + "&lastn=" + ln + "&emailadd=" + emadd + "&password=" + pwd + "&password2=" + pwd2 + "&subject1=" + sbj1 + "&subject2=" + sbj2 + "&subject3=" + sbj3,
        success: function (html) {
            if (html == 'true') {

                console.log("success");
            }
            else {
                $('#signupnoti').html(html);
                console.log("fail");
            }
        }
    });
    return false;
}

