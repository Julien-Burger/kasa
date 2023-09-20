import { Link } from "react-router-dom";
import Home from "../home";
import "./style.scss";
import errorImg from "../../assets/404.svg";

function Error() {
	return (
		<div className="errorPage">
			<img src={errorImg} alt="404" />

			<p>
				Oups! La page que <br /> vous demandez n'existe pas.
			</p>

			<Link to="/" element={<Home />}>
				Retourner sur la page d'accueil
			</Link>
		</div>
	);
}

export default Error;
