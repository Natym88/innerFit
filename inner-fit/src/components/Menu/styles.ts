import styled from "styled-components";

export const StyledMobileMenu = styled.div`
    position: absolute;
    top: 0;
    right 0;
    width: 100vw;
    max-width: 500px;
    background-color: var(--bg-light);
    color: var(--text-dark);
    min-height: 100dvh;
    height: 600px;
    padding: 25px;
    button {
        float: left;
        padding: 20px;
        color: var(--text-dark);
    }
`;