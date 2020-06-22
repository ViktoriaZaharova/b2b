<?php

$recepient = "info@mail.ru"; //заменить на свой почтовый ящик
$sitename = "B2B";

$phone = trim($_POST["phone"]);
$email = trim($_POST["mail"]);

$message = "Телефон: $phone \nE-mail: $email";

$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");