import { PropsWithChildren } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface AppLayoutProps {
    children: JSX.Element;
}

export default function AppLayout({
    children,
}: PropsWithChildren<AppLayoutProps>) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
