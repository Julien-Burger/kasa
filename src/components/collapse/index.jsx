import "./style.scss";
import arrow from "../../assets/collapse_arrow.svg";

function Collapse({ title, content }) {
	function handleOpen() {
		let header = document.querySelector(`#${title} .collapse-title`);
		let arrow = document.querySelector(`#${title} .collapse-title img`);
		let container = document.querySelector(`#${title} .collapse-content`);
		let list = document.querySelector(`#${title} .collapse-content ul`);

		if (container.style.height === "" || container.style.height === "0px") {
			container.style.height = `${list.offsetHeight}px`;
			arrow.style.rotate = "-180deg";
			header.style.borderBottomLeftRadius = "0px";
			header.style.borderBottomRightRadius = "0px";
		} else {
			container.style.height = "0px";
			arrow.style.rotate = "0deg";
			header.style.borderBottomLeftRadius = "7px";
			header.style.borderBottomRightRadius = "7px";
		}
	}

	return (
		<div id={title} className="collapse">
			<div className="collapse-title">
				<h3>{title}</h3>
				<img src={arrow} alt="Flèche" onClick={() => handleOpen()} />
			</div>

			<div className="collapse-content">
				<ul>
					{content.map(value => {
						return <li key={value}>{value}</li>;
					})}
				</ul>
			</div>
		</div>
	);
}

export default Collapse;
