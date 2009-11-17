<?php

session_start();
$name = $_SESSION['name'];

$fh = fopen('results.txt', 'a');
fwrite($fh, "Name: $name\n");
fwrite($fh, "Results: ".$_POST['result']."\n\n");
fclose($fh);

var_dump($_POST);

?>
