import { createPortal } from "react-dom";

interface TeleportProps {
    children: React.ReactNode;
    target: HTMLElement;
}

export default function Teleport({ children, target }: TeleportProps) {
    return createPortal(children, target);
}
