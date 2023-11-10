import WithRoundedStyle, { Styles } from "../../../hoc/WithRoundedStyle";
import LanguageButton from "../../utils/LanguageButton/LanguageButton";
import { StyledDiv } from "./styles";
import { Menu } from "../Menu";

interface NavProps {
  style?: Styles,
  isMobile: boolean
}

const styleProps = {
  padding: '0'
}

const styleButtonProps = {
  width: '48px'
}

const Navbar = ({isMobile}: NavProps) => {

    const StyledButton = WithRoundedStyle(LanguageButton, styleButtonProps)

    const StyledMenu = WithRoundedStyle(Menu, styleProps)

  return (
    <>
    {!isMobile ? <StyledDiv mobile={isMobile}><StyledMenu /> <StyledButton /></StyledDiv> : <StyledDiv mobile={isMobile}> <StyledButton /> <Menu /> </StyledDiv>}
    </>
  )
}

export default Navbar