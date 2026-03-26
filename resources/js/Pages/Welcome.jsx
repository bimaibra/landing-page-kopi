import { useState, useCallback, useEffect } from 'react';
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
import { variantsKemasan } from '@/Data/products';

const Toast = ({ message, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(onClose, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[150] animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="bg-secondary text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-white/20">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                <span className="font-bold text-sm tracking-wide">{message}</span>
            </div>
        </div>
    );
};

export default function Welcome() {
    const [orders, setOrders] = useState({});
    const [toast, setToast] = useState({ visible: false, message: '' });

    const showToast = (message) => {
        setToast({ visible: true, message });
    };

    return (
        <>
            <Head title="Kopi Tujuan Hidup" />
            <div className="bg-surface text-on-surface selection:bg-secondary-container relative">
                <Navbar />
                <main>
                    <HeroSection />
                    <MenuSection />
                    <OrderSection orders={orders} setOrders={setOrders} />
                    <AboutSection />
                    <FaqSection />
                    <ContactSection />
                </main>
                <Footer />
                <WhatsAppFab />
                
                <Toast 
                    isVisible={toast.visible} 
                    message={toast.message} 
                    onClose={() => setToast({ ...toast, visible: false })} 
                />
            </div>
        </>
    );
}
