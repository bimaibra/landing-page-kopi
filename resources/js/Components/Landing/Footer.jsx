export default function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-100 pt-16 pb-8 border-t-[8px] border-primary">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-stone-800 pb-12">
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1.5 shrink-0">
                                <img src="/images/logo.png" alt="Logo Kopi Tujuan Hidup" className="w-full h-full object-contain mix-blend-multiply" />
                            </div>
                            <div className="font-headline text-3xl font-bold text-stone-100">
                                Kopi Tujuan Hidup
                            </div>
                        </div>
                        <p className="font-body text-stone-400 max-w-sm leading-relaxed">
                            Menyajikan momen terbaik lewat secangkir kopi untuk para penikmat rasa. Dipanggang di Kediri, dinikmati di seluruh Indonesia.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-primary transition-colors hover:-translate-y-1">
                                {/* SVG for Instagram */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-primary transition-colors hover:-translate-y-1">
                                {/* SVG for Twitter/X  */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-primary transition-colors hover:-translate-y-1">
                                {/* SVG for Facebook  */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
                            </a>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <h4 className="font-bold text-stone-100 uppercase tracking-widest text-sm">Tautan Cepat</h4>
                        <div className="flex flex-col space-y-2">
                            <a className="text-stone-400 hover:text-white transition-colors" href="#">Beranda</a>
                            <a className="text-stone-400 hover:text-white transition-colors" href="#menu">Katalog Produk</a>
                            <a className="text-stone-400 hover:text-white transition-colors" href="#tentang">Tentang Roastery</a>
                            <a className="text-stone-400 hover:text-white transition-colors" href="#faq">Pusat Bantuan</a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-stone-100 uppercase tracking-widest text-sm">Customer Service</h4>
                        <div className="flex flex-col space-y-2 text-stone-400">
                            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">mail</span> halo@kopitujuanhidup.com</span>
                            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">call</span> +62 812-3456-7890</span>
                            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">schedule</span> Buka Setiap Hari (08:00 - 22:00)</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center text-stone-500 text-sm">
                    <div>&copy; 2024 Kopi Tujuan Hidup. All rights reserved.</div>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-stone-300 transition-colors">Syarat & Ketentuan</a>
                        <a href="#" className="hover:text-stone-300 transition-colors">Kebijakan Privasi</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
