/** @jsx jsx */
import { useState, useCallback } from 'react';
import { css, jsx } from '@emotion/core';
import { Fragment } from 'react';
import Captcha from './Captcha';

export default () => {
  const [showData, setShowData] = useState(false);
  const onCaptchaSuccess = useCallback(() => {
    setShowData(true);
  }, []);

  return (
    <Fragment>
      <span
        css={css`
          text-decoration: none;
          margin: 16px 0;
          color: #505f79;
        `}
      >
        Donate more:
      </span>
      {showData ? (
        <table
          css={css`
            color: #505f79;
            border-spacing: 16px;
            margin-left: -16px;

            td:first-of-type {
              font-weight: bold;
            }
          `}
        >
          <tbody>
            <tr>
              <td>Account name</td>
              <td>Investing for Charity Ltd</td>
            </tr>
            <tr>
              <td>Account number</td>
              <td>806254</td>
            </tr>
            <tr>
              <td>BSB</td>
              <td>032-000</td>
            </tr>
            <tr>
              <td>Reference</td>
              <td>{'<Your fund name>'}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <Captcha onCaptchaSuccess={onCaptchaSuccess} />
      )}
    </Fragment>
  );
};
