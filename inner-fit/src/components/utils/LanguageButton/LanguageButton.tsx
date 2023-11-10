import { FC } from "react";
import { Styles } from "../../../hoc/WithRoundedStyle";
import useLanguage from "../../../hooks/useLanguage";
import { StyledDiv } from "./styles";
import { ChevronDown } from "react-bootstrap-icons";

interface LanguageButtonProps {
    style?: Styles;
}

const LanguageButton: FC<LanguageButtonProps> = ({style}) => {


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

    return <StyledDiv onClick={onClickHandler} style={style} >{languageText}<ChevronDown /></StyledDiv>
}

export default LanguageButton