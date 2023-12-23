import { Link } from "react-router-dom";

import { axiosExample, fetchExample } from "./../../routes/paths";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to={fetchExample}>fetch example</Link>
          </li>
          <li>
            <Link to={axiosExample}>axios example</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
