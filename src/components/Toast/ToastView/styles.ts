import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
   type?: 'success' | 'error' | 'default';
   hasDescription: boolean;
}

const toastTypeVariations = {
  default: css`
      background: #ebf8ff;
      color: #3172b7;
   `,
  success: css`
      background: #e6fffa;
      color: #2e656a;
   `,
  error: css`
      background: #fddede;
      color: #c53030;
   `,
};

export const Container = styled(animated.div)<ContainerProps>`
   box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
   padding: 16px 30px 16px 16px;
   border-radius: 10px;
   position: relative;
   display: flex;
   width: 360px;
   & + div {
      margin-top: 8px;
   }
   ${(props) => toastTypeVariations[props.type || 'default']}
   > svg {
      margin: 4px 12px 0 0;
   }
   div {
   flex: 1;
      p {
         line-height: 20px;
         margin-top: 4px;
         font-size: 14px;
         opacity: 0.8;
      }
   }
   button {
      background: transparent;
      position: absolute;
      color: inherit;
      opacity: 0.6;
      right: 16px;
      border: 0;
      top: 19px;
   }
   ${(props) => !props.hasDescription
      && css`
         align-items: center;
         svg {
            margin-top: 0;
         }
      `}
`;
