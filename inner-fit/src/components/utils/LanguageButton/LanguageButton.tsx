import useLanguage from "../../../hooks/useLanguage";

const LanguageButton = () => {


    const {language, toggleLanguage} = useLanguage();

    let languageText = 'En';
    if(language == 'en') {
        languageText = 'Es'
    } else {
        languageText = 'En'
    }

    const onClickHandler = () => {
        toggleLanguage();
    }

    return <div onClick={onClickHandler}>{languageText}</div>
}

export default LanguageButton