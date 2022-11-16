<?php
$username = trim(filter_var($_POST['username'], FILTER_SANITIZE_STRING));
$email = trim(filter_var($_POST['email'], FILTER_SANITIZE_EMAIL));
$login = trim(filter_var($_POST['login'], FILTER_SANITIZE_STRING));
$password = trim(filter_var($_POST['password'], FILTER_SANITIZE_STRING));

$error = '';
if (strlen($username) <= 3) {
	$error = 'Введите имя';
} else if (strlen($email) <= 3) {
	$error = 'Введите email';

} else if (strlen($login) <= 3) {
	$error = 'Введите логин';

} else if (strlen($password) <= 3) {
	$error = 'Введите пароль';
}

if ($error != '') {
	echo $error;
	exit();
}
$hash = "daskjdlwqioe21dasdc31pda";
$password = md5($password . $hash);

require_once '../mysql_connect.php';

$sql = 'INSERT INTO users(name, email, login, password) VALUES(?, ?, ?, ?)';
$query = $pdo->prepare($sql);
$query->execute([$username, $email, $login, $password]);

echo 'ready'
	?>