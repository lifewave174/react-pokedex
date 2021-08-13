import React from 'react'

const PokeCards = () => {
    return (
        <div className="main-section__white">
            <div className="main-section__black">
                <div className="main-screen hide">
                    <div className="screen__header">
                        <span className="poke-name"></span>
                        <span className="poke-id"></span>
                    </div>
                    <div className="screen__image">
                        <img src="" className="poke-front-image" alt="front" />
                        <img src="" className="poke-back-image" alt="back" />
                    </div>
                    <div className="screen__description">
                        <div className="stats__types">
                            <span className="poke-type-one"></span>
                            <span className="poke-type-two"></span>
                        </div>
                        <div className="screen__stats">
                            <p className="stats__weight">
                                weight: <span className="poke-weight"></span>
                            </p>
                            <p className="stats__height">
                                height: <span className="poke-height"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeCards;