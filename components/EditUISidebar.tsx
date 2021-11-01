import editUIContent from "@/json/edit-ui-sidebar.json";

type UIType = {
    name: string;
    id: string;
};

export default function EditUISidebar() {
    return (
        <div className="w-42 fixed left-0 bg-gray-100 h-full z-10 p-5">
            <button className="bg-green-300 p-2 text-white hover:text-dark border rounded border-transparent">
                Publish
            </button>
            {editUIContent.map(({ content, id, name }) => (
                <div
                    key={id}
                    className="list border border-bottom border-gray-100 cursor-pointer"
                >
                    <h4>{name}</h4>
                    {content.map((item: UIType) => (
                        <div
                            key={item.id}
                            className="list p-3 border border-bottom border-gray-100"
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
