import WithRoundedStyle from "../../../hoc/WithRoundedStyle";
import LanguageButton from "../../utils/LanguageButton/LanguageButton";
import { Menu } from "../Menu";

const Navbar = () => {

const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const StyledComponent = WithRoundedStyle(LanguageButton)

  return (
    <>
    {isMobile ? <div><Menu /> <StyledComponent /></div> : <div> <StyledComponent /> <Menu /> </div>}
    </>
  )
}

export default Navbar