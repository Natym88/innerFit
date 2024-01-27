import { FC } from 'react';
import { Styles } from "../../../hoc/WithRoundedStyle";
import useLanguage from "../../../hooks/useLanguage";
import { StyledDiv } from "./styles";

interface LanguageButtonProps {
    style?: Styles;
}

const LanguageButton: FC<LanguageButtonProps> = ({style}: LanguageButtonProps) => {


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

    return <StyledDiv onClick={onClickHandler} style={style} >{languageText}</StyledDiv>
}

export default LanguageButton