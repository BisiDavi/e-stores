import { useAppDispatch } from "@/hooks/useRedux";
import adminSidebar from "@/json/admin-sidebar.json";
import { updateAdminTab } from "@/redux/admin-tab-slice";

export default function DashboardSidebar() {
    const dispatch = useAppDispatch();

    function navigateTabs(tabName: string) {
        dispatch(updateAdminTab(tabName));
    }

    return (
        <div className="w-1/4">
            {adminSidebar.map((sidebar) => (
                <div key={sidebar.name} className="adminSidebar flex flex-col">
                    <h3 className="bg-gray-200 text-gray-700 p-2 pl-6">
                        {sidebar.name}
                    </h3>
                    <div className="sidebarList flex flex-col">
                        {sidebar.content.map((list) => (
                            <div
                                onClick={() => navigateTabs(list.id)}
                                key={list.name}
                                className="p-2 pl-6 border border-bottom border-gray-100"
                            >
                                <h4 className="hover:text-red-500">
                                    {list.name}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
