import "./style.scss";

function Apartment({ cover, name }) {
	return (
		<div className="apartmentPrev">
			<h3>{name}</h3>
			<div></div>
			<img src={cover} alt="Image de présentation de l'apparmtement" />
		</div>
	);
}

export default Apartment;
