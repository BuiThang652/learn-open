import "./header.scss";
import Logo from "../../accept/img/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <a href="/" className="logo-a">
        <img
          src={Logo}
          alt="Logo"
          width="32px"
          height="32px"
          className="header-logo"
        />
      </a>
      <div className="header-nav">
        <ul>
          <li>
            <a href="/#">Documentation</a>
          </li>
          <li>
            <a href="/#" className="su">
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
