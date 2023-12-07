
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000030_1550710829_ninjasicon.png"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <h1 className="text-2xl font-bold">
            <Link href="/">
              My News App
              <a className="hover:text-gray-300"></a>
            </Link>
          </h1>
        </div>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/registration">
                Register
                <a className="hover:text-gray-300"></a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                Login
                <a className="hover:text-gray-300"></a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
