<?php
    include ("includes/connect_info.php");
    $connection=mysql_connect($hostname, $mysql_login, $mysql_password);
    $dbs=mysql_select_db($database, $connection);

    //get values of variables
    $fn = mysql_real_escape_string($_POST['firstn']);
    $ln = mysql_real_escape_string($_POST['lastn']);
    $email = mysql_real_escape_string($_POST['emailadd']);
    $pwd1 = mysql_real_escape_string($_POST['password']);
    $pwd2 = mysql_real_escape_string($_POST['password2']);
    $sbj1 = mysql_real_escape_string($_POST['subject1']);
    $sbj2 = mysql_real_escape_string($_POST['subject2']);
    $sbj3 = mysql_real_escape_string($_POST['subject3']);


    if ($fn == null) {
        echo "<p>" . "First name is required." . "</p>";
    }
    else {
        if ($ln == null) {
            echo "<p>" . "Last name is required." . "</p>";
        } else {
            if ($email == null) {
                echo "<p>" . "Email address is required." . "</p>";
            } else {
                $sql = "SELECT  * from jug264.ab_usertb where email='$email'";
                $result = mysql_query($sql);
                $row = mysql_fetch_array($result);
                if (!mysql_num_rows($result))
                {
                    if ($pwd1 == null) {
                        echo "<p>" . "Password is required." . "</p>";
                    } else {
                        if (strlen($pwd1) < 8){
                            echo "<p>" . "Password should contain at least 8 characters." . "</p>";
                        }
                        else {
                            if ($pwd2 == null) {
                                echo "<p>" . "Please re-enter the password." . "</p>";
                            } else {
                                if ($pwd2 != $pwd1) {
                                    echo "<p>" . "Re-entered password doesn't match original one." . "</p>";
                                } else {
                                    if ($sbj1 == null) {
                                        echo "<p>" . "You should fill in at least one subject you are instructing." . "</p>";
                                    } else {
                                        $cryptpass = MD5($pwd1);
                                        $insert1 = mysql_query("INSERT INTO jug264.ab_usertb (firstname, lastname, email, password, subject1, subject2, subject3) VALUES ('$fn', '$ln', '$email', '$cryptpass', '$sbj1', '$sbj2', '$sbj3' ) ");
                                        echo json_encode(true);
                                    }
                                }
                            }
                        }
                    }
                }
                else {
                    echo "<p>" . "This email address has been registered." . "</p>";
                }
            }
        }
    }
?>