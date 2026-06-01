import Image from 'next/image';
import React from 'react';

const ProductShowcase = () => {
    const categories = [
        {
            id: 1,
            title: "Ambient Lighting",
            desc: "",
            src: "/ambient-lighting.png"
        },
        {
            id: 2,
            title: "Wall Panel",
            desc: "",
            src: "/wall-panel.png"
        },
        {
            id: 3,
            title: "Retro Collectible",
            desc: "",
            src: "/retro.png"
        }
    ]

    return (
        <section className='bg-secondary px-8 md:px-16 py-24'>
            <div className='flex flex-col text-center gap-6 tracking-tight'>
                <h2 className='font-bold text-4xl text-primary'>Produk Andalan Kami</h2>
                <p className='max-w-2xl mx-auto text-dark/70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae earum eius ipsa aperiam, sint quidem! Minima neque, dignissimos dolore nisi nihil corporis earum provident! Fugit quam saepe odio eum voluptas!</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16'>
                {categories.map((item) => (
                    <div key={item.id} className='bg-primary rounded-2xl flex flex-col group cursor-pointer'>
                        <div className='h-48 rounded-2xl flex justify-center items-center relative overflow-hidden'>
                            <Image src={item.src}
                                alt={item.title}
                                fill
                                className='object-cover group-hover:scale-110 transition duration-500' />
                        </div>
                        <div className='flex flex-col gap-8 py-6 px-4'>
                            <div className='space-y-2'>
                                <h3 className='font-bold text-xl mb-4 text-secondary'>
                                    {item.title}
                                </h3>
                                <p className='text-secondary/70'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, neque.</p>
                            </div>
                            <div>
                                <span className='text-orange-400'>Lihat Inspirasi &rarr;</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProductShowcase;