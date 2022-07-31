import React from "react";
import FavoriteContext from "../contexts/favoritesContext";

const { useContext } = React;

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  let imgUrl =
    "https://i.ibb.co/Tmw7X44/pixlr-bg-result.png";

  return (
    <nav>
      <div />
      <div>
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-image" />
      </div>
      <div>💛 {favoritePokemons.length}</div>
    </nav>
  );
};

export default Navbar;
