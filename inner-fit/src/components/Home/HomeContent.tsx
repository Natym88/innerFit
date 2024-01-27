import WithRoundedStyle from '../../hoc/WithRoundedStyle';
import { IStyledComponents } from '../../models/styledComponents/styledComponents';
import { getLocalizedText } from '../../services/LanguageService'
import { Info, StyledContent, Subtitle, Title } from '../../pages/Home/styles';
import parse from 'html-react-parser';

interface HomeContentProps {
    isMobile: boolean;
}

const HomeContent = ({ isMobile }: HomeContentProps) => {

    const text = getLocalizedText();

    const Trial = ({ style }: IStyledComponents) => {
        return <div style={style}>{text.tryFree}</div>
    }

    const styleTrialProps = {
        minWidth: '350px',
        maxWidth: '500px',
        margin: '0 10px',
        textAlign: 'center' as const

    }

    const StyledTrial = WithRoundedStyle(Trial, styleTrialProps)

    return (
        <StyledContent mobile={isMobile}>
            <Title mobile={isMobile}>{parse(text.home.title)}</Title>
            <Subtitle>{text.home.subtitle}</Subtitle>
            <Info mobile={isMobile}>{parse(text.home.info)}</Info>
            <StyledTrial />
        </StyledContent>
    )
}

export default HomeContent