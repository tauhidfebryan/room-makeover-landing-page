import Image from 'next/image';
import React from 'react';

const ProductShowcase = () => {
    // Data Kategori Produk (Biar ngodingnya rapi dan gak berulang)
    const categories = [
        {
            id: 1,
            title: "Ambient Lighting",
            desc: "Sorotan lampu LED neon dan warm tone buat bangun vibe kamar yang cozy.",
            src: "/ambient-lighting.png"
        },
        {
            id: 2,
            title: "Wall Panels",
            desc: "Panel kayu (wood slat) minimalis buat dinding setup biar makin estetik.",
            src: "/wallpanel.png"
        },
        {
            id: 3,
            title: "Retro Collectibles",
            desc: "Koleksi kaset tape, vinyl, dan poster klasik penambah jiwa retro kamar lu.",
            src: "/retro.png"
        }
    ];

    return (
        // Pakai warna background cream (secondary) biar kontras dan selang-seling sama Hero yang warna maroon
        <section className="py-20 px-6 bg-secondary text-primary">
            <div className="max-w-6xl mx-auto">

                {/* JUDUL UTAMA SECTION */}
                <div className="text-center mb-16 space-y-2">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                        Fokus Kustomisasi Kami
                    </h2>
                    <p className="text-primary/70 max-w-md mx-auto text-sm md:text-base">
                        Pilih elemen yang paling cocok buat nge-makeover kamar biasa lu jadi makin betah.
                    </p>
                </div>

                {/* GRID CONTAINER (Kuncinya di grid-cols-1 dan md:grid-cols-3) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((item) => (
                        <div
                            key={item.id}
                            className="bg-primary text-secondary rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col group"
                        >
                            {/* AREA GAMBAR (Nanti tinggal ganti tag span ini pake tag <Image /> Next.js lu) */}
                            <div className="h-48 bg-secondary/10 flex items-center justify-center border-b border-secondary/10 relative overflow-hidden">
                                <Image src={item.src}
                                    alt={item.title}
                                    fill 
                                    className='object-cover group-hover:scale-110 transition duration-500'/>
                            </div>

                            {/* DETAIL TEKS KATEGORI */}
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold tracking-wide">
                                        {item.title}
                                    </h3>
                                    <p className="text-secondary/80 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Link Pemanis */}
                                <div className="pt-2">
                                    <span className="text-[#E4A834] font-semibold text-sm group-hover:underline cursor-pointer inline-flex items-center gap-1">
                                        Lihat Inspirasi &rarr;
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProductShowcase;