import { Target, TrendingUp, Clock, Award, Users, Zap } from 'lucide-react'

const benefits = [
  {
    icon: Target,
    title: 'Claridad Absoluta',
    description: 'Sabrás exactamente qué hacer, cuándo y por qué en cada etapa'
  },
  {
    icon: TrendingUp,
    title: 'Resultados Rápidos',
    description: 'Ve progresos tangibles en las primeras semanas de aplicación'
  },
  {
    icon: Clock,
    title: 'Ahorra Tiempo',
    description: 'Evita meses de prueba y error con un método probado'
  },
  {
    icon: Award,
    title: 'Conocimiento Premium',
    description: 'Técnicas y estrategias usadas por expertos de la industria'
  },
  {
    icon: Users,
    title: 'Casos de Éxito',
    description: 'Aprende de ejemplos reales y aplicables a tu situación'
  },
  {
    icon: Zap,
    title: 'Acción Inmediata',
    description: 'Listo para implementar desde el primer capítulo'
  }
]

export default function Benefits() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Los Beneficios Que Obtendrás
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Resultados concretos y medibles que verás desde el primer día
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Garantía de Satisfacción
          </h3>
          <p className="text-lg text-blue-50 max-w-2xl mx-auto">
            Si después de leer el ebook consideras que no cumple con tus expectativas, te devolvemos el 100% de tu inversión durante los primeros 30 días. Sin preguntas.
          </p>
        </div>
      </div>
    </section>
  )
}
