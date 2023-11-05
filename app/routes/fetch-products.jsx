import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { client } from "../commercetools";

export const loader = async () => {
	const res = await client.execute({
		uri: `/${process.env.REACT_APP_CT_PROJECT_KEY}/products/`,
		method: "GET",
	});

	return json(res.body.results);
};

const FetchProducts = () => {
	let products = useLoaderData();

	return (
		<section className="sb-section">
			<Link to="/">
				<h3 className="text-black text-3xl">Remix Store</h3>
			</Link>

			<main className="!mt-20">
				<pre>{JSON.stringify(products, null, 2)}</pre>
			</main>
		</section>
	);
};

export default FetchProducts;
