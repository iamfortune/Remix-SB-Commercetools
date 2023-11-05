import { cssBundleHref } from "@remix-run/css-bundle";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import stylesheet from "./tailwind.css";
import Page from "../components/Page";
import ProductGrid from "../components/ProductGrid";
import ProductFeature from "../components/ProductFeature";
import ProductSlider from "../components/ProductSlider";
import Hero from "../components/Hero";

storyblokInit({
	accessToken: process.env.REACT_APP_STORYBLOK_API_KEY,
	use: [apiPlugin],
	components: {
		hero: Hero,
		page: Page,
		"product-grid": ProductGrid,
		"product-feature": ProductFeature,
		"product-slider": ProductSlider,
	},
});

export const links = () => [
	{ rel: "stylesheet", href: stylesheet },
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
