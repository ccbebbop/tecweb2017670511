import { Context } from "https://deno.land/x/oak@v12.1.0/context.ts";

const hola = (ctx: Context) => {
    ctx.response.body = 'Hola! este es un servidor en Deno ' +
        'y el equivalente de Express.js en ' +
        'Deno, Oak, sin embargo también se puede ' +
        'Express.js.';
};

const productos = (ctx: Context) => {
    ctx.response.body = 'Pagina de productos';
};

export {
    hola,
    productos,
};
