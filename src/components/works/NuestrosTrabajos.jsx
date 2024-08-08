import React from 'react';
import './NuestrosTrabajos.css'; 
import miTallerImg from '../../../public/images/mt.png'; 
import miControlImg from '../../../public/images/mc.png';

const NuestrosTrabajos = () => {
  return (
    <section className="nuestros-trabajos">
      <h1 className="titulo">Conoce nuestras aplicaciones</h1>
      <div className="trabajos-container">
        <div className="trabajo">
          <img src={miTallerImg} alt="Mi Taller" className="trabajo-img" />
          <h2>Mi Taller</h2>
          <p>Aplicación personalizada de escritorio creada en Java para la administración de taller mecánico, con base de datos para el registro, gestión de caja chica, vehículo, clientes, servicios, e inventario de refacciones.</p>
        </div>
        <div className="trabajo">
          <img src={miControlImg} alt="Mi Control" className="trabajo-img" />
          <h2>Mi Control</h2>
          <p>Desarrollo de una aplicación móvil en Android Studio para la administración de agenda, servicios, cursos e inventario, ventas y compras.</p>
        </div>
      </div>
    </section>
  );
};

export default NuestrosTrabajos;
