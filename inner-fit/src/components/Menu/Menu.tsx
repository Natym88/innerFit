import { useState } from 'react';
import MenuItems from '../MenuItems/MenuItems.tsx';
import { getLocalizedText } from '../../services/LanguageService.tsx';
import hambClaro from '../../assets/menu_hamb_claro.png'
import { IStyledComponents } from '../../models/styledComponents/styledComponents.ts';
import { StyledMobileMenu } from './styles.ts';
import CloseButton from 'react-bootstrap/CloseButton';

const Menu = ({style}: IStyledComponents) => {
  
  const text = getLocalizedText()
  const [viewMenu, setViewMenu] = useState<boolean>(false)

  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  const onClickHandler = () => {
    setViewMenu(!viewMenu);
  }

  return (
    <>
      {isMobile ? (!viewMenu ? <div onClick={onClickHandler}><img src={hambClaro} /></div> : <StyledMobileMenu><CloseButton onClick={onClickHandler} /><MenuItems isMobile={isMobile} text={text} /></StyledMobileMenu>) : 
      <div style={style}>
        <MenuItems isMobile={isMobile} text={text} /> 
      </div>
      }
    </>
  )
  
}

export default Menu;