import { Application } from "https://deno.land/x/oak@v12.1.0/application.ts";

import { router } from "./src/routes/routes.ts";

const port = Number(Deno.env.get('PORT')) || 8000;
const app = new Application();

app .use(
		router.routes()
	)
	.use(async (ctx) => {
		await ctx.send({
			root: `${Deno.cwd()}/src/static`,
		})
	})
	.listen({port: port});

app.addEventListener("listen", ({ hostname, port, secure }) => {
		console.log(
			`Listening on: ${secure ? "https://" : "http://"}${
			hostname ?? "localhost"
			}:${port}`,
		);
	});


