import { X, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ProblemSolution() {
  const problems = [
    'Información dispersa y desorganizada en internet',
    'Cursos caros que no cumplen lo prometido',
    'Falta de tiempo para aprender de forma estructurada',
    'No sabes por dónde empezar ni qué priorizar'
  ]

  const solutions = [
    'Todo concentrado en un solo lugar, organizado y listo para usar',
    'Inversión única con acceso de por vida al contenido',
    'Aprende a tu ritmo, cuando quieras, donde quieras',
    'Ruta clara y paso a paso para tu aprendizaje'
  ]

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            El Problema Que Resolvemos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sabemos exactamente por lo que estás pasando
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Tu Situación Actual</h3>
            </div>

            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{problem}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-100">
              <p className="text-gray-700 font-medium">
                Resultado: Frustración, tiempo perdido y progreso lento
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-lg text-white lg:mt-0 -mt-4 lg:ml-0 relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Tu Nueva Realidad</h3>
            </div>

            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{solution}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30">
              <p className="font-medium">
                Resultado: Progreso rápido, claridad total y resultados reales
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
