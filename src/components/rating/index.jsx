import "./style.scss";

function Rating({ rating }) {
	return (
		<div className="rating">
			{Array(rating)
				.fill()
				.map(() => {
					return <i className="fa-solid fa-star activeStar"></i>;
				})}
			{Array(5 - rating)
				.fill()
				.map(() => {
					return <i className="fa-solid fa-star noneActiveStar"></i>;
				})}
		</div>
	);
}

export default Rating;
