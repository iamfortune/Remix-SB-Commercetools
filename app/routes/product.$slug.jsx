/* eslint-disable react-hooks/exhaustive-deps */
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { client } from "../commercetools";

export const loader = async (req) => {
	const id = req.params.slug;

	const res = await client.execute({
		uri: `/${process.env.REACT_APP_CT_PROJECT_KEY}/products/${id}`,
		method: "GET",
	});

	return json(res.body);
};

const ProductDetails = () => {
	let product = useLoaderData();

	const image = product?.masterData?.current?.masterVariant?.images[0]?.url;
	const name = product?.masterData?.current?.name["en-US"];
	const description = product?.masterData?.current?.description["en-US"];
	const price =
		product?.masterData?.current?.masterVariant?.prices[0]?.value?.centAmount /
		100;

	return (
		<section className="sb-section">
			<Link to="/">
				<h3 className="text-black text-3xl">Go Back</h3>
			</Link>

			<main className="!mt-20 flex items-center justify-center">
				<img
					alt={name}
					src={image}
					className="object-cover"
					style={{ width: 240, height: 320 }}
				/>
				<div className="ml-10">
					<h2 className="text-2xl font-bold mb-1">{name}</h2>
					<p>{description}</p>
					<h2 className="text-2xl font-bold mt-10 mb-4">${price}</h2>
					<button>Order now</button>
				</div>
			</main>
		</section>
	);
};

export default ProductDetails;
