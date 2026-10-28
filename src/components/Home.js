import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="card shadow-sm border-0 mb-4 p-4 p-md-5 text-center bg-white">
        <h1 className="display-6 fw-bold text-success mb-3">HotelEco</h1>
        <p className="lead text-muted mb-4">
          tu lugar de descanso ideal en la ciudad. confort, sustentabilidad, atencion personalizada y la mejor experiencia para tu estadia.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/booking" className="btn btn-success btn-lg px-4">
            <i className="bi bi-calendar-check me-2"></i>ver habitaciones
          </Link>
          <Link to="/contact" className="btn btn-outline-success btn-lg px-4">
            <i className="bi bi-envelope me-2"></i>contactanos
          </Link>
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-12 col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 text-center">
            <i className="bi bi-clock-history fs-1 text-success mb-3"></i>
            <h5 className="fw-bold mb-2">horarios</h5>
            <p className="text-muted small mb-1">
              <strong>check-in:</strong> a partir de las 14:00 hs
            </p>
            <p className="text-muted small mb-0">
              <strong>check-out:</strong> hasta las 10:00 hs
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 text-center">
            <i className="bi bi-geo-alt fs-1 text-success mb-3"></i>
            <h5 className="fw-bold mb-2">ubicacion centrica</h5>
            <p className="text-muted small mb-0">
              ubicados a pocas cuadras de la plaza principal, cerca de atractivos turisticos y locales gastronomicos.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 text-center">
            <i className="bi bi-shield-check fs-1 text-success mb-3"></i>
            <h5 className="fw-bold mb-2">atencion y seguridad</h5>
            <p className="text-muted small mb-0">
              recepcion abierta las 24 horas y circuito cerrado de seguridad para que disfrutes con total tranquilidad.
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-success text-white border-0 shadow-sm p-4 text-center">
        <h4 className="fw-bold mb-2">servicios incluidos en tu reserva</h4>
        <p className="mb-0">
          todas nuestras tarifas incluyen desayuno buffet, wifi libre en todo el establecimiento y cochera privada.
        </p>
      </div>
    </div>
  );
}

export default Home;
