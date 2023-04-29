import { connect } from 'react-redux'
import Card from '../Card/Card';
import { useDispatch} from 'react-redux'
import { useState } from 'react';
import  {  filterCards, orderCards  } from '../../redux/./actions'



const Favorites = ({myFavorites }) => {
   // const dispatch = useDispatch()
   const [aux, SetAux] = useState(false)
   const dispatch = useDispatch();

   const handleOrder = (event) => {
      // const o = event.target.value
      dispatch(orderCards(event.target.value))
      SetAux(true)
   }
   const handleFilter = (event) => {
      // const f = event.target.value
      dispatch(filterCards(event.target.value))
   }



     return (
        <div>
          <select onChange={handleOrder}> 
            <option value="A">Ascendente</option>
               <option value="D">Descendente</option>
                  </select>

                     <select onChange={handleFilter} >
                        <option value="Male">Male</option>
                     <option value="Female">Female</option>
                  <option value="Genderless">Genderless</option>
               <option value="unknown">Unknown</option>
            </select>

       
      {
         myFavorites?.map(char => {
            return  (<Card 
               key = {char.id}
               name = {char.name}
               status = {char.status}
               species = {char.species}
               image={char.image}
               id = {char.id}
               origin={char.origin}
               onClose={()=>{return }}
               
               
            />
            )
         })
      }
        
        </div>
     )
 }

 const mapStateToProps = (state) => {
  return {
    myFavorites : state.myFavorites
  }
 }
//  const mapDispatchToProps = (dispatch) => {
//    return {
//       orderCards: (o) => { dispatch(orderCards(o)) },
//       filterCards: (f) => { dispatch(filterCards(f)) }
//    }
//  }

 export default connect(
    mapStateToProps,
   null
 )(Favorites);