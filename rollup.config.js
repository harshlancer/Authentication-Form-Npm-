import { defineConfig } from "rollup";
import babel from "@rollup/plugin-babel";

export default defineConfig({
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "es",
  },
  external: ["react", "react-dom"],
  plugins: [
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
    }),
  ],
});
