import Slider from "@/components/Slider";
import Products from "@/components/Products";
import AppLayout from "@/Layout/AppLayout";
import AdBanner from "@/components/AdBanner";

export default function Home() {
    return (
        <AppLayout title="Fashion Store">
            <Slider />
            <Products />
            <AdBanner />
        </AppLayout>
    );
}
