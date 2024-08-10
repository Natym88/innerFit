import { PopupContentType } from '@/models/popup-content';
import React, { ReactNode } from 'react'

interface Props {
    isOpen: boolean,
    onClose: () => void,
    contentType: PopupContentType;
}
const Popup = ({ isOpen, onClose, contentType }: Props) => {
    if (!isOpen) return null;
  
    const renderContent = () => {
        switch (contentType) {
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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded-lg w-11/12 h-5/6 max-w-3xl overflow-auto relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-black"
          >
            ✖
          </button>
          {renderContent()}
        </div>
      </div>
    );
  };
  
  export default Popup;