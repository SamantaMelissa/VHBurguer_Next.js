//ESTRUTURA PADRÃO!
const Login = () => {
    return (
        <>
            <main>
                <img src="" alt="" />
                <aside>
                    <h1>Login</h1>
                    <form action="">
                        <div className="campo_form">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" placeholder="email@exemplo.com" required />
                        </div>
                        <div className="campo_form">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="*******" required />
                        </div>
                        <a href="">Esqueceu sua senha?</a>
                        <button>Entrar</button>
                    </form>
                </aside>
            </main>
        </>
    )
}

export default Login;