import type { Variants } from "motion/react";

export const overlayVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.2 },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.15 },
    },
};

export const modalVariant: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: -20,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 25,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        y: 20,
        transition: { duration: 0.15 },
    },
};
