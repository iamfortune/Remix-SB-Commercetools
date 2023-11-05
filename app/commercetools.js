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

export const client = createClient({
	middlewares: [authMiddleware, httpMiddleware],
});
