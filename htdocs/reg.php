<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    $website_title = 'Регистрация';
    require 'blocks/head.php'; ?>

</head>

<body>

    <?php require 'blocks/header.php'; ?>


    <main class="container mt-5">
        <div class="row">
            <div class="col-md-8 mb-3">
                <h4>Форма Регистрации</h4>
                <form action="" method="post">
                    <label for="username">Ваше имя</label>
                    <input type="text" name="username" id="username" class="form-control">

                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" class="form-control">

                    <label for="login">Логин</label>
                    <input type="text" name="login" id="login" class="form-control">

                    <label for="password">Пароль</label>
                    <input type="password" name="password" id="password" class="form-control">

                    <div class="alert alert-danger mt-2" id="errorBlock"></div>
                    <button type="button" id="reg_user" class="btn btn-danger mt-4">
                        Зарегистрироваться
                    </button>
                </form>
            </div>
            <?php require 'blocks/aside.php'; ?>

        </div>

    </main>
    <?php require 'blocks/footer.php'; ?>



    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script>

        $('#reg_user').click(function () {
            var name = $('#username').val();
            var email = $('#email').val();
            var login = $('#login').val();
            var password = $('#password').val();

            $.ajax({
                url: 'ajax/reg.php',
                type: 'POST',
                cache: false,
                data: {
                    'username': name, 'email': email, 'login': login, 'password': password
                },
                dataType: 'html',
                success: function (data) {
                    if (data == 'ready') {
                        $('#reg_user').text('Вы зарагестрированы');
                        $('#reg_user').removeClass('btn-danger').addClass('btn-success');

                        $('#errorBlock').hide();
                    }
                    else {
                        $('#errorBlock').show();
                        $('#errorBlock').text(data);

                    }
                }

            });

        })

    </script>
















    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"></script>


</body>

</html>