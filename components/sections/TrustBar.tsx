export default function TrustBar() {
  const partners = [
    'متجر سلة ⭐',
    'زد ستور',
    'شوبيفاي عربي',
    'أمازون السعودية',
    'مدى للدفع',
    'تابي',
    'تمارا',
    'STC Pay',
    'ماك للكمبيوتر',
    'جرير',
    'نون',
    'ناتو للأزياء',
  ]

  // Duplicate for infinite scroll effect
  const doubled = [...partners, ...partners]

  return (
    <section className="py-10 border-y border-gray-200 bg-white overflow-hidden">
      <div className="container-max px-4 md:px-8 lg:px-16 mb-6">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest">
          متاجر وعلامات تجارية عملت معها
        </p>
      </div>

      <div className="marquee-container relative">
        {/* Fade edges */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />

        <div className="marquee-track flex items-center gap-12">
          {doubled.map((partner, i) => (
            <div
              key={i}
              className="flex items-center gap-3 shrink-0 group"
            >
              <div
                className="w-8 h-8 rounded-lg bg-navy/5 group-hover:bg-gold/10 
                           flex items-center justify-center transition-colors"
              >
                <span className="text-navy font-bold text-xs">
                  {partner.charAt(0)}
                </span>
              </div>
              <span className="text-gray-500 group-hover:text-navy font-semibold 
                               transition-colors whitespace-nowrap text-sm">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
