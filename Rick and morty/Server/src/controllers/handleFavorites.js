

let myFavorites = [];


const postFav = (req, res) => {
    const character  = req.body
    myFavorites.push(character)
    return res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    const filterFavs = myFavorites.filter((favs) => 
        favs.id !== Number(id))
         myFavorites = filterFavs
        res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}