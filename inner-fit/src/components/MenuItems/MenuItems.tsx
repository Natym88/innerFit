import WithRoundedStyle, { Styles } from '../../hoc/WithRoundedStyle'
import { IText } from '../../models/texts/texts'
import { StyledDivSignIn, StyledFinalItem, StyledItem, StyledList, StyledSignIn } from './styles'

interface IProps {
    isMobile: boolean,
    text: IText
}

interface SignInProps {
  style?: Styles;
}

const styleProps = {
    backgroundColor: 'var(--bg-light)',
    color: 'var(--text-dark)',
    padding: '10px 25px'
}

const MenuItems = ({isMobile, text}: IProps) => {
    
    const SignIn = ({style}: SignInProps ) => {
        return <StyledDivSignIn style={style}>
            {text.pages.SignIn}
          </StyledDivSignIn>
      }
    const StiledComponent = WithRoundedStyle(SignIn, styleProps)
    
  return (
    <div>
        <StyledList mobile={isMobile}>
            <StyledItem mobile={isMobile}>{text.pages.HIW}</StyledItem>
            <StyledItem mobile={isMobile}>{text.pages.Memberships}</StyledItem>
            <StyledItem mobile={isMobile}>{text.pages.Team}</StyledItem>
            <StyledFinalItem mobile={isMobile}>{text.pages.Contact}</StyledFinalItem>
            <StyledSignIn mobile={isMobile}><StiledComponent /></StyledSignIn>
        </StyledList>
      </div>
  )
}

export default MenuItems