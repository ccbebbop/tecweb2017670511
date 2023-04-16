import { Router } from "https://deno.land/x/oak@v12.1.0/router.ts";
import { renderFile } from "npm:pug@3.0.2";

import { hola, productos } from "../controllers/eje_dgr_09.ts"


const router09 = new Router()
    .get('/', async (ctx) => {
        const vars = {
            title: 'Un Proyecto con Deno - Ejercicio 09',
            main_title: 'Ejercicio 09',
            path: ctx.request.url.pathname
        }

        ctx.response.body = 
            await renderFile(
                `${Deno.cwd()}/src/views/eje_dgr_09/eje_dgr_09.pug`, 
                vars
            ); 
    })
    .get('/hola', hola)
    .get('/productos', productos);

export { router09 }

