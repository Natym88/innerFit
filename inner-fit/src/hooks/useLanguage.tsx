import { useContext } from 'react';
import { LanguageContext, LanguageContextProps } from '../context/LanguageContext';

const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context as LanguageContextProps;
};

export default useLanguage;

