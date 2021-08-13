import React from "react";
import pokelogo from "./pokedex_logo.png";
import PokeCards from "../PokeCards"
import PokeList from "../PokeList";
import PrevNext from "../PrevNext";
import "./style.css";

const MainLayout = () => {
    return (
        <div className="body">
            <img src={pokelogo} className="logo" alt="pokedex logo" />
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
                            <PokeCards />
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
                        <PokeList />

                    </div>
                    <PrevNext />

                </div>
            </div>
        </div>
    );
};

export default MainLayout;
