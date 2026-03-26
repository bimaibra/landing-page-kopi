export default function AboutSection() {
    return (
        <section className="py-24 px-6 bg-surface" id="tentang">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-auto md:h-[600px]">
                    <img
                        alt="Tentang Kopi Tujuan Hidup"
                        className="w-full h-full object-cover"
                        src="/images/about1.jpg"
                    />
                </div>
                <div className="space-y-8">
                    <span className="block text-secondary font-bold tracking-widest uppercase text-sm mb-2">TENTANG KAMI</span>
                    <h2 className="text-4xl md:text-5xl font-headline text-primary">
                        Cerita di Balik Setiap Cangkir
                    </h2>
                    <div className="space-y-4 text-on-surface-variant text-lg leading-relaxed">
                        <p>
                            Kopi Tujuan Hidup bermula dari sebuah mimpi sederhana di Kediri, Jawa Timur. Menyajikan bukan sekadar
                            minuman, melainkan sebuah santuari bagi mereka yang menghargai ketenangan
                            di tengah hiruk-pikuk dunia.
                        </p>
                        <p>
                            Kami mendedikasikan diri untuk berburu biji kopi terbaik dari tangan para
                            tinggi untuk mengeluarkan karakteristik rasa yang khas. Bagi kami, setiap
                            kemasan adalah sebuah karya seni yang menghubungkan kerja keras petani
                            dengan momen relaksasi Anda.
                        </p>
                        <p>
                            Selamat datang di rumah kami, tempat di mana aroma kopi bertemu dengan
                            kehangatan senja.
                        </p>
                    </div>
                    <div className="pt-4">
                        <span className="font-headline italic text-secondary text-2xl font-bold border-l-4 border-secondary pl-4">
                            &quot;Menemani momen berhargamu, satu seduhan pada satu waktu.&quot;
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
