import { NavLink, Link } from "react-router-dom";
import "./style.scss";

import kasaLogo from "../../assets/kasa_logo.svg";

function Header() {
	return (
		<header className="header">
			<Link to="/">
				<img src={kasaLogo} alt="Logo de Kasa" />
			</Link>

			<nav>
				<ul>
					<NavLink to="/">Accueil</NavLink>
					<NavLink to="/about">A propos</NavLink>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
