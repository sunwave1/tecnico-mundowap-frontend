import { PropsWithChildren } from "react";
import Card from "../ui/Card/Card";
import Wrapper from "./Wrapper";
import Header from "./Header";
import Progress from "./Progress";
import Footer from "./Footer";

const Root: React.FC<PropsWithChildren> = ({ children }) => {
    return <Card hasBorder={true}>{children}</Card>;
};

export const Workday = {
    Root,
    Wrapper,
    Header,
    Progress,
    Footer,
};
