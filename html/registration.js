<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="js/jquery-3.6.1.min.js"></script>
    <script src="js/navigation.js"></script>
    <script src="js/movies.js"></script>    
    <script src="js/authorization.js"></script>
    <script src="js/registration.js"></script>
    <script src="js/mainFunction.js"></script>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

<ul class="nav bg-dark d-lg-flex align-items-center" >
    <li class="nav-item">
        <a class="nav-link disabled logo" aria-current="page" href="#">Movies Catalog</a>
    </li>
    <li class="nav-item">
        <a id="movies-part" class="nav-link" aria-current="page" href="#">Фильмы</a>
    </li>
    <li class="nav-item">
        <a id="favors-part" class="nav-link d-none" href="#">Избранное</a>
    </li>
    <li class="nav-item">
        <a id="profile-part" class="nav-link d-none" aria-current="page" href="#">Мой профиль</a>
    </li>
    <li class="nav-item ms-auto">
        <div id="user-part" class="text-white"></div>
    </li>
    <li class="nav-item">
        <a id="login-part" class="nav-link" href="">Вход</a>
    </li>
    <li class="nav-item">
        <a id="reg-part" class="nav-link" href="">Регистрация</a>
    </li>
    <li class="nav-item">
        <a id="logout-part" class="nav-link d-none" href="">Выйти</a>
    </li>
</ul>

<main class="container mt-2">
    
    <div hidden>
        <div class="card" id="card-template1">
            <div class="card-body row align-items-center">
                <img  id="movie-poster" class="col-1" src="">
                <div class="col-8">
                    <div class="movie-name lead"></div>
                    <div class="movie-year"></div>
                    <div class="movie-country-genre"></div>
                </div>
                <div class="movie-rate mx-auto col-3 text-center "></div>
            </div>
        </div>
    </div>
    
    <div hidden>
        <div class="card m-3" id="movieReviews">
            <div class="card-header">
                <div class="d-flex">
                    <img class="col-md-auto me-1 my-auto" id="reviewIcon" src="" width="20px" height="30px">
                    <div class="col-8 my-auto" id="reviewUser"></div>
                    <div class="col-3 row my-auto">
                        <div class="col-6 col-md-auto">Оценка: </div>
                        <div class="col-6 col-md-auto pe-2 ps-2 text-light rounded" id="reviewRate"></div>
                        <div class="col-12" id="reviewDate"></div>
                    </div>
                </div>
            </div>
            <div class="card-body reviewText"></div>
        </div>
    </div>

    <div hidden>
        <div class="card mb-2" id="card-template2">
            <div class="card-body row">
                <img  id="movie-poster-detail" class="col-3" src="">
                <div class="col-9">
                    <div class="movie-name-detail h1 mb-1"></div>
                    <div class="movie-description-detail mb-3"></div>
                    <div class="h3 mb-3">О фильме</div>
                    <div class="border-bottom d-flex justify-content-between mb-1 pb-1">
                        <div class="my-auto">Год</div>
                        <div class="movie-year-detail ms-4"></div>
                    </div>
                    <div class="border-bottom d-flex justify-content-between mb-1 pb-1">
                        <div class="my-auto">Страна</div>
                        <div class="movie-country-detail ms-4"></div>
                    </div>
                    <div class="border-bottom d-flex justify-content-between mb-1 pb-1">
                        <div class="my-auto">Жанр</div>
                        <div class="movie-genre-detail ms-4"></div>
                    </div>
                    <div class="border-bottom d-flex justify-content-between mb-1 pb-1">
                        <div class="my-auto">Время</div>
                        <div class="movie-time-detail ms-4"></div>
                    </div>
                    <div class="border-bottom d-flex justify-content-between mb-1 pb-1">
                        <div class="my-auto">Слоган</div>
                        <div class="movie-tagline-detail ms-4"></div>
                    </div>
                    <div class="border-bottom d-flex justify-content-between mb-1 pb-1">
                        <div class="my-auto">Режиссер</div>
                        <div class="movie-director-detail ms-4"></div>
                    </div>
                    <div class="border-bottom d-flex justify-content-between mb-1 pb-1">
                        <div class="my-auto">Бюджет</div>
                        <div class="movie-budget-detail ms-4"></div>
                    </div>
                    <div class="border-bottom d-flex justify-content-between mb-1 pb-1">
                        <div class="my-auto">Сборы</div>
                        <div class="movie-fees-detail ms-4"></div>
                    </div>
                    <div class="border-bottom d-flex justify-content-between mb-1 pb-1">
                        <div class="my-auto">Возраст</div>
                        <div class="movie-age-detail bg-secondary text-light p-1 rounded"></div>
                    </div>
                </div>
                <h4 class="mt-4">Отзывы и оценки</h4>
            </div>
        </div>
    </div>

    <div id="movie-container"></div>
    
    <div id="detail-container"></div>

    <div class="registration d-none">
        <div class="card p-2 m-5" id="card-template">
            <div class="card-body row align-items-center">
                <form id="formReg">
                    <div class="mb-3">
                        <label class="form-label">Логин</label>
                        <input name="login" type="text" class="form-control" required>
                    </div>
                    <div class="row">
                        <div class="mb-3 col-6">
                            <label for="exampleInputPassword1" class="form-label">Пароль</label>
                            <input name="password" type="password" class="form-control" required>
                        </div>
                        <div class="mb-3 col-6">
                            <label for="exampleInputPassword1" class="form-label">Подтверждение пароля</label>
                            <input name="checkPassword" type="password" class="form-control" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="mb-3 col-6">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
                        </div>
                        <div class="mb-3 col-6">
                            <label class="form-label">ФИО</label>
                            <input name="fio" type="text" class="form-control" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="mb-3 col-6">
                            <label class="form-label">Дата рождения</label>
                            <input name="dob" type="date" class="form-control" required>
                        </div>
                        <div class="mb-3 col-6">
                            <label class="form-label">Пол</label>
                            <select name="gender" type="select" class="form-control" required>
                                <option>Мужской</option>
                                <option>Женский</option>
                            </select>
                        </div>
                    </div>
                    <div class="d-flex">
                        <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
                        <div class="text-danger my-auto ms-3" id="regError"></div>
                    </div>
                    </form>
            </div>
        </div>
    </div>

    <div class="authorization d-none">
        <div class="card p-2 m-5" id="card-template">
            <div class="card-body row align-items-center">
                <form id="formLog">
                    <div class="row">
                        <div class="mb-3 col-6">                    
                            <label class="form-label">Логин</label>
                            <input name="login" type="text" class="form-control">
                        </div>
                        <div class="mb-3 col-6">
                            <label for="exampleInputPassword1" class="form-label">Пароль</label>
                            <input name="password" type="password" class="form-control" required name="up">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Войти</button>
                    <button class="btn btn-secondary regLoginButton">Регистрация</button>
                    </form>
            </div>
        </div>
    </div>

</main>

<ul class="page-list list-group list-group-horizontal justify-content-center mt-2">
    <li class="list-group-item movie-page" type="button">1</li>
</ul>

</body>
</html>