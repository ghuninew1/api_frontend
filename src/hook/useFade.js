import { useState, useEffect } from "react";

class FadeInAnimation {
    constructor(node) {
        this.node = node;
    }
    start(duration) {
        this.duration = duration;
        this.onProgress(0);
        this.startTime = performance.now();
        this.frameId = requestAnimationFrame(() => this.onFrame());
    }
    onFrame() {
        const timePassed = performance.now() - this.startTime;
        const progress = Math.min(timePassed / this.duration, 1);
        this.onProgress(progress);
        if (progress === 1) {
            this.stop();
        } else {
            // We still have more frames to paint
            this.frameId = requestAnimationFrame(() => this.onFrame());
        }
    }
    onProgress(progress) {
        this.node.style.opacity = progress;
    }
    stop() {
        cancelAnimationFrame(this.frameId);
        this.startTime = null;
        this.frameId = null;
        this.duration = 0;
    }
}

export function useFade(duration) {
    const [ref, setRef] = useState(null);
    useEffect(() => {
        const animation = new FadeInAnimation(ref);
        animation.start(duration);
        return () => {
            animation.stop();
        };
    }, [ref, duration]);
    return [setRef];
}

export function useFadeIn(ref, duration) {
    useEffect(() => {
        const animation = new FadeInAnimation(ref.current);
        animation.start(duration);
        return () => {
            animation.stop();
        };
    }, [ref, duration]);
}
