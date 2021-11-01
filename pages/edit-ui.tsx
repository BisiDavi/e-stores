import Slider from "@/components/Slider";
import Products from "@/components/Products";
import AppLayout from "@/Layout/AppLayout";
import AdBanner from "@/components/AdBanner";
import Brands from "@/components/Brands";
import BottomLinks from "@/components/BottomLinks";

export default function EditUI() {
    return (
        <AppLayout title="Edit UI">
            <Slider edit />
            <Products />
            <AdBanner />
            <Brands />
            <BottomLinks />
        </AppLayout>
    );
}
