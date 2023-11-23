/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0D0D0D",
                secondary: "#1A1A1A",
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents }) {
            addComponents({
                " .anim-zoom-out": {
                    animation: "zoomOut 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
                " .anim-zoom-out-up": {
                    animation: "zoomOutUp 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
                " .anim-zoom-out-down": {
                    animation: "zoomOutDown 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
                ".anim-zoom-out-left": {
                    animation: "zoomOutLeft 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
                ".anim-zoom-out-right": {
                    animation: "zoomOutRight 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
                ".anim-zoom-in": {
                    animation: "zoomIn 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
                ".anim-zoom-in-up": {
                    animation: "zoomInUp 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
                ".anim-zoom-in-down": {
                    animation: "zoomInDown 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
                ".anim-zoom-in-left": {
                    animation: "zoomInLeft 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
                ".anim-zoom-in-right": {
                    animation: "zoomInRight 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
                ".anim-fade-in": {
                    animation: "fadeIn 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
                ".anim-fade-in-up": {
                    animation: "fadeInUp 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
                ".anim-fade-in-down": {
                    animation: "fadeInDown 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
                ".anim-fade-in-left": {
                    animation: "fadeInLeft 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
                ".anim-fade-in-right": {
                    animation: "fadeInRight 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
                ".anim-fade-out": {
                    animation: "fadeOut 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
                ".anim-fade-out-up": {
                    animation: "fadeOutUp 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
                ".anim-fade-out-down": {
                    animation: "fadeOutDown 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
                ".anim-fade-out-left": {
                    animation: "fadeOutLeft 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
                ".anim-fade-out-right": {
                    animation: "fadeOutRight 0.7s ease",
                    animationIterationCount: "1",
                    animationFillMode: "both",
                },
            });
        }),
    ],
};
