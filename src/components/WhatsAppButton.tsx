import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '1234567890'
    const message = encodeURIComponent('Hola! Tengo una consulta sobre el ebook.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 group flex items-center gap-3 hover:pr-6"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium">
        ¿Preguntas?
      </span>
    </button>
  )
}
