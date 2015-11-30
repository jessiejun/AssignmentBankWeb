
<?php
    include ("includes/connect_info.php");
    $connection=mysql_connect($hostname, $mysql_login, $mysql_password);
    $dbs=mysql_select_db($database, $connection);
    $sql = "SELECT * FROM jug264.ab_problem order by rand() limit 10";
    $result = mysql_query($sql);
    echo '<table class="table table-striped">
		<tr>
		<th class="hidden-xs">ID</th>
		<th>Question</th>
		<th class="hidden-xs">Option A</th>
		<th class="hidden-xs">Option B</th>
		<th class="hidden-xs">Option C</th>
		<th class="hidden-xs">Option D</th>
		<th>Answer</th>
		<th></th>
		</tr>';
    while($row = mysql_fetch_array($result)) {
        echo "<tr>";
        echo '<td class="hidden-xs">' . $row['id'] . "</td>";
        echo "<td>" . $row['question'] . "</td>";
        echo '<td class="hidden-xs">' . $row['a1'] . "</td>";
        echo '<td class="hidden-xs">' . $row['a2'] . "</td>";
        echo '<td class="hidden-xs">' . $row['a3'] . "</td>";
        echo '<td class="hidden-xs">' . $row['a4'] . "</td>";
        echo "<td>" . $row['ca'] . "</td>";
        echo '<td><button class="deleterow hide button button-circle button-tiny button-primary">x</button></td>' . '</td>';
        echo "</tr>";
    };

    mysql_close();
    ?>



