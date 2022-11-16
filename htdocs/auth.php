<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    $website_title = 'Авторизация';
    require 'blocks/head.php'; ?>

</head>

<body>

    <?php require 'blocks/header.php'; ?>


    <main class="container mt-5 ">
        <div class="row">
            <div class="col-md-8 mb-3">
                <?php
                if ($_COOKIE['log'] == ''):
                ?>
                <h4>Вход</h4>
                <form action="" method="post">


                    <label for="login">Логин</label>
                    <input type="text" name="login" id="login" class="form-control">

                    <label for="password">Пароль</label>
                    <input type="password" name="password" id="password" class="form-control">

                    <div class="alert alert-danger mt-2" id="errorBlock"></div>
                    <button type="button" id="auth_user" class="btn btn-danger mt-4">
                        Войти
                    </button>
                </form>
                <?php else: ?>
                <h2>
                    <?='Кабинет пользователя ' . $_COOKIE['log'] ?>
                </h2>
                <button class="btn btn-danger mt-4" id="exit_btn">Выход</button>

                <?php endif ?>

            </div>
            <?php require 'blocks/aside.php'; ?>

        </div>

    </main>
    <?php require 'blocks/footer.php'; ?>



    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script>

        $('#auth_user').click(function () {

            var login = $('#login').val();
            var password = $('#password').val();

            $.ajax({
                url: 'ajax/auth.php',
                type: 'POST',
                cache: false,
                data: {
                    'login': login, 'password': password
                },
                dataType: 'html',
                success: function (data) {
                    if (data == 'ready') {
                        $('#auth_user').text('Готово');
                        $('#auth_user').removeClass('btn-danger').addClass('btn-success');
                        $('#errorBlock').hide();
                        document.location.reload();
                    }
                    else {
                        $('#errorBlock').show();
                        $('#errorBlock').text(data);

                    }
                }

            });

        })

        //
        $('#exit_btn').click(function () {


            $.ajax({
                url: 'ajax/exit.php',
                type: 'POST',
                cache: false,
                data: {},
                dataType: 'html',
                success: function (data) {
                    document.location.reload(true);

                }
            }
            )

        });


    </script>
















    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"></script>


</body>

</html>