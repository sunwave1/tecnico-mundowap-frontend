import Header from "../ui/Header/Header";
import { Main } from "../ui/Main/styled";

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
