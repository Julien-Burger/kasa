import "./style.scss";

import kasaLogo from "../../assets/kasa_logo_white.svg";

function Footer() {
	return (
		<footer className="footer">
			<img src={kasaLogo} alt="Logo de Kasa" />
			<span>&copy; 2020 Kasa. All rights reserved</span>
		</footer>
	);
}

export default Footer;
