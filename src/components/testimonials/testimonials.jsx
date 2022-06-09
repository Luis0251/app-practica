import React from 'react'

const Testimonials = () => {
  return (
    <><div className="container-test">
      <img className="img-test" src={require('../img/testimonio-emma.png')} alt="foto-emma" />
      <div className="container-text-test">
        <p className="nombre-test">Emma</p>
        <p className="cargo-test">Ingeniera</p>
        <p className="descripcion-test">lorem ipsum dolor sit amet, con</p></div>
    </div>
    
    <div className="container-test">
        <img className="img-test" src={require('../img/testimonio-sarah.png')} alt="foto-sarah" />
        <div className="container-text-test">
          <p className="nombre-test">Sarah</p>
          <p className="cargo-test">Ingeniera</p>
          <p className="descripcion-test">lorem ipsum dolor sit amet, con</p></div>
      </div>

      <div className="container-test">
        <img className="img-test" src={require('../img/testimonio-shawn.png')} alt="foto-shawn" />
        <div className="container-text-test">
          <p className="nombre-test">shawn</p>
          <p className="cargo-test">Arquitecto</p>
          <p className="descripcion-test">lorem ipsum dolor sit amet, con</p></div>
      </div></>
  )
}

export default Testimonials