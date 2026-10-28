import React, { useState } from 'react';

function Booking() {
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState(null);

  const habitaciones = [
    {
      id: 1,
      nombre: 'habitacion simple',
      capacidad: '1 persona',
      precio: '$25.000 / noche',
      icono: 'bi-person',
      descripcion: 'cama individual, bano privado, aire acondicionado, smart tv y wifi.'
    },
    {
      id: 2,
      nombre: 'habitacion doble',
      capacidad: '2 personas',
      precio: '$38.000 / noche',
      icono: 'bi-people',
      descripcion: 'cama matrimonial o dos individuales, vista panoramica y frigobar.'
    },
    {
      id: 3,
      nombre: 'suite matrimonial',
      capacidad: '2 personas',
      precio: '$55.000 / noche',
      icono: 'bi-gem',
      descripcion: 'cama king size, hidromasaje, balcon privado y desayuno a la cama.'
    },
    {
      id: 4,
      nombre: 'suite familiar',
      capacidad: '4 personas',
      precio: '$70.000 / noche',
      icono: 'bi-house-heart',
      descripcion: 'dos dormitorios separados, sala de estar amplia y minibar incluido.'
    }
  ];

  const reservar = (nombre) => {
    setHabitacionSeleccionada(nombre);
    alert('seleccionaste la ' + nombre);
  };

  return (
    <div>
      <div className="text-center mb-4">
        <h2 className="text-success fw-bold">reserva de habitaciones</h2>
        <p className="text-muted">conoce nuestras 4 opciones y elegi la ideal para tu estadia:</p>
      </div>

      {habitacionSeleccionada && (
        <div className="alert alert-success d-flex align-items-center justify-content-center shadow-sm mb-4">
          <i className="bi bi-check-circle-fill me-2 fs-5"></i>
          <div>
            habitacion seleccionada: <strong>{habitacionSeleccionada}</strong>
          </div>
        </div>
      )}

      <div className="row g-4">
        {habitaciones.map((hab) => (
          <div key={hab.id} className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge bg-success-subtle text-success border border-success-subtle">
                    <i className={`bi ${hab.icono} me-1`}></i>
                    {hab.capacidad}
                  </span>
                  <i className="bi bi-star-fill text-warning"></i>
                </div>

                <h5 className="card-title fw-bold mb-2">{hab.nombre}</h5>
                <p className="card-text text-muted small flex-grow-1">{hab.descripcion}</p>

                <div className="my-3">
                  <span className="fs-5 fw-bold text-success">{hab.precio}</span>
                </div>

                <button
                  className="btn btn-success w-100"
                  onClick={() => reservar(hab.nombre)}
                >
                  <i className="bi bi-calendar-check me-2"></i>reservar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Booking;
