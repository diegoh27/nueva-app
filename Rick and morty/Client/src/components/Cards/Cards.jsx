import Card from '../Card/Card';

  const Cards = (props) =>  {
   const {characters} = props
   const {onClose} = props
    return (   
      <div>
      
      {
        
        characters.map((character => {
          return (
          <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
          onClose = {onClose}
              />
             )
            }
           )
          )
        }
      </div>
    )
  }


export default Cards