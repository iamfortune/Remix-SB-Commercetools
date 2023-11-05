/* eslint-disable react-hooks/exhaustive-deps */
import { json } from "@remix-run/node";
import {
	useStoryblokState,
	getStoryblokApi,
	storyblokEditable,
} from "@storyblok/react";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async (req) => {
	const storyblokApi = getStoryblokApi();

  const id = req.params.slug ?? "jujutsu-kaisen";

	const { data } = await storyblokApi.get(`cdn/stories/product/${id}`, {
		version: "draft",
	});

	return json(data?.story);
};

const ProductDetails = () => {
	let product = useLoaderData();

	product = useStoryblokState(product);

	return (
		<section className="sb-section">
			<Link to="/">
				<h3 className="text-black text-3xl">Go Back</h3>
			</Link>

			<main
				className="!mt-20 flex items-center justify-center"
				{...storyblokEditable(product?.content)}
			>
				<img
					src={product?.content?.images[0]?.filename}
					alt={product?.content?.images[0]?.alt}
					style={{ width: 240, height: 320 }}
					className="object-cover"
				/>
				<div className="ml-10">
					<h2 className="text-2xl font-bold mb-1">{product?.content?.name}</h2>
					<p>{product?.content?.description}</p>
					<h2 className="text-2xl font-bold mt-10 mb-4">
						${product?.content?.price}
					</h2>
					<button>Order now</button>
				</div>
			</main>
		</section>
	);
};

export default ProductDetails;
