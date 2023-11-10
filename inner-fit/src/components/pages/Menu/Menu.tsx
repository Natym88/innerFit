import WithRoundedStyle from '../../../hoc/WithRoundedStyle';
import { getLocalizedText } from '../../../services/LanguageService.tsx';

const text = getLocalizedText()
const SignIn = () => {
    console.log(text);
    return <div>
      {text.pages.SignIn}
    </div>
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
            <li>{text.pages.HIW}</li>
            <li>{text.pages.Team}</li>
            <li>{text.pages.Memberships}</li>
            <li>{text.pages.Contact}</li>
            <li><StiledComponent /></li>
        </ul>
      </div> }
    </>
  )
  
}

export default Menu