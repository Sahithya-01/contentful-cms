import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Contentful is a cloud-based content management system (CMS) designed
            for flexibility and developer-friendliness. It enables businesses to
            create, manage, and deliver digital content across various platforms
            through its robust API-first approach, offering RESTful and GraphQL
            APIs. With its customizable content model, intuitive editor
            interface, and support for multiple languages, Contentful allows
            seamless content management and delivery. Additionally, it supports
            webhooks for automated workflows and integrations, making it a
            versatile choice for modern content management needs.
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
