import Link from "next/link";

import { useAppDispatch } from "@/hooks/useRedux";
import adminSidebar from "@/json/admin-sidebar.json";
import { updateAdminTab } from "@/redux/admin-tab-slice";

interface DashboardSidebarProps {
    activeTab: string;
}

type linksType = {
    icon: string;
    name: string;
    id: string;
    link?: boolean;
    url?: string | any;
};

export default function DashboardSidebar({ activeTab }: DashboardSidebarProps) {
    const dispatch = useAppDispatch();

    function navigateTabs(tabName: string) {
        dispatch(updateAdminTab(tabName));
    }

    const activeTabStyle = (tab: string) =>
        activeTab === tab ? "text-red-500" : "";

    return (
        <div className="w-1/4 rounded-r-sm border border-transparent">
            {adminSidebar.map((sidebar) => (
                <div key={sidebar.name} className="adminSidebar flex flex-col">
                    <h3 className="bg-gray-200 font-medium text-gray-700 p-3 pl-6">
                        {sidebar.name}
                    </h3>
                    <div className="sidebarList flex flex-col">
                        {sidebar.content.map((list: linksType) => {
                            return list.link ? (
                                <div
                                    key={list.name}
                                    className="p-3 pl-6 border border-bottom border-gray-100 cursor-pointer"
                                >
                                    <Link href={list?.url} passHref>
                                        <a className="hover:text-red-500">
                                            {list.name}
                                        </a>
                                    </Link>
                                </div>
                            ) : (
                                <div
                                    onClick={() => navigateTabs(list.id)}
                                    key={list.name}
                                    className="p-3 pl-6 border border-bottom border-gray-100 cursor-pointer"
                                >
                                    <h4
                                        className={` ${activeTabStyle(
                                            list.id,
                                        )} hover:text-red-500`}
                                    >
                                        {list.name}
                                    </h4>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}
