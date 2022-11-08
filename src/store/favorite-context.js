import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoriteContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoritesHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoritesHandler(meetupId){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
        });
    }

    function itemFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId);
    }
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoritesHandler,
    removeFavorite: removeFavoritesHandler,
    itemIsFavorite: itemFavoriteHandler,
  };
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteContext;