import { Mail, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Tu Ebook Digital</h3>
            <p className="text-gray-400 leading-relaxed">
              Transformamos conocimiento en resultados reales. El método que necesitas para alcanzar tus objetivos.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#learn" className="hover:text-blue-400 transition-colors">
                  Contenido
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-400 transition-colors">
                  Precio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 mb-4">
              <a
                href="mailto:contacto@tuebook.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contacto@tuebook.com</span>
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tu Ebook Digital. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
