import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6368894/pexels-photo-6368894.jpeg?auto=compress&cs=tinysrgb&w=1920')] opacity-5 bg-cover bg-center"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Más de 5,000 copias vendidas</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Domina <span className="text-blue-600">Tu Habilidad</span> en Tiempo Récord
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            El método probado que te llevará de principiante a experto, paso a paso, sin perder tiempo en información innecesaria
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToPrice}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center transform hover:scale-105"
            >
              Comprar Ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => document.getElementById('learn')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 w-full sm:w-auto"
            >
              Ver Contenido
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">250+</div>
              <div className="text-sm text-gray-600">Páginas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">15</div>
              <div className="text-sm text-gray-600">Capítulos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Digital</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Acceso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
