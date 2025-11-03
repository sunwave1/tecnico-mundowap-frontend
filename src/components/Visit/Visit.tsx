import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import Card, { CardProps } from "../Card/Card";
import Wrapper from "./Wrapper";
import Footer from "./Footer";
import Header from "./Header";

interface RootProps {
    layoutId: string;
}

const Root: React.FC<PropsWithChildren<CardProps & RootProps>> = ({
    children,
    layoutId,
    ...props
}) => {
    const randomY = Math.floor(Math.random() * 41) - 20;
    return (
        <motion.div
            layout
            layoutId={layoutId}
            initial={{
                opacity: 0,
                x: randomY,
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
                opacity: 0,
                x: -30,
                transition: { duration: 0.2, ease: "easeIn" },
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
                layout: { duration: 0.3 },
            }}
            whileHover={{
                y: -1.5,
                transition: { duration: 0.1 },
            }}
        >
            <Card {...props}>{children}</Card>
        </motion.div>
    );
};

export const Visit = {
    Root,
    Wrapper,
    Header,
    Footer,
};
