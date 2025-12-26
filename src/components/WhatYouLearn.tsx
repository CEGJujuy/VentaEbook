import { CheckCircle2 } from 'lucide-react'

const learningPoints = [
  {
    title: 'Fundamentos Sólidos',
    description: 'Construye bases fuertes desde cero con explicaciones claras y prácticas'
  },
  {
    title: 'Técnicas Avanzadas',
    description: 'Domina estrategias probadas que usan los profesionales exitosos'
  },
  {
    title: 'Casos Prácticos Reales',
    description: 'Aplica lo aprendido con ejemplos del mundo real y ejercicios prácticos'
  },
  {
    title: 'Método Paso a Paso',
    description: 'Sigue un sistema estructurado que te lleva de la teoría a la acción'
  },
  {
    title: 'Evita Errores Comunes',
    description: 'Aprende de los errores más frecuentes y cómo prevenirlos desde el inicio'
  },
  {
    title: 'Resultados Medibles',
    description: 'Implementa métricas y seguimiento para ver tu progreso en tiempo real'
  }
]

export default function WhatYouLearn() {
  return (
    <section id="learn" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo Que Vas a Aprender
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contenido diseñado para llevarte del punto A al punto B de la forma más eficiente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningPoints.map((point, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-blue-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
