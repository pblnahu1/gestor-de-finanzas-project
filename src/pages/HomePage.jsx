import { useEffect } from "react";
import Carousel from "../components/Carousel";
import ContentHero from "../components/ContentHero";

export default function HomePage() {
    useEffect(() => {
        document.title = 'Gestión de Finanzas'
    }, [])
    return (
        <>
            <Carousel />
            <ContentHero />
        </>
    )
}