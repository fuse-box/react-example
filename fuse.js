const { FuseBox, Sparky, WebIndexPlugin, SVGPlugin, CSSPlugin, QuantumPlugin } = require("fuse-box");
const { src, task, watch, context, fuse } = require("fuse-box/sparky");


context(class {
    getConfig() {
        return FuseBox.init({
            homeDir: "src",
            output: "dist/$name.js",
            target : "browser@es5",
            hash: this.isProduction,
            useTypescriptCompiler : true,
            plugins: [
                CSSPlugin(),
                SVGPlugin(),
                WebIndexPlugin({
                    template : "src/index.html"
                }),
                this.isProduction && QuantumPlugin({
                    bakeApiIntoBundle: "app",
                    uglify: true,
                    css : true
                })
            ]
        })
    }
    createBundle(fuse) {
        const app = fuse.bundle("app");
        if (!this.isProduction) {
            app.watch()
            app.hmr()
        }
        app.instructions(">index.jsx");
        return app;
    }
});

task("clean", () => src("dist").clean("dist").exec() )

task("default", ["clean"], async context => {
    const fuse = context.getConfig();
    fuse.dev();
    context.createBundle(fuse);
    await fuse.run();
});

task("dist", ["clean"], async context => {
    context.isProduction = true;
    const fuse = context.getConfig();
    fuse.dev(); // remove it later
    context.createBundle(fuse);
    await fuse.run();
});