/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                gray: {
                    900: "#202225",
                    800: "#2f3136",
                    700: "#36393f",
                    600: "#4f545c",
                    400: "#d4d7dc",
                    300: "#e3e5e8",
                    200: "#ebedef",
                    100: "#f2f3f5",
                },
                green: {
                    900: "#0a8c00",
                    800: "#0daa00",
                    700: "#0fc700",
                    600: "#0fd900",
                    500: "#0fe600",
                    400: "#0ff200",
                    300: "#1cff00",
                    200: "#3dff00",
                    100: "#6aff00",
                },

                primary: "#0a8c00",
                secondary: "#0daa00",
            },
            fontSize: {
                10: "10px",
                12: "12px",
                14: "14px",
                18: "18px",
            },
            borderWidth: {
                1: "1px",
                2: "2px",
            },
            borderColor: {
                color: "rgba(0, 0, 0, 0.1)",
            },
            width: {
                400: "400px",
                760: "760px",
                780: "780px",
                800: "800px",
                1000: "1000px",
                1200: "1200px",
                1400: "1400px",
            },
            height: {
                1: "1em",
                2: "2em",
                2.5: "2.5em",
                3: "3em",
                4: "4em",
                5: "5em",
                80: "80px",
                100: "100px",
                200: "200px",
                300: "300px",
                400: "400px",
                500: "500px",
                600: "600px",
                700: "700px",
                800: "800px",
                900: "900px",
                1000: "1000px",
            },
            spacing: {
                88: "22rem",
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents }) {
            addComponents({
                ".anim-arrow-idle": {
                    animation: "arrowIdle 2s ease infinite",
                },

                ".anim-zoom-out": {
                    animation: "zoomOut 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
                ".anim-zoom-out-up": {
                    animation: "zoomOutUp 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
                ".anim-zoom-out-down": {
                    animation: "zoomOutDown 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
                ".anim-zoom-out-left": {
                    animation: "zoomOutLeft 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
                ".anim-zoom-out-right": {
                    animation: "zoomOutRight 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
                ".anim-zoom-in": {
                    animation: "zoomIn 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
                ".anim-zoom-in-up": {
                    animation: "zoomInUp 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
                ".anim-zoom-in-down": {
                    animation: "zoomInDown 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
                ".anim-zoom-in-left": {
                    animation: "zoomInLeft 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
                ".anim-zoom-in-right": {
                    animation: "zoomInRight 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
                ".anim-fade-in": {
                    animation: "fadeIn 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
                ".anim-fade-in-up": {
                    animation: "fadeInUp 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
                ".anim-fade-in-down": {
                    animation: "fadeInDown 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
                ".anim-fade-in-left": {
                    animation: "fadeInLeft 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
                ".anim-fade-in-right": {
                    animation: "fadeInRight 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
                ".anim-fade-out": {
                    animation: "fadeOut 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
                ".anim-fade-out-up": {
                    animation: "fadeOutUp 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
                ".anim-fade-out-down": {
                    animation: "fadeOutDown 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
                ".anim-fade-out-left": {
                    animation: "fadeOutLeft 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
                ".anim-fade-out-right": {
                    animation: "fadeOutRight 0.8s ease",
                    animationIterationCount: "1",
                    animationFillMode: "forwards",
                },
            });
        }),
    ],
};
