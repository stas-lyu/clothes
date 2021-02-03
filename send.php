<?php
if ($_POST) {
    $to_Email = "stas-lyu@outlook.com";
    $subject = 'Запрос обратного звонка ' . $_POST["fio"];

    if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {

        $otvet_serv = json_encode(
            array(
                'text' => 'Возникла ошибка при отправке данных'
            ));

        die($otvet_serv);
    }

    if (!isset($_POST["fio"]) || !isset($_POST["tel"])) {
        $otvet_serv = json_encode(array('type' => 'error', 'text' => 'Заполните форму'));
        die($otvet_serv);
    }

    $user_Name = filter_var($_POST["fio"], FILTER_SANITIZE_STRING);
    $user_Phone = filter_var($_POST["tel"], FILTER_SANITIZE_STRING);
    $user_Email = filter_var($_POST["email"], FILTER_SANITIZE_STRING);

    if (strlen($user_Name) < 3) {
        $otvet_serv = json_encode(array('text' => 'Поле Имя слишком короткое или пустое'));
        die($otvet_serv);
    }
    if (!is_numeric($user_Phone)) {
        $otvet_serv = json_encode(array('text' => 'Номер телефона может состоять только из цифр'));
        die($otvet_serv);
    }

    $message = "Имя: " . $user_Name . ". Телефон: " . $user_Phone .  ". Email: " . $user_Email;

    if (!mail($to_Email, $subject, $message, "From: info@webriz.ru \r\n")) {
        $otvet_serv = json_encode(array('text' => 'Не могу отправить почту! Пожалуйста, проверьте ваши настройки PHP почты.'));
        die($otvet_serv);
    } else {
        $otvet_serv = json_encode(array('text' => 'Спасибо! ' . $user_Name . ', ваше сообщение отправлено.'));
        die($otvet_serv);
    }
}
?>
