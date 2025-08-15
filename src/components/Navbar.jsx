import { Link } from "react-router-dom";
import Switch from "./Switch";

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
         
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Accordian">
                Accordian
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Text">
                Text
              </Link>
            </li>
                  
          </ul>
          <form className="d-flex text-light" role="search" >
            <Switch btnText={props.btnText} toggleMode={props.toggleMode} />
          </form>
        </div>
      </div>
    </nav>
  );
}
