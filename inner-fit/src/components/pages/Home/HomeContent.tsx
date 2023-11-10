import WithRoundedStyle from '../../../hoc/WithRoundedStyle';
import { IStyledComponents } from '../../../models/styledComponents/styledComponents';
import { getLocalizedText } from '../../../services/LanguageService'
import { Info, StyledContent, Subtitle, Title } from './styles';

interface HomeContentProps {
    isMobile: boolean;
}

const HomeContent = ({isMobile}: HomeContentProps) => {

    const text = getLocalizedText();

    const Trial = ({style}: IStyledComponents) => {
        return <div style={style}>{text.tryFree}</div>
    }

    const styleTrialProps = {
        padding: '10px 30%',
        width: '500px'
    }

    const StyledTrial = WithRoundedStyle(Trial, styleTrialProps)

  return (
    <StyledContent mobile={isMobile}>
        <Title>{text.home.title}</Title>
        <Subtitle>{text.home.subtitle}</Subtitle>
        <Info>{text.home.info}</Info>
        <StyledTrial />
    </StyledContent>
  )
}

export default HomeContent