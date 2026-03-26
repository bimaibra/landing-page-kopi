import { useRef, useState } from 'react';
import { kopiKemasan, rtdProducts, variantsKemasan as variants } from '../../Data/products';

export default function MenuSection() {
    const kopiKemasanRef = useRef(null);
    const rtdRef = useRef(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const scroll = (ref, direction) => {
        if (ref.current && ref.current.firstChild) {
            const cardWidth = ref.current.firstChild.offsetWidth;
            const gap = 24; // gap-6 matches 24px
            const scrollAmount = cardWidth + gap;
            
            ref.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const renderFlavorBar = (label, level) => (
        <div key={label} className="flex items-center gap-2 text-xs">
            <span className="w-10 text-on-surface-variant font-medium">{label}</span>
            <div className="flex-grow h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div 
                    className="h-full bg-secondary transition-all" 
                    style={{ width: `${(level / 5) * 100}%` }}
                ></div>
            </div>
        </div>
    );

    const renderKopiKemasanCard = (product) => (
        <div
            key={product.name}
            onClick={() => setSelectedProduct(product)}
            className="group bg-surface-container-low rounded-xl overflow-hidden transition-all border border-outline-variant/10 hover:shadow-xl hover:-translate-y-2 duration-300 w-[260px] md:w-[280px] shrink-0 snap-start flex flex-col cursor-pointer"
        >
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 shrink-0">
                <img
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={product.image}
                    loading="lazy"
                />
                {product.badge && (
                    <span className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {product.badge}
                    </span>
                )}
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-on-surface-variant text-sm line-clamp-2 italic mb-1">
                    {product.desc}
                </p>
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                    }}
                    className="text-secondary text-xs font-bold hover:underline self-start mb-4"
                >
                    Selengkapnya
                </button>
                
                <div className="space-y-4 mb-4 flex-grow">
                    {/* Flavors */}
                    <div className="space-y-2">
                        {renderFlavorBar('Acid', product.flavors.acid)}
                        {renderFlavorBar('Bitter', product.flavors.bitter)}
                        {renderFlavorBar('Sweet', product.flavors.sweet)}
                        {renderFlavorBar('Nutty', product.flavors.nutty)}
                    </div>
                    {/* Variants */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-outline-variant/10">
                        {variants.map(v => (
                            <span key={v} className="px-2 py-0.5 bg-secondary-container/20 text-secondary-container text-[10px] font-bold rounded uppercase tracking-wider">
                                {v}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10 mt-auto">
                    <span className="text-lg font-bold text-secondary">
                        {product.price}
                    </span>
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            document.getElementById('pesan')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer shrink-0 shadow-md active:scale-95"
                        title="Pesan sekarang"
                    >
                        <span className="material-symbols-outlined text-[20px] leading-none">add_shopping_cart</span>
                    </button>
                </div>
            </div>
        </div>
    );

    const renderRtdCard = (product) => (
        <div
            key={product.name}
            onClick={() => setSelectedProduct(product)}
            className="group bg-surface-container-low rounded-xl overflow-hidden transition-all border border-outline-variant/10 hover:shadow-xl hover:-translate-y-2 duration-300 w-[260px] md:w-[280px] shrink-0 snap-start flex flex-col cursor-pointer"
        >
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 shrink-0">
                <img
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={product.image}
                    loading="lazy"
                />
                {product.badge && (
                    <span className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {product.badge}
                    </span>
                )}
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-on-surface-variant text-sm line-clamp-3 italic mb-1">
                    {product.desc}
                </p>
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                    }}
                    className="text-secondary text-xs font-bold hover:underline self-start mb-4"
                >
                    Selengkapnya
                </button>
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10 mt-auto">
                    <span className="text-lg font-bold text-secondary">
                        {product.price}
                    </span>
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            document.getElementById('pesan')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer shrink-0 shadow-md active:scale-95"
                        title="Pesan sekarang"
                    >
                        <span className="material-symbols-outlined text-[20px] leading-none">add_shopping_cart</span>
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto" id="menu">
            <div className="text-center mb-16 space-y-4">
                <span className="block text-secondary font-bold tracking-widest uppercase text-sm mb-2">KATALOG PRODUK</span>
                <h2 className="text-4xl md:text-5xl font-headline text-primary">
                    Sensasi Rasa Tujuan Hidup
                </h2>
                <p className="text-on-surface-variant max-w-lg mx-auto">
                    Pilih pendamping momen terbaikmu dari koleksi kopi kemasan dan minuman botol ready-to-drink kami. Geser untuk melihat lebih banyak produk.
                </p>
            </div>

            <div className="space-y-16">
                <div className="relative">
                    <h3 className="text-2xl font-headline text-primary border-b-2 border-primary/20 pb-4 mb-6 flex items-center justify-between">
                        <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary shrink-0">coffee_maker</span>
                            Kopi Kemasan
                        </span>
                        <div className="flex gap-2">
                            <button onClick={() => scroll(kopiKemasanRef, 'left')} className="w-10 h-10 rounded-full border border-primary/20 text-primary flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all active:scale-95">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button onClick={() => scroll(kopiKemasanRef, 'right')} className="w-10 h-10 rounded-full border border-primary/20 text-primary flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all active:scale-95">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </h3>
                    {/* Horizontal scroll container */}
                    <div ref={kopiKemasanRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 py-4 px-4 -mx-4 custom-scrollbar scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                        {kopiKemasan.map(renderKopiKemasanCard)}
                    </div>
                </div>

                <div className="relative">
                    <h3 className="text-2xl font-headline text-primary border-b-2 border-primary/20 pb-4 mb-6 flex items-center justify-between">
                        <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary shrink-0">water_bottle</span>
                            Ready to Drink (Botol 250ml)
                        </span>
                        <div className="flex gap-2">
                            <button onClick={() => scroll(rtdRef, 'left')} className="w-10 h-10 rounded-full border border-primary/20 text-primary flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all active:scale-95">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button onClick={() => scroll(rtdRef, 'right')} className="w-10 h-10 rounded-full border border-primary/20 text-primary flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all active:scale-95">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </h3>
                    {/* Horizontal scroll container */}
                    <div ref={rtdRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 py-4 px-4 -mx-4 custom-scrollbar scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                        {rtdProducts.map(renderRtdCard)}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedProduct && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    onClick={() => setSelectedProduct(null)}
                >
                    <div 
                        className="bg-surface-container-lowest max-w-md w-full rounded-2xl overflow-hidden relative max-h-[90vh] flex flex-col shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <button 
                            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                            onClick={() => setSelectedProduct(null)}
                        >
                            <span className="material-symbols-outlined text-[20px]">close</span>
                        </button>
                        
                        <div className="relative shrink-0 bg-stone-100 flex justify-center items-center py-6 px-4">
                            <img 
                                src={selectedProduct.image} 
                                alt={selectedProduct.name} 
                                className="w-full min-w-[200px] max-w-[280px] sm:max-w-[300px] aspect-[4/3] object-cover rounded-2xl shadow-md" 
                            />
                            {selectedProduct.badge && (
                                <span className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                    {selectedProduct.badge}
                                </span>
                            )}
                        </div>
                        
                        <div className="p-6 overflow-y-auto custom-scrollbar flex-grow">
                            <h3 className="text-2xl font-bold text-primary mb-2">{selectedProduct.name}</h3>
                            <p className="text-on-surface-variant mb-6 text-sm">{selectedProduct.desc}</p>
                            
                            {selectedProduct.flavors && (
                                <div className="space-y-4 mb-6 bg-surface-container-low p-4 rounded-xl">
                                    <h4 className="font-bold text-primary text-sm uppercase tracking-wider">Flavor Profiles</h4>
                                    <div className="space-y-2">
                                        {renderFlavorBar('Acid', selectedProduct.flavors.acid)}
                                        {renderFlavorBar('Bitter', selectedProduct.flavors.bitter)}
                                        {renderFlavorBar('Sweet', selectedProduct.flavors.sweet)}
                                        {renderFlavorBar('Nutty', selectedProduct.flavors.nutty)}
                                    </div>
                                </div>
                            )}

                            {selectedProduct.flavors && variants && (
                                <div className="space-y-3">
                                    <h4 className="font-bold text-primary text-sm uppercase tracking-wider">Pilihan Varian</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {variants.map(v => (
                                            <span key={v} className="px-3 py-1.5 bg-secondary-container/20 border border-secondary/20 text-secondary-container text-xs font-bold rounded-lg uppercase tracking-wider">
                                                {v}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        <div className="p-6 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 bg-surface-container-low">
                            <div className="flex flex-col">
                                <span className="text-sm text-on-surface-variant font-medium">Harga</span>
                                <span className="text-xl font-bold text-secondary">{selectedProduct.price}</span>
                            </div>
                            <button 
                                onClick={() => {
                                    document.getElementById('pesan')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    setSelectedProduct(null);
                                }} 
                                className="px-6 py-2.5 bg-primary text-white rounded-xl shadow-lg shadow-primary/30 hover:bg-secondary transition-all font-medium flex items-center justify-center w-full sm:w-auto gap-2 shrink-0 active:scale-95"
                            >
                                <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                Pesan Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
