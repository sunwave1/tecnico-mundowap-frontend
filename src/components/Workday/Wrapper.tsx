import { PropsWithChildren } from "react";
import Col from "../Flex/Col";

const Wrapper: React.FC<PropsWithChildren> = ({ children }) => {
    return <Col gap={"32px"}>{children}</Col>;
};

export default Wrapper;
