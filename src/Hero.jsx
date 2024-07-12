import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            delectus eligendi libero sed ipsam perspiciatis non, laborum
            similique esse rerum! Assumenda illum voluptatum distinctio et,
            dicta voluptatibus omnis. Accusantium, sapiente.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="alternative text" className="img" />
        </div>
      </div>
    </section>
  )
}

export default Hero
