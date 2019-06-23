/** @jsx jsx */
import { css } from '@emotion/core';

export const cardCss = css`
  width: 70%;
  max-width: 700px;
  background: #fff;
  border-radius: 3px;
  padding: 32px;
  margin: auto auto 32px auto;

  @media (min-width: 420px) {
    width: 50%;
  }
`;
