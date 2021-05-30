import styled from "styled-components"

export const BlockQuote = styled.blockquote`
    border-left: 0.32813rem solid var(--colors-primary);
    color: var(--colors-primary);
    font-style: italic;

    @media only screen and (max-width: 480px) {
        margin-left: -1rem;
    }
`
