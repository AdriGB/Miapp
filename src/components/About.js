import React from 'react';

function About() {
  return (
    <div className="card shadow-sm border-0 p-4">
      <div className="text-center mb-4">
        <h2 className="text-success fw-bold">HotelEco</h2>
        <p className="text-muted">
          bienvenido a HotelEco, un espacio ecologico y pensado para tu descanso y confort en el centro de la ciudad.
        </p>
      </div>

      <div className="row g-3">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 border-0 bg-light p-3 text-center">
            <i className="bi bi-cup-hot fs-1 text-success mb-2"></i>
            <h5 className="fw-bold">desayuno incluido</h5>
            <p className="text-muted small mb-0">buffet todas las mananas con productos regionales.</p>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 border-0 bg-light p-3 text-center">
            <i className="bi bi-wifi fs-1 text-success mb-2"></i>
            <h5 className="fw-bold">wifi gratis</h5>
            <p className="text-muted small mb-0">conexion de alta velocidad en habitaciones y areas comunes.</p>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 border-0 bg-light p-3 text-center">
            <i className="bi bi-water fs-1 text-success mb-2"></i>
            <h5 className="fw-bold">piscina y spa</h5>
            <p className="text-muted small mb-0">pileta climatizada, sauna e hidromasajes.</p>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 border-0 bg-light p-3 text-center">
            <i className="bi bi-p-square fs-1 text-success mb-2"></i>
            <h5 className="fw-bold">estacionamiento</h5>
            <p className="text-muted small mb-0">cochera cubierta con seguridad privada las 24 horas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
