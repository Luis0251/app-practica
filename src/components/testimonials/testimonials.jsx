import React from 'react'
import './testimonials.css'

const Testimonials = (props) => {
  return (
    <div className="container-test">
      <img className="img-test" src={props.img} alt="foto-emma" />
      <div className="container-text-test">
        <p className="nombre-test">{props.name}</p>
        <p className="cargo-test">{props.cargo}</p>
        <p className="descripcion-test"></p>{props.description}</div>
    </div>
  )
}

export default Testimonials