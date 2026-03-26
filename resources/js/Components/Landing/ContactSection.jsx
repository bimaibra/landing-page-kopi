import Map from './Map';

export default function ContactSection() {
    const contacts = [
        {
            icon: 'location_on',
            title: 'Alamat',
            lines: ['Kediri,', 'Jawa Timur.'],
        },
        {
            icon: 'mail',
            title: 'Email',
            lines: ['halo@kopitujuanhidup.com', 'support@kopitujuanhidup.com'],
        },
        {
            icon: 'schedule',
            title: 'Jam Operasional',
            lines: ['Senin - Minggu', '08:00 - 22:00 WIB'],
        },
    ];

    return (
        <section className="py-24 bg-surface" id="kontak">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="block text-secondary font-bold tracking-widest uppercase text-sm mb-2">KONTAK KAMI</span>
                    <h2 className="text-4xl md:text-5xl font-headline text-primary">
                        Hubungi Kami
                    </h2>
                    <p className="text-on-surface-variant">
                        Kami selalu senang mendengar kabar dari Anda.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    {contacts.map((contact) => (
                        <div
                            key={contact.title}
                            className="text-center space-y-4 p-8 rounded-2xl bg-surface-container-low border border-outline-variant/20 hover:border-secondary/30 transition-colors"
                        >
                            <div className="w-16 h-16 bg-secondary-fixed rounded-full flex items-center justify-center mx-auto text-primary">
                                <span className="material-symbols-outlined text-3xl">
                                    {contact.icon}
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-primary">{contact.title}</h4>
                            <p className="text-on-surface-variant">
                                {contact.lines.map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        {i < contact.lines.length - 1 && <br />}
                                    </span>
                                ))}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30 bg-surface-container relative">
                    <Map zoom={15} label="Kopi Tujuan Hidup" />
                </div>
            </div>
        </section>
    );
}
