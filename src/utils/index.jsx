import { useState, useEffect } from "react";

export function useFetch(url) {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function useFetch(url) {
			const response = await fetch(url);
			const data = await response.json();

			setData(data);
		}

		useFetch(url);
	}, []);

	return { data };
}
