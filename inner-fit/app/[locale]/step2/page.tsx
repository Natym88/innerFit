"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation';

const Step2 = () => {

    const searchParams = useSearchParams();
    const type = searchParams.get('type');

    const renderContent = () => {
        switch (type) {
          case 'selectIssue':
            return <div>Acá viene el buscador de síntomas</div>;
          case 'takeTest':
            return <div>Acá van a estar los tests</div>;
          case 'selfTherapy':
            return <div>Acá los recursos de self-therapy</div>;
          case 'findHelp':
            return <div>Datos de líneas de ayuda y profesionales</div>;
          default:
            return <div>Contenido no disponible</div>;
        }
      };

  return (
    <>
        {renderContent()}
    </>
  )
}

export default Step2