import { useState } from 'react';

const faqs = [
    {
        question: 'Bagaimana cara memesan?',
        answer: "Klik tombol 'Pesan' pada menu navigasi atau gulung ke bagian formulir pemesanan. Anda juga dapat langsung menghubungi WhatsApp kami melalui tombol melayang di pojok kanan bawah.",
    },
    {
        question: 'Apa jenis biji kopi yang digunakan?',
        answer: 'Kami menggunakan 100% biji kopi Arabika dan Robusta pilihan dari petani lokal di berbagai daerah di Indonesia, dipanggang segar di tempat kami.',
    },
    {
        question: 'Apakah ada layanan pengiriman?',
        answer: 'Ya, kami melayani pengiriman area sekitar Kediri dan seluruh Jawa Timur dengan kurir internal kami maupun mitra logistik terpercaya untuk memastikan kualitas rasa tetap terjaga hingga ke tangan Anda.',
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-surface-container-low" id="faq">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="block text-secondary font-bold tracking-widest uppercase text-sm mb-2">PUSAT BANTUAN</span>
                    <h2 className="text-4xl font-headline text-primary">Punya Pertanyaan?</h2>
                    <p className="text-on-surface-variant">
                        Beberapa hal yang sering ditanyakan oleh pelanggan kami.
                    </p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden"
                        >
                            <button
                                className="w-full p-6 flex justify-between items-center cursor-pointer hover:bg-surface-container transition-colors group text-left"
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? -1 : index)
                                }
                            >
                                <h4 className="font-bold text-primary group-hover:text-secondary">
                                    {faq.question}
                                </h4>
                                <span
                                    className={`material-symbols-outlined text-secondary transition-transform duration-300 ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                >
                                    expand_more
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index
                                        ? 'max-h-40 opacity-100'
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-6 pb-6 text-on-surface-variant">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
