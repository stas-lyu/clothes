$("#order").click(() => {
    let name = $('input[name=fio]').val();
    let tel = $('input[name=tel]').val();
    let send = true;
    if (name === "") {
        send = false;
    } else if (tel === "") {
        send = false
    }

    if (send) {
        let userInfo = {
            'user_name': name,
            'user_tel': tel,
        };

        $.post('send.php', userInfo)
    }
});