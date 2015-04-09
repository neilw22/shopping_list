<?php
$email = $_POST['email'];
$list = $_POST['list'];

mail($email, "$list");
?>