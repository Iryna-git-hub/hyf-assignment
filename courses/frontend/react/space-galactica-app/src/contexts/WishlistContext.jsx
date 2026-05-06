import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [planetsWishlist, setPlanetsWishlist] = useState([]);

  const addPlanetToWishlist = (name, thumbnail) => {
    setPlanetsWishlist((currentWishlist) => [
      ...currentWishlist,
      {
        name,
        thumbnail,
      },
    ]);
  };

  const removePlanetFromWishlist = (name) => {
    setPlanetsWishlist((currentWishlist) =>
      currentWishlist.filter((item) => item.name !== name),
    );
  };

  const isPlanetInWishlist = (planetName) => {
    return planetsWishlist.some((item) => item.name === planetName);
  };

  const wishlistCount = planetsWishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        planetsWishlist,
        addPlanetToWishlist,
        removePlanetFromWishlist,
        isPlanetInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
    return useContext(WishlistContext);
}
