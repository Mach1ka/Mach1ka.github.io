<div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 mt-2  border-bottom">
    <a href="/" class="d-flex align-items-center text-dark text-decoration-none">

        </svg>

        <span class="fs-4 ms-5">PHP Blog</span>
    </a>

    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <!-- <a class="me-3 py-2 text-dark text-decoration-none" href="#">Features</a> -->

    </nav>
    <?php if ($_COOKIE['log'] == ''):
    ?>
    <a href="../auth.php" class="btn btn-outline-primary me-2 mt-2">Sing in</a>
    <a href="../reg.php" class="btn btn-outline-primary me-5  mt-2">Sign up</a>
    <?php else:
    ?>
    <a href="../auth.php" class="btn btn-outline-primary me-5 mt-2">Кабинет Пользователя</a>
    <?php
    endif
    ?>
</div>