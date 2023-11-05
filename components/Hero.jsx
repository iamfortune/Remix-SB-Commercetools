import { storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => {
	return (
		<div className="sb-hero flex items-center" {...storyblokEditable(blok)}>
			<div style={{ minWidth: 300 }}>
				<h2 className="mb-4">{blok?.headline}</h2>
				<p>{blok?.description}</p>
			</div>

			<img
				src={blok?.image?.filename}
				alt={blok?.image?.name}
			/>
		</div>
	);
};


export default Hero;
