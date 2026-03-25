export default function HeroSection() {
    return (
        <section className="relative min-h-[921px] flex items-center pt-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    alt="Hero Coffee"
                    className="w-full h-full object-cover brightness-[0.4]"
                    src="/images/hero.png"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <span className="inline-block px-4 py-1 rounded-full bg-secondary-container/20 text-secondary-container font-label text-sm uppercase tracking-widest">
                        Kopi Tujuan Hidup
                    </span>
                    <h1 className="text-5xl md:text-7xl font-headline text-white leading-tight">
                        Kopi Terbaik untuk <br />
                        <span className="text-secondary-container">Temani Harimu</span>
                    </h1>
                    <p className="text-surface-container-high text-lg md:text-xl max-w-lg leading-relaxed font-light">
                        Nikmati setiap seduhan dari kopi kemasan premium kami. Hadir dengan berbagai varian gilingan untuk menyempurnakan setiap momen berhargamu di mana saja.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all active:scale-95 flex items-center gap-2"
                            href="#menu"
                        >
                            Lihat Menu
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </a>
                        <a
                            className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
                            href="#tentang"
                        >
                            Tentang Kami
                        </a>
                    </div>
                </div>
            </div>

            {/* Asymmetrical Decorative Element */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-container/30 rounded-full blur-3xl"></div>
        </section>
    );
}
