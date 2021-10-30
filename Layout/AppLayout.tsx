import { PropsWithChildren } from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface AppLayoutProps {
    children: JSX.Element;
    title: string;
}

export default function AppLayout({
    children,
    title,
}: PropsWithChildren<AppLayoutProps>) {
    return (
        <>
            <Head>
                <title> CartZilla | {title}</title>
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
