import { useLocation, useNavigate } from "react-router-dom"
import { HeroCard } from "../components"

import { useForm } from "../../hooks/useForm"
import { getHeroesByName } from "../helpers"

import queryString from 'query-string'

export const SearchPage = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const {q = ''} =  queryString.parse(location.search)
    const heroes = getHeroesByName(q)

    const showSearch = (q.length === 0)
    const showError = (q.length > 0) && heroes.length === 0

    const {searchText, onInputChange} = useForm({
        searchText: q
    })

    const onSearchSubmit = (e) => {
        e.preventDefault()
        // if ( searchText.trim().length <= 1 ) return; 

        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <h1>Buscar</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4>Busquedas</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input 
                            type="text"
                            placeholder="Buscar un héroe" 
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />

                        <button className="btn btn-outline-primary mt-1">
                            Buscar
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />

                    {/* {
                        q.length === 0 
                        ? <div className="alert alert-primary animate__animated animate__fadeIn">Buscar un héroe</div> 
                        : (heroes.length === 0) && <div className="alert alert-danger animate__animated animate__fadeIn">No hay resultados con <b>{ q }</b></div>
                    } */}

                    <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? '' : 'none'}}>
                        Buscar un héroe
                    </div>

                    <div className="alert alert-danger animate__animated animate__fadeIn" style={{display: showError ? '' : 'none'}}>
                        No hay resultados con <b>{ q }</b>
                    </div>

                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} hero={hero} />
                        ))
                    }
                </div>

            </div>

        </>
    )
}

// Para obtener el query parameter vamos a "navegar" como si fuera hacia otra página cuando el form se envie (linea 22),
// aunque va a ser la misma navigate(`?q=${searchText}`)
// De esta forma le indicamos que queremos que el query parameter de nuestra ruta sea 
// igual a la variable searchText (lo que se haya escrito en nuestro campo de texto/input)


// una vez que aparezca ese query parameter en nuestra ruta instalamos el paquete 'query-string' para facilitar el proceso
// de obtención de este parametro. 

// Lo importamos arriba : import queryString from 'query-string'

// Esta herramienta la vamos a utilizar para extraer todo lo que se encuentra en el 
// la propiedad search del objeto location que devuelve el hook useLocation  (linea 10)

// {pathname: '/search', search: '?q=batman', hash: '', state: null, key: 'y524ihcc'} (objeto location)

// el query parameter que precisamos se encuentra en la propiedad search por lo que hacemos lo siguente con la herramienta query-string

// const query =  queryString.parse(location.search)

// Esto nos va a parsear la propiedad search y devolver un objeto como este:

// {q: 'batman'} y si tuviera más parametros estarían separados de esta forma en este objeto

// y de dicho objeto podriamos desestructurar la propiedad 'q' y utlizarla directamente