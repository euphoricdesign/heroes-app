import { HeroCard } from "./HeroCard"
import { getHeroesByPUblisher } from "../helpers/getHeroesByPublisher"

export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPUblisher(publisher)

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero => 
                     <HeroCard key={hero.id} hero={hero}/>
                )
            }
        </div>
    )
}
