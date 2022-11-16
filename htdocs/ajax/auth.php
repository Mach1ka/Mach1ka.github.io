<?php

$login = trim(filter_var($_POST['login'], FILTER_SANITIZE_STRING));
$password = trim(filter_var($_POST['password'], FILTER_SANITIZE_STRING));

$error = '';
if (strlen($login) <= 3) {
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

$sql = 'SELECT `id`  FROM `users` WHERE `login` = :login && `password` = :password  ';
$query = $pdo->prepare($sql);
$query->execute(['login' => $login, 'password' => $password]);

$user = $query->fetch(PDO::FETCH_OBJ);
if ($user->id == 0) {
    echo 'Такого пользователя не существует';
} else {
    setcookie('log', $login, time() + 3600 * 24 * 30, "/");

    echo 'ready';
}

?>