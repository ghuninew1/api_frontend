import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "node:fs";
// import { ngrok } from "vite-plugin-ngrok";
// import { compression } from "vite-plugin-compression2";

const __dirname = path.resolve();
// const { NGROK_AUTH_TOKEN } = loadEnv("", process.cwd(), "NGROK");

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // ngrok({ authtoken: NGROK_AUTH_TOKEN }),
        // compression({
        //     include: [/\.(js)$/, /\.(css)$/, /\.(jsx)$/, /\.(html)$/],
        //     deleteOriginalAssets: true,
        // }),
    ],
    server: {
        open: true,
        host: true,
        port: 6440,
        headers: {
            "Cache-Control": "no-store",
        },
        https: {
            key: fs.readFileSync(
                path.resolve(__dirname, "src/utils/ssl", "key.pem")
            ),
            cert: fs.readFileSync(
                path.resolve(__dirname, "src/utils/ssl", "cert.pem")
            ),
        },
        // proxy: {
        //     "/api": {
        //         target: import.meta.env.VITE_HOST_API,
        //         changeOrigin: true,
        //         secure: false,
        //         ws: true,
        //         rewrite: (path) => path.replace(/^\/api/, ""),
        //     },
        // },
    },
    resolve: {
        alias: {
            "#": path.resolve(__dirname, "./src/"),
        },
    },
});
