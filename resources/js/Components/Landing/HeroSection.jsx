export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    alt="Hero Coffee"
                    className="w-full h-full object-cover brightness-[0.35]"
                    src="/images/hero.png"
                />
            </div>

            {/* Gradient overlay bawah */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl space-y-8">
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/20 text-secondary-container font-label text-sm uppercase tracking-widest border border-secondary-container/30 backdrop-blur-sm">
                    Kopi Tujuan Hidup
                </span>

                <h1 className="text-5xl md:text-7xl font-headline text-white leading-tight">
                    Kopi Terbaik untuk{' '}
                    <span className="text-secondary-container">Temani Harimu</span>
                </h1>

                <p className="text-surface-container-high text-lg md:text-xl max-w-lg leading-relaxed font-light">
                    Nikmati setiap seduhan dari kopi kemasan premium kami. Hadir dengan berbagai varian gilingan untuk menyempurnakan setiap momen berhargamu di mana saja.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                    <a
                        className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-2"
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

            {/* Scroll indicator — center bottom */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 animate-bounce">
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <span className="material-symbols-outlined text-[20px]">expand_more</span>
            </div>

            {/* Decorative blur */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}
