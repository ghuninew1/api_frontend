/** @type {import('tailwindcss').Config} */
import { animations, keyframes } from "#utils/keyframe.js";

export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontSize: {
                10: "10px",
                12: "12px",
                14: "14px",
                18: "18px",
            },
            height: {
                1: "1em",
                2: "2em",
                2.25: "2.25em",
                2.5: "2.5em",
                2.75: "2.75em",
                3: "3em",
                4: "4em",
                5: "5em",
            },
            colors: {
                transparent: "transparent",
                primary: "#2563EB",
                secondary: "#F3F4F6",
                danger: "#EF4444",
                success: "#10B981",
                warning: "#F59E0B",
                info: "#3B82F6",
                light: "#F9FAFB",
            },

            keyframes: keyframes,
            animation: animations,
        },
    },
};
