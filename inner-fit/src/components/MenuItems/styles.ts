import styled from "styled-components";

interface IStyledList {
    mobile: boolean;
}
// voy a probar deploy

export const StyledList = styled.ul<IStyledList>`
    display: flex;
    padding-left: ${props => props.mobile ? '0' : '20px'};
    flex-direction: ${props => props.mobile && 'column'};
    align-items: ${props => props.mobile && 'center'};
    justify-content: ${props => props.mobile && 'space-between'};
    margin-bottom: 0;
    margin-top: ${props => props.mobile && '70px'};
`;

export const StyledItem = styled.li<IStyledList>`
    list-style: none;
    padding: ${props => props.mobile ? '20px' : '0 20px'};
    border-right: ${props => !props.mobile && '2px solid var(--text-light)'};
    border-bottom: ${props => props.mobile && '2px solid var(--text-light)'};
    margin: ${props => props.mobile ? '0' : 'auto 0'};
    width: ${props => props.mobile && '90%'};
`;

export const StyledFinalItem = styled.li<IStyledList>`
    list-style: none;
    padding: ${props => props.mobile ? '20px' : '10px 20px'};
    margin: ${props => props.mobile ? '0' : 'auto 20px auto 0'};
    border-bottom: ${props => props.mobile && '2px solid var(--text-light)'};
    width: ${props => props.mobile && '90%'};
`;

export const StyledSignIn = styled.li<IStyledList>`
    list-style: none;
    position: ${props => props.mobile && 'absolute'};
    bottom: ${props => props.mobile && '60px'};
`;

export const StyledDivSignIn = styled.div`
    font: var(--text-inter-marked);
`;