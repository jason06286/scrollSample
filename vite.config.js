import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    base: "/scrollSample/",
    define: {
      "process.env": loadEnv(mode, process.cwd()),
    },
    plugins: [
      // ...
      vue(),
      AutoImport({
        imports: ["vue", "vue-router", "vue-i18n"],
        dts: "src/auto-imports.js",
      }),
      Components({
        // 從 `./src/components/` 路徑查找
        extensions: ["vue"],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: "src/auto-components.js",
      }),
    ],

    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`,
      },
    },
  });
