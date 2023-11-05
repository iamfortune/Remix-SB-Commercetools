/* eslint-disable react-hooks/exhaustive-deps */
import { json } from "@remix-run/node";
import {
	useStoryblokState,
	getStoryblokApi,
	StoryblokComponent
} from "@storyblok/react";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
	const storyblokApi = getStoryblokApi();

	const { data } = await storyblokApi.get("cdn/stories/home", {
		version: "draft",
	});

	return json(data?.story);
};

const Homepage = () => {
	let story = useLoaderData();

	story = useStoryblokState(story);

	return (
		<section className="sb-section">
			<Link to="/">
				<h3 className="text-black text-3xl">Kara Store</h3>
			</Link>

			<main className="!mt-20">
				{story?.content && <StoryblokComponent blok={story.content} />}
			</main>
		</section>
	);
};

export default Homepage;