<?php
$fio = $_POST['name'];
$phone = $_POST['phone'];

$fio = htmlspecialchars($fio);
$phone = htmlspecialchars($phone);

$fio = urldecode($fio);
$phone = urldecode($phone);


mail("example1@mail.ru", "Заявка с сайта", "ФИО:".$fio.". phone: ".$phone ,"From: example2@mail.ru \r\n");

if (mail("example1@mail.ru", "Заказ с сайта", "ФИО:".$fio.". phone: ".$phone ,"From: example2@mail.ru \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}