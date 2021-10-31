import Slider from "@/components/Slider";
import Products from "@/components/Products";
import AppLayout from "@/Layout/AppLayout";
import AdBanner from "@/components/AdBanner";
import Brands from "@/components/Brands";

export default function Home() {
    return (
        <AppLayout title="Fashion Store">
            <Slider />
            <Products />
            <AdBanner />
            <Brands />
        </AppLayout>
    );
}
