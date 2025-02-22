import { Link } from "react-router-dom";
import balancee from "/balancee-logo.png";

const Navbar = () => {
  return (
    <div className="container mx-auto hidden lg:block">
      <div className="p-4 xl:px-0">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img src={balancee} alt="balancee-logo" />
            </Link>
          </div>

          <nav>
            <ul className="flex justify-between items-center gap-10">
              <li className="nav-li font-medium text-gray-500 transition-all hover:text-[#0870A7] hover:border-b-2 focus:text-[#0870A7] focus:border-b-2 active:text-[#0870A7] active:border-b-2">
                <Link to="/"> Home</Link>
              </li>
              <li className="nav-li font-medium text-gray-500 transition-all hover:text-[#0870A7] hover:border-b-2 focus:text-[#0870A7] focus:border-b-2 active:text-[#0870A7] active:border-b-2">
                <Link to="/History">History</Link>
              </li>
              <Link to="/Cashout">
                <li className="cursor-pointer font-medium text-gray-50 rounded-3xl bg-[#0870A7] p-3 hover:bg-[#086fa7d6] transition-all">
                  Cash Out
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
