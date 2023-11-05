import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { createClient } from "@commercetools/sdk-client";
import { createAuthMiddlewareForClientCredentialsFlow } from "@commercetools/sdk-middleware-auth";
import { createHttpMiddleware } from "@commercetools/sdk-middleware-http";

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
	host: process.env.REACT_APP_CT_AUTH_URL,
	projectKey: process.env.REACT_APP_CT_PROJECT_KEY,
	credentials: {
		clientId: process.env.REACT_APP_CT_CLIENT_ID,
		clientSecret: process.env.REACT_APP_CT_CLIENT_SECRET,
	},
	scopes: [process.env.REACT_APP_CT_PRODUCT_SCOPES],
});

const httpMiddleware = createHttpMiddleware({
	host: "https://api.europe-west1.gcp.commercetools.com",
});

const client = createClient({
	middlewares: [authMiddleware, httpMiddleware],
});

export const loader = async () => {
	const res = await client.execute({
		uri: `/${process.env.REACT_APP_CT_PROJECT_KEY}/products`,
		method: "GET",
	});

	return json(res.body.results);
};

const FetchProducts = () => {
	let products = useLoaderData();

	return (
		<section className="sb-section">
			<Link to="/">
				<h3 className="text-black text-3xl">Anime Store</h3>
			</Link>

			<main className="!mt-20">
				<pre>{JSON.stringify(products, null, 2)}</pre>
			</main>
		</section>
	);
};

export default FetchProducts;
