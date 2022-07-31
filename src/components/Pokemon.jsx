import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } = useContext(
    FavoriteContext
  );

  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img
          src={"http://play.pokemonshowdown.com/sprites/xyani/" + pokemon.name + ".gif"}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="stats-container">
          <div> ❤️{pokemon.stats[0].base_stat}</div>
          <div> ⚔️{pokemon.stats[1].base_stat}</div>
          <div> 🛡️{pokemon.stats[2].base_stat}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, idx) => {
              let typeName = type.type.name;
              return (
                <div key={idx} className="pokemon-type-text">
                  {
                    typeName === "poison" ? <img src="https://i.ibb.co/1nk6LgS/Tipo-veneno.webp" alt="Tipo-veneno" border="0" /> :
                      typeName === "grass" ? <img src="https://i.ibb.co/g6BNShB/Tipo-planta.webp" alt="Tipo-planta" border="0" /> :
                        typeName === "fire" ? <img src="https://i.ibb.co/M2scN6v/Tipo-fuego.webp" alt="Tipo-fuego" border="0" /> :
                          typeName === "water" ? <img src="https://i.ibb.co/LYcxPHJ/Agua.webp" alt="Agua" border="0" /> :
                            typeName === "electric" ? <img src="https://i.ibb.co/ZKqmCgr/Tipo-el-ctrico.webp" alt="Tipo-el-ctrico" border="0" /> :
                              typeName === "ground" ? <img src="https://i.ibb.co/5WfHcyH/Tipo-tierra.webp" alt="Tipo-tierra" border="0" /> :
                                typeName === "rock" ? <img src="https://i.ibb.co/Fmt7BwV/Tipo-roca.webp" alt="Tipo-roca" border="0" /> :
                                  typeName === "ice" ? <img src="https://i.ibb.co/fYGPKTm/Tipo-hielo.webp" alt="Tipo-hielo" border="0" /> :
                                    typeName === "fighting" ? <img src="https://i.ibb.co/c8dW2Rs/Tipo-lucha.webp" alt="Tipo-lucha" border="0" /> :
                                      typeName === "psychic" ? <img src="https://i.ibb.co/9TQd2xy/Tipo-ps-quico.webp" alt="Tipo-ps-quico" border="0" /> :
                                        typeName === "ghost" ? <img src="https://i.ibb.co/Sc32CZS/Tipo-fantasma.webp" alt="Tipo-fantasma" border="0" /> :
                                          typeName === "dragon" ? <img src="https://i.ibb.co/hc9FRhg/Dragon.webp" alt="Dragon" border="0" /> :
                                            typeName === "dark" ? <img src="https://i.ibb.co/cC9jkp4/Tipo-siniestro.webp" alt="Tipo-siniestro" border="0" /> :
                                              typeName === "steel" ? <img src="https://i.ibb.co/hFkHSwF/Acero.webp" alt="Acero" border="0" /> :
                                                typeName === "fairy" ? <img src="https://i.ibb.co/WNhjQnP/Tipo-hada.webp" alt="Tipo-hada" border="0" /> :
                                                  typeName === "normal" ? <img src="https://i.ibb.co/X8Dn0c6/Tipo-normal.webp" alt="Tipo-normal" border="0" /> :
                                                    typeName === "flying" ? <img src="https://i.ibb.co/KjN99x8/Tipo-volador.webp" alt="Tipo-volador" border="0" /> :
                                                      typeName === "bug" ? <img src="https://i.ibb.co/dBqyVZG/bicho.webp" alt="bicho" border="0" /> :
                                                        [typeName]
                  }
                </div>
              );
            })}
          </div>
          <button onClick={clickHeart} className="pokemon-heart-btn">
            <div className="pokemon-favorite">{heart}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
