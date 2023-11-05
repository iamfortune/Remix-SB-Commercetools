import { storyblokEditable } from "@storyblok/react";

const ProductFeature = ({ blok }) => {
	return (
		<div style={{ marginTop: "10rem" }} {...storyblokEditable(blok)}>
			<h2 style={{ fontSize: 24 }} className="text-center">
				{blok.headline}
			</h2>

			<img
				alt={blok.headline}
				src={blok?.product?.items[0]?.image}
				style={{ margin: "20px auto", objectFit: "cover" }}
			/>

			<h3 style={{ fontSize: 20, marginTop: 8 }} className="text-center">
				{blok?.product?.items[0]?.description}
			</h3>
		</div>
	);
};

export default ProductFeature;

