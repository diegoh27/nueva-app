 import { NavLink } from 'react-router-dom'
 import { addFav, removeFav } from '../../redux/actions';
 import { connect } from 'react-redux'
 import { useState, useEffect } from 'react'
 
 const Card = ({id, name, status, species, image, gender, onClose, 
   origin, addFav, removeFav, myFavorites}) => {
      
      const [isFav, setIsFav] = useState(false);

      
     const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({id,name,status,species,image,
         gender,origin})
      }
   }

   useEffect(() => {
      myFavorites.forEach((char) => {
       
         if ( char.id === id) {
            setIsFav(true);
         }
      });

   }, [myFavorites]);
       
return (
      <div>
      {
       isFav ? (
      <button onClick={handleFavorite}>❤️</button>
      ) : (
      <button onClick={handleFavorite}>🤍</button>
      )
      }

        <button onClick= { () => onClose(id) } >X</button>
            <NavLink to = {`/detail/${id}`} > 
             <h2>{name}</h2>
            </NavLink>
             <h2>{status}</h2>
             <h2>{species}</h2>
             <h2>{gender}</h2>
             {origin.name ? <h2>{origin.name}</h2> : null}
            
            
            <img src={image} alt='' />
             
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
         return {
      addFav : (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id))}
      
         }
}



const mapStateToProps = (state) => {
      return {
         myFavorites : state.myFavorites
      }
}


export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);

