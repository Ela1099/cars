<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
// Подключение библиотеки
require 'src/Exception.php';

require 'src/PHPMailer.php';
require 'src/SMTP.php';

$mail= new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru','language');
$mail->isHTML(true);



$mail->setFrom('9215965587@mail.ru', 'Заявка с сайта'); // Адрес самой почты и имя отправителя
$mail->addAddress('9215965587@mail.ru');
$mail->Subject= 'Заявка с сайта';

$body = '<h1>Заявочку оформить и перезвонить!</h1>';

if(trim(!empty($_POST['username']))){
    $body.='<p><strong>Имя: </strong>' .$_POST['username'].'</p>';
}
if(trim(!empty($_POST['usernumber']))){
    $body.='<p><strong>Телефон: </strong>' .$_POST['usernumber'].'</p>';
}
if(trim(!empty($_POST['message']))){
    $body.='<p><strong>Комментарий: </strong>' .$_POST['message'].'</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
    $message = 'Ошибка:'. $mail->ErrorInfo;
} else {
    $message = 'Данные отправлены';

}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>


