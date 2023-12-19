export function cx(...classNames) {
    return classNames.filter(Boolean).join(" ");
}

export function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const delay = (s = 1000, fn) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fn());
        }, s);
    });
};

export const toTop = () =>
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

export function isInBrowser() {
    return (
        typeof window !== "undefined" &&
        typeof window.document !== "undefined" &&
        typeof window.document.createElement !== "undefined"
    );
}
// export const toBottom = () => {
//     window.scrollTo({
//         top: document.body.scrollHeight,
//         behavior: "smooth",
//     });
// };

// export const toElement = (element) => {
//     if (!element) {
//         return;
//     }
//     element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//     });
// };

// export const toElementById = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//         toElement(element);
//     }
// };

// export const toElementByClass = (className) => {
//     const element = document.getElementsByClassName(className)[0];
//     if (element) {
//         toElement(element);
//     }
// };

// export const formatNumber = new Intl.NumberFormat("th", {
//     minimumFractionDigits: 1,
//     maximumFractionDigits: 4,
// }).format;

// export const formatTime = new Intl.DateTimeFormat("th", {
//     dateStyle: "short",
//     timeStyle: "medium",
// }).format;
