import { Router } from "https://deno.land/x/oak@v12.1.0/router.ts";
import { renderFile } from "npm:pug@3.0.2";

import { router09 } from "./routes_eje_dgr_09.ts";

const router = new Router()
    .get('/', async (ctx) => {
        const vars = {
            title: 'Un Proyecto con Deno - Página Principal',
            main_title: 'A Deno Project',
            path: ctx.request.url.pathname
        }

        ctx.response.body =
            await renderFile(
                `${Deno.cwd()}/src/views/base_template.pug`, 
                vars
            ); 
    })
    .get('/tests', async (ctx) => {
        const vars = {
            title: 'Un Proyecto con Deno - Página Principal',
            main_title: 'A Deno Project',
            path: ctx.request.url.pathname
        }

        ctx.response.body =
            await renderFile(
                `${Deno.cwd()}/src/views/base_template.pug`, 
                vars
            ); 
    })
    .use(
        '/eje-dgr-09',
        router09.routes(),
        router09.allowedMethods()
    )
    .get('/eje-dgr-10', async (ctx) => {
        const vars = {
            title: 'Un Proyecto con Deno - Ejercicio 10',
            main_title: 'Ejercicio 10',
            path: ctx.request.url.pathname
        }

        ctx.response.body =
            await renderFile(
                `${Deno.cwd()}/src/views/eje_dgr_10/eje_dgr_10.pug`, 
                vars
            ); 
    });



export { router }
