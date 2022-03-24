import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import serve from "rollup-plugin-serve";
import replace from "@rollup/plugin-replace";
import styles from "rollup-plugin-styles";
import { terser } from "rollup-plugin-terser";

const dev = process.env.NODE_ENV === "development";

const config = [];

// production build

!dev &&
  config.push({
    input: "src/index.ts",
    output: {
      name: "react-flex-images",
      file: "dist/index.js",
      format: "umd",
    },
    plugins: [
      commonjs(),
      typescript(),
      styles(),
      terser({
        output: {
          comments: false,
        },
      }),
    ],
  });

// demo
dev &&
  config.push({
    input: "demo/index.tsx",
    output: {
      file: "build/demo.js",
      format: "umd",
    },
    plugins: [
      replace({
        "process.env.NODE_ENV": JSON.stringify("development"),
      }),
      nodeResolve(),
      commonjs(),
      typescript(),
      styles(),
      terser(),
      serve(["build", "demo"]),
    ],
  });

export default config;
