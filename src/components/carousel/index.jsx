import { useState } from "react";
import "./style.scss";
import arrow from "../../assets/collapse_arrow.svg";

function Carousel({ pictures }) {
	const [index, setIndex] = useState(0);

	function handleArrowClick(back) {
		if (back) {
			if (index === 0) {
				setIndex(pictures.length - 1);
				return;
			}

			setIndex(index - 1);
		} else {
			if (index === pictures.length - 1) {
				setIndex(0);
				return;
			}

			setIndex(index + 1);
		}
	}

	return (
		<div className="carousel">
			{pictures.length > 1 && (
				<button className="carousel-back-arrow" onClick={() => handleArrowClick(true)}>
					<img src={arrow} alt="Flèche" />
				</button>
			)}
			<img src={pictures[index]} />
			{pictures.length > 1 && (
				<span>
					{index + 1}/{pictures.length}
				</span>
			)}
			{pictures.length > 1 && (
				<button className="carousel-forward-arrow" onClick={() => handleArrowClick(false)}>
					<img src={arrow} alt="Flèche" />
				</button>
			)}
		</div>
	);
}

export default Carousel;
