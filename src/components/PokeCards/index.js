import React from "react";

const PokeCards = ({
  pokeName,
  pokeId,
  type,
  type2,
  weight,
  height,
  frontSprite,
  backSprite,
}) => {
  const hideorshow = type;
  return (
    <div className="main-section__white">
      <div className="main-section__black">
        <div className={`main-screen ${hideorshow}`}>
          <div className="screen__header">
            <span className="poke-name">{pokeName}</span>
            <span className="poke-id">#{pokeId}</span>
          </div>
          <div className="screen__image">
            <img src={frontSprite} className="poke-front-image" alt="front" />
            <img src={backSprite} className="poke-back-image" alt="back" />
          </div>
          <div className="screen__description">
            <div className="stats__types">
              <span className="poke-type-one">{type}</span>
              <span
                className={`poke-type-two ${type2 === "" ? "hide" : ""
                  }`}>
                {type2}
              </span>
            </div>
            <div className="screen__stats">
              <p className="stats__weight">
                weight: <span className="poke-weight">{weight}</span>
              </p>
              <p className="stats__height">
                height: <span className="poke-height">{height}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCards;
