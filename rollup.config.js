import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import serve from "rollup-plugin-serve";
import replace from "@rollup/plugin-replace";

export default [
  {
    input: "src/index.ts",
    output: {
      name: "react-flex-images",
      file: "dist/index.js",
      format: "umd",
    },
    plugins: [commonjs(), typescript()],
  },
  {
    input: "demo/index.tsx",
    output: {
      file: "demo/index.js",
      format: "umd",
    },
    plugins: [
      replace({
        "process.env.NODE_ENV": JSON.stringify("development"),
      }),
      nodeResolve(),
      commonjs(),
      typescript(),
      serve(["build", "demo"]),
    ],
  },
];
