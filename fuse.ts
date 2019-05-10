import { fusebox } from "fuse-box";

const fuse = fusebox({
  cache: true,
  target: "browser",
  entry: "src/index.jsx",
  webIndex: {
    template: "src/index.html"
  },
  watch: true,
  hmr: true,
  devServer: true,
  logging: { level: "succinct" }
});
fuse.runDev();
