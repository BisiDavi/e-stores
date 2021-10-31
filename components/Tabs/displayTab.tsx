import {
    AddNewProductTab,
    FavoritesTab,
    PayoutsTab,
    ProductsTab,
    PurchasesTab,
    SalesTab,
} from ".";
import SettingsTab from "./SettingsTab";

export default function displayTabs(name: string, router: any) {
    switch (name) {
        case "settings": {
            return <SettingsTab />;
        }
        case "sales": {
            return <SalesTab />;
        }
        case "purchases": {
            return <PurchasesTab />;
        }
        case "favourites": {
            return <FavoritesTab />;
        }
        case "products": {
            return <ProductsTab />;
        }
        case "addNewProduct": {
            return <AddNewProductTab />;
        }
        case "payouts": {
            return <PayoutsTab />;
        }
        case "slider": {
            return router.push("/edit-ui");
        }
    }
}
