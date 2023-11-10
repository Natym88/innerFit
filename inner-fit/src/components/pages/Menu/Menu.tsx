import { useState } from 'react';
import MenuItems from '../../MenuItems/MenuItems.tsx';
import { getLocalizedText } from '../../../services/LanguageService.tsx';
import hambClaro from '../../../assets/menu_hamb_claro.png'
import { IStyledComponents } from '../../../models/styledComponents/styledComponents.ts';

const Menu = ({style}: IStyledComponents) => {
  
  const text = getLocalizedText()
  const [viewMenu, setViewMenu] = useState<boolean>(false)

  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  const onClickHandler = () => {
    setViewMenu(true)
  }

  return (
    <>
      {isMobile ? (!viewMenu && <div onClick={onClickHandler}><img src={hambClaro} /></div>) : 
      <div style={style}>
        <MenuItems isMobile={isMobile} text={text} /> 
      </div>
      }
    </>
  )
  
}

export default Menu