import { VariantTypes } from "../../../styles/theme";
import { ProgressbarContainerStyle, ProgressbarStyle } from "./styled";
import type { Variants } from "motion/react";
import { motion } from "framer-motion";

interface ProgressbarProps {
    progress: number;
    color?: VariantTypes | string;
    height?: number;
}

export default function Progressbar({
    progress,
    color,
    height,
}: ProgressbarProps) {
    const clampProgress = Math.min(100, Math.max(0, progress));
    const overlayVariant: Variants = {
        initial: { width: "0%" },
        animate: {
            width: `${clampProgress}%`,
            transition: { duration: 1.5, ease: "easeOut" },
        },
    };

    return (
        <ProgressbarContainerStyle>
            <ProgressbarStyle
                $color={color}
                $height={height}
                as={motion.span}
                initial="initial"
                animate="animate"
                variants={overlayVariant}
            />
        </ProgressbarContainerStyle>
    );
}
