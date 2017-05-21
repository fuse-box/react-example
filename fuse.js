const {
    FuseBox,
    SVGPlugin,
    CSSPlugin,
    OptimisedBundlePlugin,
    WebIndexPlugin,
    BabelPlugin
} = require("fsbx");


let fuse = new FuseBox({
    homeDir: "src/",
    sourcemaps: true,
    output: "build/$name.js",
    plugins: [
        WebIndexPlugin({
            title: "React Demo",
            template: "src/index.html"
        }),
        OptimisedBundlePlugin(),
        SVGPlugin(),
        CSSPlugin(),
        BabelPlugin()
    ]
});

fuse.dev();
fuse.bundle("app")
    .instructions("> index.jsx")

fuse.run();