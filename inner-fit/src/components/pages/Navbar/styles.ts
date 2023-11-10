import styled, { css } from "styled-components";

interface IStyledDiv {
    mobile: boolean;
}

export const StyledDiv = styled.div<IStyledDiv>`
    display: flex;
    justify-content: flex-end;
    margin: 50px;
    width: 60%;

    ${props => props.mobile && css`
    justify-content: space-between;
    margin: 35px 30px 35px 5px;
    width: 80%;

    `}
`;