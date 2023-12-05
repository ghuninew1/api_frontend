/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                main: "#F2F2F2",
                primary: "#0D0D0D",
                secondary: "#1A1A1A",
            },
            fontSize: {
                10: "10px",
                12: "12px",
                14: "14px",
                18: "18px",
            },
            backgroundColor: {
                "main-bg": "#0D0D0D",
                "main-dark-bg": "#0D0D0D",
                "secondary-dark-bg": "#1A1A1A",
                "half-transparent": "rgba(0, 0, 0, 0.5)",
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
            minHeight: {
                400: "400px",
                500: "500px",
                590: "590px",
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents }) {
            addComponents({
                ".divider": {
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#1A1A1A",
                },
                ".card": {
                    backgroundColor: "#1A1A1A",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
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
