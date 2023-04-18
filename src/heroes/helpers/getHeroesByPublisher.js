import {heroes} from '../data/heroes'

export const getHeroesByPUblisher = ( publisher ) => {
    const validPulishers = ['DC Comics', 'Marvel Comics']
    if( !validPulishers.includes( publisher ) ) {
        throw new Error(`${ publisher } is not a valid publisher`)
    }

    return heroes.filter( heroe => heroe.publisher === publisher )
}