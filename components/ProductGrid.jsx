import { Link } from "@remix-run/react";
import { storyblokEditable } from "@storyblok/react";

const ProductGrid = ({ blok }) => {
	const getSlug = (name) => {
		return name.toLowerCase().trim().replaceAll(" ", "-");
	};

	return (
		<div {...storyblokEditable(blok)} className="sb-product-grid">
			<h1>Products</h1>

			<div className="flex flex-wrap">
				{blok?.products?.items.map((item) => (
					<div key={item?.name} className="img-wrapper">
						<Link to={`/product/${getSlug(item?.id)}`}>
							<img key={item?.id} src={item?.image} alt={item?.name} />
						</Link>
						<h4 className="font-bold">{item?.name}</h4>
						<p>{item?.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductGrid;
