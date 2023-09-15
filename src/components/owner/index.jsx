import "./style.scss";

function Owner({ name, picture }) {
	return (
		<div className="owner">
			<span>{name}</span>
			<img src={picture} alt="Photo du propriétaire" />
		</div>
	);
}

export default Owner;
