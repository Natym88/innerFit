import enTexts from '../locales/en.json';
import esTexts from '../locales/es.json';

type Language = "en" | "es";

const textsByLanguage = {
    en: enTexts,
    es: esTexts
}

const getLocalizedText = (language: Language) => {
    if(language in textsByLanguage){
        return textsByLanguage[language as keyof typeof textsByLanguage];
    }
    return enTexts;
};

export { getLocalizedText };
