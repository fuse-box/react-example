const { FuseBox, SVGPlugin, CSSPlugin, BabelPlugin } = require("fuse-box");
let fuse = new FuseBox({
    homeDir: "src/",
    sourcemaps: true,
    output: "build/$name.js",
    plugins: [
        SVGPlugin(),
        CSSPlugin(),
        BabelPlugin()
    ]
});

fuse.dev();
fuse.bundle("app")
    .watch().hmr()
    .instructions("> index.jsx")

fuse.run();