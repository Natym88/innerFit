import styled from "styled-components";

interface IStyledList {
    mobile: boolean;
}

export const StyledList = styled.ul<IStyledList>`
    display: flex;
    padding-left: 20px;
`;

export const StyledItem = styled.li`
    list-style: none;
    padding: 0 20px;
    border-right: 2px solid var(--text-light);
    margin: auto 0;
`;

export const StyledFinalItem = styled.li`
    list-style: none;
    padding: 10px 20px;
    margin-right: 15px;
    margin: auto 20px auto 0;
`;

export const StyledSignIn = styled.li`
    list-style: none;
`;

export const StyledDivSignIn = styled.div`
    font: var(--text-inter-marked);
`;