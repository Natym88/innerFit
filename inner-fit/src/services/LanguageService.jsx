import  useLanguage from '../context/LanguageContext';
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
    console.log(language, textsByLanguage, textsByLanguage[language]);
    return enTexts;
};

export {getLocalizedText}