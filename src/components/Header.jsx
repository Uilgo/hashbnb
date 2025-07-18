import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-md">
      <div className="sm:px8 mx-auto flex max-w-[90rem] items-center justify-between px-4 py-4">
        <Link to="/" className="flex gap-1">
          <img
            src="https://cdn.prod.website-files.com/61b9e0dd381626819c8d4f83/65e2198d48039ba6444f602b_logo%20hashtag%20-%20h.webp"
            alt="Logo da Hashtag Treinamentos"
          />

          <p className="text-4xl font-bold text-[var(--color-primary-400)]">
            ashtag
          </p>
        </Link>

        <div className="hidden items-center rounded-full border border-gray-200 px-4 py-2 shadow-md lg:flex">
          <p className="border-r border-r-gray-300 px-4"> Qualquer Lugar </p>
          <p className="border-r border-r-gray-300 px-4"> Qualquer Semana </p>
          <p className="px-4"> Hóspedes </p>

          <div className="rounded-full bg-[var(--bg-primary-400)] p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
              role="img"
              aria-labelledby="searchIconTitle"
            >
              <title id="searchIconTitle">Ícone de lupa para busca</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>

        <Link
          to="/login"
          className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-gray-600"
            role="img"
            aria-labelledby="menuIconTitle"
          >
            <title id="menuIconTitle">Ícone de menu</title>
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8 text-gray-600"
            role="img"
            aria-labelledby="userIconTitle"
          >
            <title id="userIconTitle">Ícone de perfil de usuário</title>
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>

          <p className="max-w-20 truncate sm:max-w-32"> Igor Elias </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
