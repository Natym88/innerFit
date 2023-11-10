import WithRoundedStyle from '../../../hoc/WithRoundedStyle';
import { getLocalizedText } from '../../../services/LanguageService';

const {language} = getLocalizedText()
console.log(language);
const SignIn = () => {
    return language.pages.SignIn
}

const styleProps = {
    backgroundColor: 'var(--bg-light)',
    color: 'var(--text-dark)'
}

const Menu = () => {

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
  const StiledComponent = WithRoundedStyle(SignIn, styleProps)

  return (
    <>
      {isMobile ? <div><img src='/assets/menu_hamb_claro.png' /></div> : 
      <div>
        <ul>
            <li>{language.pages.HIW}</li>
            <li>{language.pages.Team}</li>
            <li>{language.pages.Memberships}</li>
            <li>{language.pages.Contact}</li>
            <li><StiledComponent /></li>
        </ul>
      </div> }
    </>
  )
  
}

export default Menu