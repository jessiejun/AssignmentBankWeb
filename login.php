<?php
    include ("includes/connect_info.php");
    $connection=mysql_connect($hostname, $mysql_login, $mysql_password);
    $dbs=mysql_select_db($database, $connection);

    //get values of variables
    $email = mysql_real_escape_string($_POST['emailadd']);
    $pwd1 = mysql_real_escape_string($_POST['password']);
    $cryptpass = MD5($pwd1);


            if ($email == null) {
                echo "<p>" . "Email address is required." . "</p>";
            }
            else {
                if ($pwd1 == null) {
                    echo "<p>" . "Password is required." . "</p>";
                }
                else {
                    $check_query = mysql_query("select password from jug264.ab_usertb where email='$email'");
                    $result = mysql_fetch_array($check_query);
                    $pwdvery = $result['password'];
                    if ($pwdvery == $cryptpass)
                    {
                        echo json_encode(true);
                    }
                    else {
                        echo "<p>" . "Please check your email address and password." . "</p>";
                    }
                }
            }

?>