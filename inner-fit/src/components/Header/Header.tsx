import { Title } from './styles'
import { getLocalizedText } from '../../services/LanguageService'

const Header = () => {

  const text = getLocalizedText();

  return (
    <Title>{text.name}</Title>
  )
}

export default Header