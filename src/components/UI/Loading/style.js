import styled, { css } from 'styled-components';

const StyledLoading = styled.div`
    ${props => props.fixed && css`
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    `}

    .wrapper {
        width: ${props => props.wrapperWidth}px;
        height: ${props => props.wrapperHeight}px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
        border-radius: 20px;
        margin: 0 auto;

      ${props => !props.inline && css`
        position: absolute;
      `}
    }

    .loader {
            display: inline-block;
            position: relative;
            width: ${props => props.loadingWidth}px;
            height: ${props => props.loadingWidth}px;
        }

    .loader div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: ${props => Math.ceil(props.loadingWidth * 0.4)}px;
        height: ${props => Math.ceil(props.loadingWidth * 0.4)}px;
        margin: ${props => Math.ceil(props.loadingWidth * 0.15)}px;
        border: ${props => Math.ceil(props.loadingWidth * 0.05)}px solid;
        border-radius: 50%;
        animation: loading-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #323232 transparent transparent transparent;
    }
    .loader div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .loader div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .loader div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

`;

export default StyledLoading;
