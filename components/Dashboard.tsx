import { useRouter } from "next/router";

import { useAppSelector } from "@/hooks/useRedux";
import DashboardSidebar from "./DashboardSidebar";
import displayTabs from "./Tabs/displayTab";

export default function Dashboard() {
    const { tab } = useAppSelector((state) => state.adminTab);
    const router = useRouter();
    return (
        <section className="p-10 pl-0 m-12 mb-20 h-1/2 relative m-auto">
            <div
                style={{ height: "550px" }}
                className="absolute top-20 z-20 container m-auto bg-white border rounded border-tranparent shadow-lg h-full"
            >
                <DashboardSidebar />
                <div className="tabs w-3/4">{displayTabs(tab, router)}</div>
            </div>
        </section>
    );
}
