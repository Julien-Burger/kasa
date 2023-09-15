import "./style.scss";
import backgroundImg from "../../assets/header_image_home.svg";
import { Link } from "react-router-dom";
import Apartment from "../../components/apartment";
import { useFetch } from "../../utils";

function Home() {
	const { data } = useFetch("appartements.json");

	return (
		<div className="home">
			<section>
				<img src={backgroundImg} alt="Une falaise" />
				<div></div>
				<h1>Chez vous, partout et ailleurs</h1>
			</section>

			<article>
				{data.map((apartment, index) => {
					return (
						<Link key={apartment.id} to={`/apartment/${apartment.id}`}>
							<Apartment cover={apartment.cover} name={apartment.title} />
						</Link>
					);
				})}
			</article>
		</div>
	);
}

export default Home;
