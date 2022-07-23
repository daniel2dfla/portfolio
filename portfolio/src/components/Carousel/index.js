import React from 'react';
import './styles.css'

const Carousel = () => {
  return (
    <div className="container">
      <div className="carousel">
        <div className="carousel__face"><span><a href='https://github.com/daniel2dfla/Projeto-Labex#login-e-senha-para-teste' target="_blank">LabeX</a></span></div>
        <div className="carousel__face"><span><a href='https://github.com/daniel2dfla/Pokedex' target="_blank">PokedeX</a></span></div>
        <div className="carousel__face"><span><a href='https://github.com/daniel2dfla/Secret-Word' target="_blank">SecretWord</a></span></div>
        <div className="carousel__face"><span>Em breve...</span></div>
        <div className="carousel__face"><span>Em breve...</span></div>
        <div className="carousel__face"><span>Em breve...</span></div>
        <div className="carousel__face"><span>Em breve...</span></div>
        <div className="carousel__face"><span>Em breve...</span></div>
        <div className="carousel__face"><span>Em breve...</span></div>
      </div>
    </div>
  )
}

export default Carousel
