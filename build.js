// @ts-check
const glob = require("tiny-glob");

const [, , ...args] = process.argv;
const argsSet = new Set(args);
const watch = argsSet.has("--watch");

function onRebuild() {
  console.log(new Date(), "Rebuild completed.");
}

(async () => {
  const tsPaths = await glob("src-ts/**/index.ts");
  await require("esbuild").build({
    entryPoints: tsPaths,
    outdir: "src",
    outbase: "src-ts",
    platform: "node",
    target: "node10.9.0",
    format: "cjs",
    bundle: true,
    sourcemap: watch,
    minify: true,
    watch: watch ? { onRebuild } : false,
  });
})();
