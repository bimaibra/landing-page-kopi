import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Landing/Navbar';
import HeroSection from '@/Components/Landing/HeroSection';
import MenuSection from '@/Components/Landing/MenuSection';
import OrderSection from '@/Components/Landing/OrderSection';
import AboutSection from '@/Components/Landing/AboutSection';
import FaqSection from '@/Components/Landing/FaqSection';
import ContactSection from '@/Components/Landing/ContactSection';
import Footer from '@/Components/Landing/Footer';
import WhatsAppFab from '@/Components/Landing/WhatsAppFab';

export default function Welcome() {
    return (
        <>
            <Head title="Kopi Tujuan Hidup" />
            <div className="bg-surface text-on-surface selection:bg-secondary-container">
                <Navbar />
                <main>
                    <HeroSection />
                    <MenuSection />
                    <OrderSection />
                    <AboutSection />
                    <FaqSection />
                    <ContactSection />
                </main>
                <Footer />
                <WhatsAppFab />
            </div>
        </>
    );
}
