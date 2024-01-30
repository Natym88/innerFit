
import useLanguage from '../hooks/useLanguage';
import enTexts from '../locales/en.json';
import esTexts from '../locales/es.json';

const textsByLanguage = {
    en: enTexts,
    es: esTexts
}

const getLocalizedText = () => {
    const context = useLanguage();
    if(context){
        return textsByLanguage[context.language]
    }
    return enTexts;
};

export { getLocalizedText };
