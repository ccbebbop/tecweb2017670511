import * as esbuild from 'https://deno.land/x/esbuild@v0.17.12/mod.js'

await esbuild.build({
	entryPoints: [Deno.args[0]],
	write: true,	
	outdir: Deno.args[1],
	allowOverwrite: true,
});

esbuild.stop()
