import { REMOVE_FAV, ADD_FAV, ORDER, FILTER } from "./actions-type"

const initialState = {
    myFavorites: [],
    allCharacters: []
}


const reducer = (state = initialState, {type, payload}) => {
        switch(type){
    
    case ADD_FAV:
          return { ...state, 
          myFavorites: payload, 
          allCharacters: payload }   
    
    case REMOVE_FAV:
        return { 
        ...state,
         myFavorites: payload 
        }

    case FILTER: 
    const copyAllCharacters = state.allCharacters.filter(char => 
        char.gender === payload) // filter crea un nuevo array
        return {
            ...state,
            myFavorites : copyAllCharacters
        }
    
    case ORDER: 
    const copy2AllCharacters = [...state.allCharacters] // sort() modifica el array
    return {
        ...state,
        myFavorites: 
         payload === 'A' ? 
         copy2AllCharacters.sort((a, b ) => a.id - b.id) 
         : 
         copy2AllCharacters.sort((a,b) => b.id - a.id)
    }
   

        default: return {
            ...state
        }
     }
}



export default reducer