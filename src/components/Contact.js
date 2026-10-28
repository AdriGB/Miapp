import React, { useState } from 'react';

function Contact() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const enviar = (e) => {
    e.preventDefault();
    alert('gracias ' + nombre + ', recibimos tu consulta con exito.');
    setNombre('');
    setMensaje('');
  };

  return (
    <div>
      <div className="text-center mb-4">
        <h2 className="text-success fw-bold">contactos</h2>
        <p className="text-muted">comunicate con nosotros para consultas o reservas directas</p>
      </div>

      <div className="row g-4">
        <div className="col-12 col-md-5">
          <div className="card shadow-sm border-0 h-100 p-4">
            <h5 className="fw-bold mb-3">informacion de contacto</h5>

            <div className="d-flex align-items-start mb-3">
              <i className="bi bi-geo-alt-fill text-success fs-5 me-3"></i>
              <div>
                <strong>direccion:</strong>
                <p className="text-muted small mb-0">av. san martin 450, salta, argentina</p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <i className="bi bi-telephone-fill text-success fs-5 me-3"></i>
              <div>
                <strong>telefono:</strong>
                <p className="text-muted small mb-0">+54 387 4123456</p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <i className="bi bi-envelope-fill text-success fs-5 me-3"></i>
              <div>
                <strong>email:</strong>
                <p className="text-muted small mb-0">contacto@hoteleco.com</p>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <i className="bi bi-clock-fill text-success fs-5 me-3"></i>
              <div>
                <strong>horario:</strong>
                <p className="text-muted small mb-0">atencion las 24 horas todos los dias</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-7">
          <div className="card shadow-sm border-0 p-4">
            <h5 className="fw-bold mb-3">envianos un mensaje</h5>
            <form onSubmit={enviar}>
              <div className="mb-3">
                <label className="form-label small text-muted">tu nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ejemplo: juan perez"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label small text-muted">tu consulta</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="escribe tu consulta aqui..."
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-success w-100">
                <i className="bi bi-send-fill me-2"></i>enviar consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
