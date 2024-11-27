
import { useNavigate } from "react-router-dom"

export default function ContentHero() {

  const navigate = useNavigate()

  const handleStartClick = () => {
    navigate('/login')
  }

  return (

    // <div className=" rounded-box top-0 z-[-2] py-32 px-7 bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-5%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    <div className="rounded-3xl top-0 z-[-2] bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-500 text-white lg:py-32 md:py-4 px-7 text-center">
      <div className="hero min-h-full rounded-box">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-lg lg:text-5xl font-bold mb-4">¡Descubre el poder de tus finanzas!</h1>
            <p className="text-base lg:text-lg py-6">
              ¿Sientes que tus gastos te abruman? Con un gestor de finanzas a tu lado, podrás transformar tu economía personal. Te ayudamos a planificar, optimizar y alcanzar tus metas financieras con estrategias efectivas. No más preocupaciones, solo resultados. Toma el control de tu futuro hoy mismo y haz que tu dinero cuente. 
            </p>
            
            <button
              className="bg-black text-white px-6 py-4 rounded-lg"
              onClick={handleStartClick}
            >
              Comenzar
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}