<?php
    include ("includes/connect_info.php");
    $connection=mysql_connect($hostname, $mysql_login, $mysql_password);
    $dbs=mysql_select_db($database, $connection);

    //get values of variables
    $type = mysql_real_escape_string($_POST['check']);

    if ($type == 0) {
        $question = mysql_real_escape_string($_POST['question']);
        $opt1 = mysql_real_escape_string($_POST['opt1']);
        $opt2 = mysql_real_escape_string($_POST['opt2']);
        $opt3 = mysql_real_escape_string($_POST['opt3']);
        $opt4 = mysql_real_escape_string($_POST['opt4']);
        $ca = mysql_real_escape_string($_POST['ca']);
        $subject = mysql_real_escape_string($_POST['subject']);
        $grade = mysql_real_escape_string($_POST['grade']);
        $module = mysql_real_escape_string($_POST['module']);
        $expdate = mysql_real_escape_string($_POST['expdate']);


        $insert = mysql_query("INSERT INTO jug264.ab_problem (qtype, question, a1, a2, a3, a4 , ca, subject, grade, qmodule, expdate) VALUES ('$type','$question', '$opt1', '$opt2', '$opt3', '$opt4', '$ca', '$subject', '$grade', '$module', '$expdate') ");
        echo json_encode(true);
    }
    else {
        $question = mysql_real_escape_string($_POST['question']);
        $subject = mysql_real_escape_string($_POST['subject']);
        $grade = mysql_real_escape_string($_POST['grade']);
        $module = mysql_real_escape_string($_POST['module']);
        $expdate = mysql_real_escape_string($_POST['expdate']);

        $insert = mysql_query("INSERT INTO jug264.ab_problem (qtype, question, subject, grade, qmodule, expdate) VALUES ('$type', '$question', '$subject', '$grade', '$module', '$expdate')");
        echo json_encode(true);
    }


?>