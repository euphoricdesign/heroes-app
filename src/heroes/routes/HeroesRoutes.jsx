import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />

                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />

                    <Route path="/" element={<Navigate to="/marvel" />} /> 
                </Routes>
            </div>

        </>
    )
}

// usamos el <Navigate /> en lugar del componente <MarvelPage /> por dos razones: no tiene sentido tener repetido el componente y
// si utilizaramos el comodín (*) para que sea cual sea la busqueda nos lleve a la página de marvel nos redirigirá a dicha pàgina 
// y la URL cambiará a '/marvel' en lugar de quedarse con lo que sea que hayamos buscado y no coincida con la pag de marvel