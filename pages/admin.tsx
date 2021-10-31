import AdminBanner from "@/components/AdminBanner";
import AppLayout from "@/Layout/AppLayout";
import Dashboard from "@/components/Dashboard";

export function getServerSideProps({ query }: any) {
    console.log("queryquery", query);
    return { props: query };
}

interface AdminProps {
    name: string;
    languages: string;
    city: string;
    region: string;
    country: string;
    currencyCode: string;
    currencySymbol: string;
    query: string;
}

export default function Admin({
    name,
    languages,
    city,
    region,
    country,
    currencyCode,
    currencySymbol,
    query,
}: AdminProps) {
    console.log(
        "query",
        query,
        name,
        languages,
        city,
        region,
        country,
        currencyCode,
        currencySymbol,
    );
    name = decodeURIComponent(name);
    city = decodeURIComponent(city);
    console.log("decodeName", name, "decodeCity", city);
    return (
        <AppLayout title="Admin">
            <AdminBanner />
            <Dashboard />
        </AppLayout>
    );
}
