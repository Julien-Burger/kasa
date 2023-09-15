import "./style.scss";
import Collapse from "../../components/collapse";
import backgroundImg from "../../assets/header_image_about.svg";
import { useFetch } from "../../utils";

function About() {
	const { data } = useFetch("/about.json");

	return (
		<div className="about">
			<section className="headerImg">
				<img src={backgroundImg} alt="Une falaise" />
			</section>

			<section className="collapses">
				{data.map(value => {
					return <Collapse key={value.id} title={value.title} content={[value.content]} />;
				})}
			</section>
		</div>
	);
}

export default About;
