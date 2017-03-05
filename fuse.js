const { FuseBox, SVGPlugin, CSSPlugin, BabelPlugin } = require("fuse-box");


// Create FuseBox Instance
let fuse = new FuseBox({
    homeDir: "src/",
    sourcemaps: true,
    outFile: "./build/out.js",
    plugins: [
        SVGPlugin(),
        CSSPlugin(),
        BabelPlugin()
    ]
});

fuse.devServer(">index.jsx");