import { fusebox } from "fuse-box";

const fuse = fusebox({
  target: "browser",
  entry: "src/index.jsx",
  webIndex: {
    template: "src/index.html"
  },
  cache: {
    root: ".cache",
    enabled: true
  },
  watch: true,
  hmr: true,
  devServer: true,
  logging: { level: "succinct" }
});
fuse.runDev();
