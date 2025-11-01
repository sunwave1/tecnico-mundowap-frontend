import Header from "../components/Header/Header";

interface HomeLayoutProps {
    children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}
