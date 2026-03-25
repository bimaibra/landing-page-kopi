import { useState, useMemo } from 'react';
import { kopiKemasan, rtdProducts, variantsKemasan } from '../../Data/products';

export default function OrderSection() {
    const [orders, setOrders] = useState({});
    const [customer, setCustomer] = useState({ name: '', phone: '', address: '' });

    const handleCustomerChange = (e) => {
        setCustomer(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleQuantityChange = (product, type, qty, variant = '') => {
        const key = product.id; // Using ID as key to keep one variant per product type simple
        
        if (qty <= 0) {
            setOrders(prev => {
                const newOrders = { ...prev };
                delete newOrders[key];
                return newOrders;
            });
            return;
        }

        setOrders(prev => ({
            ...prev,
            [key]: {
                ...product,
                type,
                qty,
                variant: type === 'kemasan' ? (variant || prev[key]?.variant || variantsKemasan[0]) : '',
            }
        }));
    };

    const total = useMemo(() => {
        return Object.values(orders).reduce((sum, item) => sum + (item.priceNumeric * item.qty), 0);
    }, [orders]);

    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (Object.keys(orders).length === 0) {
            alert('Silakan pilih minimal 1 produk.');
            return;
        }

        if (!customer.name || !customer.phone || !customer.address) {
            alert('Mohon lengkapi data pemesanan (Nama Lengkap, No. WhatsApp, Alamat Pengiriman).');
            return;
        }

        let message = `Halo! Saya ingin memesan kopi dari Kopi Tujuan Hidup:%0A%0A`;
        message += `*Data Pemesan:*%0A`;
        message += `Nama: ${customer.name}%0A`;
        message += `No. WA: ${customer.phone}%0A`;
        message += `Alamat: ${customer.address}%0A%0A`;
        
        message += `*Pesanan:*%0A`;
        Object.values(orders).forEach(item => {
            const variantText = item.variant ? ` (Gilingan: ${item.variant})` : '';
            message += `- ${item.name}${variantText} x ${item.qty} = ${formatRupiah(item.priceNumeric * item.qty)}%0A`;
        });
        
        message += `%0A*Total Pembayaran: ${formatRupiah(total)}*%0A%0A`;
        message += `Mohon info ongkir dan nomor rekening ya. Terima kasih!`;

        const waNumber = "6285155122112"; // Sesuaikan dengan nomor WhatsApp admin yang asli
        window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank');
    };

    const OrderItemCart = ({ item }) => {
        return (
            <div className="flex flex-col gap-3 p-4 bg-surface-container-lowest rounded-xl border border-secondary/30 shadow-sm relative pr-10 animate-in fade-in slide-in-from-right-4 duration-300">
                <button 
                    type="button" 
                    onClick={() => handleQuantityChange(item, item.type, 0)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-error/10 text-error hover:bg-error hover:text-white flex items-center justify-center transition-colors"
                    title="Hapus"
                >
                    <span className="material-symbols-outlined text-sm">close</span>
                </button>
                
                <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col">
                        <span className="text-base font-bold text-primary">{item.name}</span>
                        <span className="text-sm font-bold text-secondary mt-0.5">{formatRupiah(item.priceNumeric)}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4 mt-1 pt-3 border-t border-outline-variant/10">
                    {item.type === 'kemasan' ? (
                        <div className="flex items-center gap-2 max-w-[50%]">
                            <span className="text-xs font-medium text-on-surface-variant uppercase tracking-wider hidden sm:inline">Gilingan:</span>
                            <span className="material-symbols-outlined text-on-surface-variant text-sm sm:hidden">coffee</span>
                            <select 
                                value={item.variant}
                                onChange={(e) => handleQuantityChange(item, item.type, item.qty, e.target.value)}
                                className="text-sm border-outline-variant/30 rounded-lg focus:ring-secondary focus:border-secondary py-1 px-2 bg-surface-container-low text-on-surface transition-colors w-full cursor-pointer"
                            >
                                {variantsKemasan.map(v => (
                                    <option key={v} value={v}>{v}</option>
                                ))}
                            </select>
                        </div>
                    ) : <div></div>}

                    <div className="flex items-center bg-surface-container-low rounded-lg p-1 border border-outline-variant/20 ml-auto">
                        <button 
                            type="button"
                            onClick={() => handleQuantityChange(item, item.type, Math.max(1, item.qty - 1), item.variant)}
                            className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-outline-variant/20 text-on-surface transition-colors focus:ring-2 focus:ring-secondary focus:outline-none"
                        >
                            <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-on-surface">{item.qty}</span>
                        <button 
                            type="button"
                            onClick={() => handleQuantityChange(item, item.type, item.qty + 1, item.variant)}
                            className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-outline-variant/20 text-on-surface transition-colors focus:ring-2 focus:ring-secondary focus:outline-none"
                        >
                            <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="py-12 lg:py-8 md:py-16 bg-surface-container-low lg:min-h-screen flex flex-col justify-center" id="pesan">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 lg:items-center">
                {/* Form */}
                <div className="order-2 md:order-1 md:sticky md:top-6 z-10 w-full">
                    <div className="bg-surface-container-lowest p-5 lg:p-7 rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col max-h-[calc(100vh-2rem)] lg:max-h-[calc(100vh-4rem)] relative">
                        <div className="flex-shrink-0 mb-4 lg:mb-5">
                            <span className="block text-secondary font-bold tracking-widest uppercase text-xs mb-1.5 lg:mb-2">PEMESANAN</span>
                            <h3 className="text-2xl md:text-3xl lg:text-3xl font-headline text-primary">Pesan Sekarang</h3>
                        </div>
                        
                        <form className="flex flex-col flex-1 min-h-0 relative" onSubmit={handleSubmit}>
                            <div className="md:overflow-y-auto md:pr-3 md:-mr-3 custom-scrollbar space-y-6 flex-1 md:pb-6">
                                {/* Informasi Pelanggan */}
                            <div className="space-y-5 bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                                <h4 className="font-bold text-primary text-sm uppercase tracking-wider border-b border-outline-variant/10 pb-3 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]">person</span>
                                    Data Diri
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Nama Lengkap</label>
                                        <input
                                            name="name"
                                            value={customer.name}
                                            onChange={handleCustomerChange}
                                            className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:ring-2 focus:ring-secondary/20 focus:border-secondary rounded-xl transition-all px-4 py-3 placeholder:text-outline-variant/60"
                                            placeholder="Masukkan nama"
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Nomor WA</label>
                                        <input
                                            name="phone"
                                            value={customer.phone}
                                            onChange={handleCustomerChange}
                                            className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:ring-2 focus:ring-secondary/20 focus:border-secondary rounded-xl transition-all px-4 py-3 placeholder:text-outline-variant/60"
                                            placeholder="0812..."
                                            type="tel"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Alamat Pengiriman</label>
                                    <textarea
                                        name="address"
                                        value={customer.address}
                                        onChange={handleCustomerChange}
                                        className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:ring-2 focus:ring-secondary/20 focus:border-secondary rounded-xl transition-all px-4 py-3 resize-none placeholder:text-outline-variant/60"
                                        placeholder="Nama jalan, RT/RW, nomor rumah, kecamatan..."
                                        rows="2"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            
                            {/* Tambah Produk (Dropdown) */}
                            <div className="space-y-4 bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                                <h4 className="font-bold text-primary text-sm uppercase tracking-wider border-b border-outline-variant/10 pb-3 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                                    Tambah Produk
                                </h4>
                                <div className="pt-2">
                                    <div className="relative">
                                        <select
                                            className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:ring-2 focus:ring-secondary/20 focus:border-secondary rounded-xl transition-all pl-10 pr-4 py-3 text-on-surface appearance-none cursor-pointer"
                                            onChange={(e) => {
                                                if (!e.target.value) return;
                                                const [type, id] = e.target.value.split(':');
                                                const product = type === 'kemasan' 
                                                    ? kopiKemasan.find(p => p.id === id) 
                                                    : rtdProducts.find(p => p.id === id);
                                                
                                                if (product && !orders[id]) {
                                                    handleQuantityChange(product, type, 1, type === 'kemasan' ? variantsKemasan[0] : '');
                                                }
                                                e.target.value = ''; // Reset dropdown
                                            }}
                                            defaultValue=""
                                        >
                                            <option value="" disabled>-- Klik untuk memilih kopi / minuman botol --</option>
                                            <optgroup label="☕ KOPI KEMASAN">
                                                {kopiKemasan.map(p => (
                                                    <option key={`kemasan:${p.id}`} value={`kemasan:${p.id}`} disabled={!!orders[p.id]}>
                                                        {p.name} - {formatRupiah(p.priceNumeric)} {orders[p.id] ? '(Sudah Ditambahkan)' : ''}
                                                    </option>
                                                ))}
                                            </optgroup>
                                            <optgroup label="🥤 READY TO DRINK (250ML)">
                                                {rtdProducts.map(p => (
                                                    <option key={`rtd:${p.id}`} value={`rtd:${p.id}`} disabled={!!orders[p.id]}>
                                                        {p.name} - {formatRupiah(p.priceNumeric)} {orders[p.id] ? '(Sudah Ditambahkan)' : ''}
                                                    </option>
                                                ))}
                                            </optgroup>
                                        </select>
                                        <span className="material-symbols-outlined absolute left-3 top-3.5 text-on-surface-variant pointer-events-none">search</span>
                                        <span className="material-symbols-outlined absolute right-3 top-3.5 text-on-surface-variant pointer-events-none">expand_more</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Daftar Pesanan */}
                            {Object.keys(orders).length > 0 && (
                                <div className="space-y-4 pt-2">
                                    <label className="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                                        Daftar Pesanan ({Object.keys(orders).length})
                                    </label>
                                    <div className="space-y-3 py-1">
                                        {Object.values(orders).map(order => (
                                            <OrderItemCart key={order.id} item={order} />
                                        ))}
                                    </div>
                                </div>
                            )}
                            </div>
                            
                            {/* Total and Submit */}
                            <div className="flex-shrink-0 pt-4 mt-6 md:mt-2 border-t border-outline-variant/10 bg-surface-container-lowest sticky bottom-0 z-20 pb-4 md:pb-0 shadow-[0_-8px_20px_-8px_rgba(0,0,0,0.08)] md:shadow-none">
                                <div className="flex items-center justify-between mb-4 bg-secondary/5 rounded-xl p-4 border border-secondary/20">
                                    <span className="font-bold text-on-surface">Total Pesanan:</span>
                                    <span className="text-2xl font-bold text-secondary">{formatRupiah(total)}</span>
                                </div>
                                <button
                                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-base hover:bg-secondary transition-all active:scale-95 flex items-center justify-center gap-2 group shadow-md hover:shadow-xl"
                                    type="submit"
                                >
                                    Kirim Pesanan ke WhatsApp
                                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">send</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


                {/* Info */}
                <div className="space-y-8 lg:space-y-10 order-1 md:order-2 pt-6 md:pt-0">
                    <div className="space-y-4 lg:space-y-5">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/10 rounded-full text-secondary font-medium text-xs lg:text-sm">
                            <span className="material-symbols-outlined text-[16px] lg:text-[18px]">local_cafe</span>
                            Dibuat dengan Sepenuh Hati
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-headline text-primary leading-[1.15]">
                            Bawa Kehangatan <br />
                            <span className="text-secondary italic">Ke Rumahmu</span>
                        </h2>
                        <p className="text-on-surface-variant text-base lg:text-lg leading-relaxed max-w-md">
                            Kami memastikan setiap pesanan diantar dengan standar kualitas terbaik,
                            menjaga suhu dan aroma kopi tetap sempurna hingga di tangan Anda.
                        </p>
                    </div>
                    
                    <div className="grid gap-3 lg:gap-4 pt-2">
                        <div className="flex items-start gap-3 lg:gap-4 p-4 lg:p-5 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-secondary-container/50 flex items-center justify-center text-secondary shrink-0">
                                <span className="material-symbols-outlined text-2xl lg:text-3xl">delivery_dining</span>
                            </div>
                            <div>
                                <h4 className="text-base lg:text-lg font-bold text-primary mb-0.5 lg:mb-1">Pengiriman Cepat</h4>
                                <p className="text-on-surface-variant text-xs lg:text-sm leading-relaxed">
                                    Radius 5km, pengiriman dalam 15-30 menit. Tetap segar saat tiba.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 lg:gap-4 p-4 lg:p-5 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-secondary-container/50 flex items-center justify-center text-secondary shrink-0">
                                <span className="material-symbols-outlined text-2xl lg:text-3xl">verified</span>
                            </div>
                            <div>
                                <h4 className="text-base lg:text-lg font-bold text-primary mb-0.5 lg:mb-1">Kualitas Terjamin</h4>
                                <p className="text-on-surface-variant text-xs lg:text-sm leading-relaxed">
                                    Biji kopi fresh roasted, diseduh tepat saat pesanan masuk untuk cita rasa maksimal.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 lg:gap-4 p-4 lg:p-5 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-secondary-container/50 flex items-center justify-center text-secondary shrink-0">
                                <span className="material-symbols-outlined text-2xl lg:text-3xl">support_agent</span>
                            </div>
                            <div>
                                <h4 className="text-base lg:text-lg font-bold text-primary mb-0.5 lg:mb-1">Pesan Melalui WhatsApp</h4>
                                <p className="text-on-surface-variant text-xs lg:text-sm leading-relaxed">
                                    Kami akan menghubungi Anda untuk konfirmasi pesanan dan biaya ongkos kirim.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
