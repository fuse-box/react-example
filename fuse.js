const fsbx = require("fuse-box");


// Create FuseBox Instance
let fuseBox = new fsbx.FuseBox({
    homeDir: "src/",
    sourceMap: {
        bundleReference: "sourcemaps.js.map",
        outFile: "./build/sourcemaps.js.map",
    },
    outFile: "./build/out.js",
    plugins: [
        fsbx.SVGPlugin(),
        fsbx.CSSPlugin(),
        fsbx.BabelPlugin()
    ]
});

fuseBox.devServer(">index.jsx");