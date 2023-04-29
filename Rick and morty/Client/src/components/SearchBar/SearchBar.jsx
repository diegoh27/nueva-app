import { useState } from "react";

const SearchBar =  ({onSearch, agregar}) => {
   
   const [id, setId] = useState('')

   let handleChange = (event) => {
      setId(event.target.value)
      
}
   return (
      <div>
         
         <input type='search' onChange = {handleChange} value = {id} />
         
         <button onClick = { () => {onSearch(id);  setId("") } } >Agregar</button> 
         
      </div>
      
   );
}


export default SearchBar