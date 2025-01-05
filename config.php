<?php

// Настройки SMTP
$config = array(
    'host' => 'smtp.yandex.ru', // Замените на ваш SMTP-хост
    'port' => 465,                 // Замените на ваш SMTP-порт
    'username' => 'beschastnayalena@yandex.ru', // Замените на ваш логин
    'password' => 'ezgqzgmwszkqcqdh',     // Замените на ваш пароль
    'secure' => 'ssl',              // tls или ssl -  тип шифрования
    'from_email' => 'beschastnayalena@yandex.ru', //Email отправителя
    'from_name' => 'OOO "Катрон" '   // Имя отправителя
);

//Функция для получения настроек
function getConfig($key){
    global $config;
    return isset($config[$key]) ? $config[$key] : null;
}

?>

