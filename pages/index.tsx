import Slider from "@/components/Slider";
import Products from "@/components/Products";
import AppLayout from "@/Layout/AppLayout";

export default function Home() {
    return (
        <AppLayout title="Fashion Store">
            <Slider />
            <Products />
            <h1>Home page</h1>
        </AppLayout>
    );
}
