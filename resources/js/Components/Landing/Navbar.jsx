import { useState, useEffect } from 'react';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            // Urutan harus sesuai kemunculan di DOM: menu → pesan → tentang → faq → kontak
            const sections = ['menu', 'pesan', 'tentang', 'faq', 'kontak'];
            let current = '';
            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 160) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { label: 'Beranda', href: '#', id: '' },
        { label: 'Menu', href: '#menu', id: 'menu' },
        { label: 'Tentang Kami', href: '#tentang', id: 'tentang' },
        { label: 'FAQ', href: '#faq', id: 'faq' },
        { label: 'Kontak', href: '#kontak', id: 'kontak' },
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md transition-all duration-300">
            <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                <div className="flex items-center gap-3">
                    <img src="/images/logo.png" alt="Logo Kopi Tujuan Hidup" className="w-10 h-10 object-contain mix-blend-multiply" />
                    <div className="font-headline text-2xl font-bold text-stone-900 hidden sm:block">
                        Kopi Tujuan Hidup
                    </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8 font-headline text-lg tracking-tight">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            className={`pb-1 border-b-2 transition-all duration-200 ${
                                activeSection === link.id
                                    ? 'text-stone-900 border-stone-900'
                                    : 'text-stone-600 border-transparent hover:text-stone-900 hover:border-stone-300'
                            }`}
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#pesan"
                        className={`px-6 py-2 rounded-xl transition-all active:scale-95 duration-200 border-b-2 ${
                            activeSection === 'pesan' 
                            ? 'bg-secondary text-white border-stone-900' 
                            : 'bg-primary text-on-primary hover:bg-secondary border-transparent'
                        }`}
                    >
                        Pesan
                    </a>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    className="md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="material-symbols-outlined text-stone-900">
                        {mobileOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-surface/95 backdrop-blur-md border-t border-outline-variant/20 px-6 pb-6 space-y-4">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            className={`block font-headline text-lg py-2 border-b transition-colors ${
                                activeSection === link.id 
                                    ? 'text-stone-900 font-bold border-stone-900' 
                                    : 'text-stone-700 border-transparent'
                            }`}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#pesan"
                        className="block text-center bg-primary text-on-primary px-6 py-3 rounded-xl hover:bg-secondary transition-all font-bold"
                        onClick={() => setMobileOpen(false)}
                    >
                        Pesan
                    </a>
                </div>
            )}
        </header>
    );
}
