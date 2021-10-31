import { useAppSelector } from "@/hooks/useRedux";
import { useRouter } from "next/dist/client/router";
import DashboardSidebar from "./DashboardSidebar";
import displayTabs from "./Tabs/displayTab";

export default function Dashboard() {
    const { tab } = useAppSelector((state) => state.adminTab);
    const router = useRouter();
    return (
        <section className="container bg-white border rounded border-tranparent shadow-lg">
            <DashboardSidebar />
            <div className="tabs w-3/4">{displayTabs(tab, router)}</div>
        </section>
    );
}
