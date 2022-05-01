import { build } from "esbuild";

build({
  entryPoints: ["./src/main.ts"],
  outdir: "./esbuild_dist",
  bundle: true,
  minify: true,
})