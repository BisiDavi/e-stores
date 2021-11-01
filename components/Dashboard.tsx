import { useRouter } from "next/router";

import { useAppSelector } from "@/hooks/useRedux";
import DashboardSidebar from "./DashboardSidebar";
import displayTabs from "./Tabs/displayTab";

export default function Dashboard() {
    const { tab } = useAppSelector((state) => state.adminTab);
    const router = useRouter();
    return (
        <section
            style={{ height: "750px" }}
            className="container p-10 pl-0 m-12 mb-20 relative m-auto"
        >
            <div className="absolute bottom-20 z-20 w-full m-auto bg-white border rounded-lg border-tranparent shadow-lg h-full flex">
                <DashboardSidebar activeTab={tab} />
                <div className="tabs w-3/4">{displayTabs(tab, router)}</div>
            </div>
        </section>
    );
}
