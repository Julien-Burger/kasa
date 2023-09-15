import { useParams, Navigate } from "react-router-dom";
import { useFetch } from "../../utils";
import "./style.scss";
import Tag from "../../components/tag";
import Rating from "../../components/rating";
import Collapse from "../../components/collapse";
import Owner from "../../components/owner";
import Carousel from "../../components/carousel";

function Apartment() {
	const { id } = useParams();
	const { data } = useFetch("/appartements.json");

	if (data.length === 0) return;

	let apartment = data.filter(apart => {
		if (apart.id === id) return apart;
	})[0];

	if (!apartment) return <Navigate to="*" />;

	return (
		<div className="apartment">
			<Carousel pictures={apartment.pictures} />

			<div className="details">
				<div className="top-content">
					<div className="left-content">
						<div className="title">
							<h1>{apartment.title}</h1>
							<h2>{apartment.location}</h2>
						</div>

						<div className="tags">
							{apartment.tags.map(tag => {
								return <Tag key={tag} name={tag} />;
							})}
						</div>
					</div>

					<div className="right-content">
						<Owner name={apartment.host.name} picture={apartment.host.picture} />

						<Rating rating={parseInt(apartment.rating)} />
					</div>
				</div>

				<div className="bottom-content">
					<Collapse title="Description" content={[apartment.description]} />
					<Collapse title="Équipements" content={apartment.equipments} />
				</div>
			</div>
		</div>
	);
}

export default Apartment;
