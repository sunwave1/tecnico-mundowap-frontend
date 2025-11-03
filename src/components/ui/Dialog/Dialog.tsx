import React from "react";
import Teleport from "../../Teleport";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { motion, AnimatePresence } from "framer-motion";
import { modalVariant, overlayVariant } from "./animation";
import {
    ContainerStyle,
    HeaderStyle,
    OverlayStyle,
    TitleStyle,
    WrapperStyle,
} from "./styled";
import {
    LargeTypes,
    PaddingTypes,
    RadiusTypes,
    SpacingTypes,
} from "../../../styles/theme";

interface RootProps {
    isOpen: boolean;
}

interface CallbackClickProps {
    onClick?: () => void;
}

const Root: React.FC<React.PropsWithChildren<RootProps>> = ({
    isOpen,
    children,
}) => {
    return (
        <Teleport target={document.body}>
            <AnimatePresence>
                {isOpen && <WrapperStyle>{children}</WrapperStyle>}
            </AnimatePresence>
        </Teleport>
    );
};

function Overlay({ onClick }: CallbackClickProps) {
    return (
        <motion.div
            variants={overlayVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClick}
        >
            <OverlayStyle />
        </motion.div>
    );
}

const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <HeaderStyle>{children}</HeaderStyle>;
};

const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <TitleStyle>{children}</TitleStyle>;
};

const Closer: React.FC<React.PropsWithChildren<CallbackClickProps>> = ({
    onClick,
}) => {
    return (
        <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClick}
            style={{ cursor: "pointer" }}
        >
            <XMarkIcon width={24} height={24} />
        </motion.span>
    );
};

const AnimatedContainer = motion.create(ContainerStyle);

interface ContainerProps {
    children: React.ReactNode;
    spacing?: SpacingTypes | PaddingTypes;
    sizes?: LargeTypes;
    rounded?: RadiusTypes;
}

const Container = ({ children, rounded, sizes, spacing }: ContainerProps) => {
    return (
        <AnimatedContainer
            variants={modalVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            $rounded={rounded}
            $sizes={sizes}
            $spacing={spacing}
        >
            {children}
        </AnimatedContainer>
    );
};

export const Modal = {
    Root,
    Overlay,
    Header,
    Title,
    Container,
    Closer,
};
