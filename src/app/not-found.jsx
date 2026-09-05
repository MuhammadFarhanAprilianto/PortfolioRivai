export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#faf9f6] dark:bg-[#0b0f17] flex flex-col items-center justify-center text-center px-4 font-agrandir">
      <div className="font-questrial font-black text-8xl text-slate-300 dark:text-slate-800 mb-4">404</div>
      <h1 className="font-questrial font-bold text-3xl text-slate-900 dark:text-white mb-3">Halaman Tidak Ditemukan</h1>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 max-w-md">Halaman yang Anda cari tidak tersedia atau telah dipindahkan.</p>
      <a
        href="/"
        className="px-6 py-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-xs uppercase tracking-wider hover:bg-[#a6f30d] hover:text-black transition-all shadow-md"
      >
        Kembali ke Portofolio
      </a>
    </div>
  );
}
