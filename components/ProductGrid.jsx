import { storyblokEditable } from "@storyblok/react";
import { Link } from "react-router-dom";

const ProductGrid = ({ blok }) => {
	const getSlug = (name) => {
		return name.toLowerCase().trim().replaceAll(" ", "-");
	};

	return (
		<div {...storyblokEditable(blok)} className="sb-product-grid">
			<h1 className="text-5xl mb-6">Products</h1>

			<div className="flex flex-wrap">
				{blok?.products?.items.map((item) => (
					<div key={item?.name} className="img-wrapper mr-8 mb-8">
						<Link to={`/product/${getSlug(item?.name)}`}>
							<img key={item?.id} src={item?.image} alt={item?.name} />
						</Link>
						<h4 className="font-bold mt-1 mb-1">{item?.name}</h4>
						<p>{item?.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductGrid;
