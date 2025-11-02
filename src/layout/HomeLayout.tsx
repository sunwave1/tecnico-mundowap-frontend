import Header from "../components/Header/Header";
import { Main } from "../components/Main/styled";

interface HomeLayoutProps {
    children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <>
            <Header />
            <Main $margin={"md"}>{children}</Main>
        </>
    );
}
