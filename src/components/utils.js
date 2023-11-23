export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const wait = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms ? ms : 1000));
