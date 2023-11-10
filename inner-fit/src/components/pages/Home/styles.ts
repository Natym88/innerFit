import styled from 'styled-components'
import bgImageMobile from '../../../assets/bg_mobile.jpg';
import bgImageDesktop from '../../../assets/bg_desktop.jpg'

interface IStyledDiv {
    mobile: boolean;
}

export const StyledDiv = styled.div<IStyledDiv>`
    background-image: url(${(props) => (props.mobile ? bgImageMobile : bgImageDesktop)});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    text-align: ${(props) => (props.mobile && 'center')}
`;

export const StyledHeader = styled.div<IStyledDiv>`
    display: flex;
    flex-direction: ${(props) => (props.mobile && 'column-reverse')};
    align-items: center;
    justify-content: ${(props) => (!props.mobile && 'space-around')}
`;

export const StyledContent = styled.div<IStyledDiv>`
    text-align: center;
    color: var(--text-light);
    max-width: 500px;
    margin: auto;
`;

export const Title = styled.div`
    font: var(--playfair-title);
    margin-top: 10%;
`;

export const Subtitle = styled.div`
    margin: 1rem 0;
`;

export const Info = styled.div`
    margin-bottom: 4rem;
`;