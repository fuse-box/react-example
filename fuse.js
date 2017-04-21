const { FuseBox, SVGPlugin, CSSPlugin, BabelPlugin } = require("fuse-box");

// FuseBox 2.0 is coming soon!
// http://fuse-box.org:3333/

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