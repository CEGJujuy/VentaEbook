import { Book, Download, Lock, Star } from 'lucide-react'

export default function EbookPreview() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Valorado con 4.9/5 estrellas</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tu Guía Definitiva en Formato Digital
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Un ebook completo, profesional y fácil de seguir que puedes llevar contigo a cualquier lugar. Diseñado para lectura rápida y aplicación inmediata.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <Book className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Formato PDF Premium</h3>
                  <p className="text-gray-600">Optimizado para lectura en cualquier dispositivo</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <Download className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Descarga Inmediata</h3>
                  <p className="text-gray-600">Acceso instantáneo después de tu compra</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <Lock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Actualizaciones Gratuitas</h3>
                  <p className="text-gray-600">Acceso a todas las futuras actualizaciones</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
              <p className="text-gray-700 italic">
                "Este ebook cambió completamente mi forma de abordar el tema. En 2 semanas vi resultados que no había logrado en meses."
              </p>
              <p className="text-gray-900 font-semibold mt-3">— María González, Emprendedora</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-1 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-xl p-8 aspect-[3/4] w-full max-w-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Book className="w-16 h-16 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Tu Ebook</h3>
                    <p className="text-gray-600 mb-4">Guía Completa</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <p>250+ Páginas</p>
                      <p>15 Capítulos</p>
                      <p>PDF Premium</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
