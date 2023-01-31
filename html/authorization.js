export default () => `
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
                    <div id="incorrect" class="text-danger"></div>
                </form>
            </div>
        </div>
    </div>
`;