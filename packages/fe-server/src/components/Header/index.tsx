/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import Button from '@atlaskit/button';
import { Link } from 'react-router-dom';

export default () => (
  <header
    css={css`
      min-height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #eee;
    `}
  >
    <Button
      appearance="primary"
      href="/dashboard"
      component={React.forwardRef<HTMLElement, React.AllHTMLAttributes<HTMLElement>>(
        ({ href = '', children, ...rest }, ref: any) => (
          <div
            css={css`
              & > a {
                width: 300px !important;
                height: 50px !important;

                & > * {
                  width: 100% !important;
                }
              }
            `}
          >
            <Link {...rest} to={href} innerRef={ref}>
              {children}
            </Link>
          </div>
        )
      )}
    >
      Log in
    </Button>
  </header>
);
