import { Outlet, Link } from "react-router-dom";
import '../Home/Navbar.css';


export function Navbar() {
  return (
    <div className="contiadner">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Logout">Logout</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
