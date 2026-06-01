import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='min-h-[89vh] md:flex'>
      <div className='flex items-center px-4 py-4 md:py-0'>
        <Image
          src="/hero-room.png"
          width={650}
          height={650}
          alt=''
          className='rounded-2xl shadow-[4px_4px_6px_0px_rgba(0,0,0,0.1)]' />
      </div>

      <div className='flex flex-col gap-8 md:py-12 px-2 w-full max-w-xl'>
        <h1 className='text-4xl font-bold leading-tight text-secondary'>
          Ubah Kamar Biasa <br />
          Jadi <span className='text-[#2DD4BF]'>Setup Impian</span> Mu.</h1>

        <p className='text-sm sm:text-base text-secondary/70 leading-relaxed font-light'>
          Ubah area kamar yang membosankan menjadi ruang produktivitas sekaligus
          tempat santai yang penuh karakter. Dengan perpaduan hangat dari panel kayu akustik,
          pencahayaan Ambient LED yang bisa disesuaikan dengan mood, serta sentuhan dekorasi
          retro yang timeless, kami siap membantu lu mewujudkan sebuah sanctuary modern
          yang mencerminkan keunikan diri lu sepenuhnya.
        </p>

        <button
          className='w-full md:w-fit p-4 mb-4 md:mb-0 rounded-xl text-secondary bg-accent hover:bg-accent/70 transition-all hover:scale-97 cursor-pointer shadow-[4px_4px_6px_0px_rgba(0,0,0,0.1)]'>
          Konsultasi Desain <span className='font-bold'>(Gratis)</span>
        </button>
      </div>
    </section>
  )
}

export default Hero