import React from 'react'

const SocialProof = () => {
    return (
        <section className="bg-[#0f0f12] text-white py-16 px-4 font-sans overflow-hidden">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-12">
                    <span className="text-[#ff7a00] font-semibold text-sm tracking-wider uppercase">Social Proof</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Kamar Mereka yang Udah Disulap</h2>
                    <p className="text-gray-400 mt-3 max-w-md mx-auto text-sm md:text-base">Gak cuma sekadar cerita, ini bukti nyata kamar mereka setelah pake produk RetroGlow.</p>
                </div>

                <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-2 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0">

                    <div className="min-w-[85%] sm:min-w-[50%] md:min-w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 snap-center flex flex-col justify-between shadow-xl shadow-black/40 hover:border-[#ff7a00]/40 transition-all duration-300">
                        <div>
                            <div className="relative w-full h-48 md:h-52 rounded-xl overflow-hidden mb-5 group">
                                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="Setup Kamar Gaming" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <span className="absolute top-3 left-3 bg-black/60 text-xs px-2.5 py-1 rounded-full font-medium backdrop-blur-sm text-cyan-400 border border-cyan-400/30">Gaming Setup</span>
                            </div>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed italic mb-4">
                                "Gokil sih, panel kayu sama LED-nya bener-bener ngubah vibe kamar gua. Sekarang kalau mabar atau ngoding malem-malem jadi betah banget, berasa punya studio pribadi!"
                            </p>
                        </div>
                        <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-sm md:text-base text-white">@rizky_setup</h4>
                                <p className="text-xs text-gray-400 mt-0.5">Verified Buyer</p>
                            </div>
                            <div className="flex text-[#ff7a00] gap-0.5">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-[85%] sm:min-w-[50%] md:min-w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 snap-center flex flex-col justify-between shadow-xl shadow-black/40 hover:border-[#ff7a00]/40 transition-all duration-300">
                        <div>
                            <div className="relative w-full h-48 md:h-52 rounded-xl overflow-hidden mb-5 group">
                                <img src="https://images.unsplash.com/photo-1740842311434-522bb411af15?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Setup Kamar Estetik Workspace" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <span className="absolute top-3 left-3 bg-black/60 text-xs px-2.5 py-1 rounded-full font-medium backdrop-blur-sm text-[#ff7a00] border border-[#ff7a00]/30">Cozy Workspace</span>
                            </div>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed italic mb-4">
                                "Awalnya ragu bisa pasang panelnya sendiri, ternyata gampang banget. Pas lampu ambient senjanya dinyalain sore-sore, vibe kamarnya langsung dapet retro estetiknya."
                            </p>
                        </div>
                        <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-sm md:text-base text-white">@andini.art</h4>
                                <p className="text-xs text-gray-400 mt-0.5">Verified Buyer</p>
                            </div>
                            <div className="flex text-[#ff7a00] gap-0.5">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-[85%] sm:min-w-[50%] md:min-w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 snap-center flex flex-col justify-between shadow-xl shadow-black/40 hover:border-[#ff7a00]/40 transition-all duration-300">
                        <div>
                            <div className="relative w-full h-48 md:h-52 rounded-xl overflow-hidden mb-5 group">
                                <img src="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dinding Kamar Retro Kaset" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <span className="absolute top-3 left-3 bg-black/60 text-xs px-2.5 py-1 rounded-full font-medium backdrop-blur-sm text-purple-400 border border-purple-400/30">Retro Room</span>
                            </div>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed italic mb-4">
                                "Pas banget dikombinasikan sama koleksi kaset tape gua. Lampu neonnya pas, gak bikin silau, dan finishing panel kayunya rapi banget. Mantap pol pokoknya!"
                            </p>
                        </div>
                        <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-sm md:text-base text-white">@fajar_vintage</h4>
                                <p className="text-xs text-gray-400 mt-0.5">Verified Buyer</p>
                            </div>
                            <div className="flex text-[#ff7a00] gap-0.5">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="text-center mt-2 md:hidden">
                    <p className="text-xs text-gray-500 animate-pulse">← Geser untuk lihat ulasan lain →</p>
                </div>

            </div>
        </section>
    )
}

export default SocialProof