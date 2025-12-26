import { Check, X, ArrowRight, Sparkles } from 'lucide-react'

export default function PricingCTA() {
  const handleBuyClick = () => {
    alert('Para integrar pagos con Stripe, Hotmart o Mercado Pago, por favor configura tu método de pago preferido. Puedes conectar tu cuenta y personalizar el botón de compra.')
  }

  return (
    <section id="pricing" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Oferta Especial por Tiempo Limitado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Inversión en Tu Futuro
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Menos de lo que cuesta un curso online, con valor para toda la vida
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sin Este Ebook</h3>
                <p className="text-gray-600">Lo que te costará seguir como hasta ahora</p>
              </div>

              <ul className="space-y-4 flex-grow">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Meses probando sin dirección clara</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cursos de $200-$500 que no cumplen</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Información dispersa y confusa</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Frustración y tiempo perdido</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-300">
                <p className="text-3xl font-bold text-red-600 mb-2">$1,000+</p>
                <p className="text-gray-600">Costo estimado de aprendizaje por tu cuenta</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl transform lg:scale-105 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-400 text-amber-900 px-4 py-1 rounded-bl-lg font-bold text-sm">
                MEJOR OPCIÓN
              </div>

              <div className="mb-6 mt-4">
                <h3 className="text-2xl font-bold mb-2">Con Este Ebook</h3>
                <p className="text-blue-100">Todo lo que necesitas en un solo lugar</p>
              </div>

              <ul className="space-y-4 flex-grow">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>Método probado y estructurado paso a paso</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>250+ páginas de contenido premium</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>Acceso instantáneo y de por vida</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>Actualizaciones gratuitas incluidas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>Garantía de 30 días</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-white/30">
                <div className="mb-4">
                  <span className="text-white/80 line-through text-xl">$99</span>
                  <p className="text-4xl font-bold mb-2">$49</p>
                  <p className="text-blue-100">Pago único. Sin suscripciones.</p>
                </div>

                <button
                  onClick={handleBuyClick}
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group mt-6"
                >
                  Comprar Ahora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-sm text-blue-100 mt-4">
                  Acceso inmediato después del pago
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">30 días</div>
              <p className="text-gray-700">Garantía de devolución</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
              <p className="text-gray-700">Copias vendidas</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <p className="text-gray-700">Valoración promedio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
