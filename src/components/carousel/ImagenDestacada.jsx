import React from 'react';
import './ImagenDestacada.css';
import imagen from '../../../public/images/50E21E28-95AD-48B8-9C9B-158832976EBB_1_201_a.jpeg';

const ImagenDestacada = () => {
  return (
    <div className="imagen-destacada">
      <img src={imagen} alt="Imagen destacada" />
    </div>
  );
};

export default ImagenDestacada;
