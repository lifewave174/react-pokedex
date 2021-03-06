import React from "react";
import PokeCards from "../PokeCards";
import PokeList from "../PokeList";
import PrevNext from "../PrevNext";
import pokelogo from "./pokedex_logo.png";
import "./style.css";

const MainLayout = ({
  pokemon,
  onNextSelect,
  onPrevSelect,
  onPokeSelect,
  pokeName,
  pokeId,
  type,
  type2,
  weight,
  height,
  frontSprite,
  backSprite,
}) => {
  return (
    <div className="body">
      <div className="logo">
        <img src={pokelogo} alt="pokedex logo" />
      </div>
      <div className="pokedex">
        <div className="left-container">
          <div className="left-container__top-section">
            <div className="top-section__blue"></div>
            <div className="top-section__small-buttons">
              <div className="top-section__red"></div>
              <div className="top-section__yellow"></div>
              <div className="top-section__green"></div>
            </div>
          </div>
          <div className="left-container__main-section-container">
            <div className="left-container__main-section">
              <PokeCards
                pokeName={pokeName}
                pokeId={pokeId}
                type={type}
                weight={weight}
                height={height}
                frontSprite={frontSprite}
                backSprite={backSprite}
                type2={type2}
              />
              <div className="left-container__controllers">
                <div className="controllers__d-pad">
                  <div className="d-pad__cell top"></div>
                  <div className="d-pad__cell left"></div>
                  <div className="d-pad__cell middle"></div>
                  <div className="d-pad__cell right"></div>
                  <div className="d-pad__cell bottom"></div>
                </div>
                <div className="controllers__buttons">
                  <div className="buttons__button">B</div>
                  <div className="buttons__button">A</div>
                </div>
              </div>
            </div>
            <div className="left-container__right">
              <div className="left-container__hinge"></div>
              <div className="left-container__hinge"></div>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="right-container__black">
            <PokeList pokemon={pokemon} onPokeSelect={onPokeSelect} />
          </div>
          <PrevNext onNextSelect={onNextSelect} onPrevSelect={onPrevSelect} />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
