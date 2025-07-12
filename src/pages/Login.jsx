import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-8 outline-none">
        <h1 className="text-3xl font-bold"> Fazer Login </h1>

        <form className="flex w-full flex-col gap-4">
          <input
            type="email"
            className="w-full rounded-full bg-gray-200 px-4 py-2"
            placeholder="Digite seu email"
          />
          <input
            type="password"
            className="w-full rounded-full bg-gray-200 px-4 py-2"
            placeholder="Digite sua senha"
          />
          <button
            type="button"
            className="w-full cursor-pointer rounded-full bg-[var(--color-primary-400)] px-4 py-2 font-bold text-white"
          >
            Login
          </button>
        </form>

        <p>
          Ainda não tem conta?
          <Link to="/register" className="font-semibold">
            {" "}
            Registre-se aqui!{" "}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
