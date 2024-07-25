
import { useNavigate } from "react-router-dom"

export default function ContentHero() {

  const navigate = useNavigate()

  const handleStartClick = () => {
    navigate('/login')
  }

  return (

    <div className="mt-5 rounded-box top-0 z-[-2] py-32 px-7 bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-5%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="hero min-h-full rounded-box">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">¡Descubre el poder de tus finanzas!</h1>
            <p className="py-6 text-justify">
              ¿Sientes que tus gastos te abruman? Con un gestor de finanzas a tu lado, podrás transformar tu economía personal. Te ayudamos a planificar, optimizar y alcanzar tus metas financieras con estrategias efectivas. No más preocupaciones, solo resultados. Toma el control de tu futuro hoy mismo y haz que tu dinero cuente. ¡Es hora de construir la vida que deseas!
            </p>
            <button
              className="btn btn-primary hover:shadow-lg transition-shadow duration-300 ease-in-out"
              onClick={handleStartClick}
            >
              Comenzar!
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}