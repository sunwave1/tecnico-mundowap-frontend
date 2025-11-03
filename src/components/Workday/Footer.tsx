import Col from "../Flex/Col";
import { PropsWithChildren } from "react";

const Footer: React.FC<PropsWithChildren> = ({ children }) => {
    return <Col gap={"16px"}>{children}</Col>;
};

export default Footer;
