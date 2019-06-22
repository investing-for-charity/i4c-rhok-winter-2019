/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { DashboardData } from '../../api/types';
import { cardCss } from '../Card';
import { Button } from '@atlaskit/button/components/Button';

type Props = {
  dashboardData: DashboardData;
  onLogOut: () => void;
};

const moneyCss = css`
  font-weight: bold;
  color: #36b37e;
  font-size: 32px;
`;

const sectionCss = css`
  ${cardCss}
  display: flex;
  flex-direction: column;

  @media (min-width: 420px) {
    width: 50%;
    flex-direction: row;
  }
`;

const fmtNum = (n: number) => n.toLocaleString(undefined, { maximumFractionDigits: 2 });

export default ({
  dashboardData: { first_name, donation_sum, annual_distribution_percent, charities, fund_value },
  onLogOut,
}: Props) => {
  return (
    <div
      css={css`
        dl {
          margin: 0;
        }

        dd {
          margin-left: 0;
        }
      `}
    >
      <div
        css={css`
          position: fixed;
          right: 24px;
          padding: 8px;

          > button {
            background: #fff;
          }
        `}
      >
        <Button onClick={onLogOut}>Log out</Button>
      </div>
      <div
        css={css`
          ${sectionCss}
          justify-content: space-between;
        `}
      >
        <h1
          css={css`
            font-size: 18px;
            color: #505f79;
            margin: 0;
            margin-bottom: 16px;
          `}
        >
          Welcome {first_name}!
        </h1>
        <div>
          Donated this year:
          <div css={moneyCss}>${fmtNum(donation_sum)}</div>
        </div>
      </div>
      <div css={sectionCss}>
        <dl>
          <dd>Your fund value is</dd>
          <dt css={moneyCss}>${fmtNum(fund_value)}</dt>
        </dl>
      </div>
      <div css={sectionCss}>
        <dl>
          <dd>Your annual distribution is</dd>
          <dt css={moneyCss}>{fmtNum(annual_distribution_percent)}%</dt>
        </dl>
      </div>
      <div
        css={css`
          ${sectionCss}

          @media (min-width: 420px) {
            flex-direction: column;
          }
        `}
      >
        <div>Each year, you distribute:</div>
        <table
          css={css`
            margin-top: 16px;
          `}
        >
          <thead
            css={css`
              font-size: 20px;
              font-weight: bold;
            `}
          >
            <tr>
              <td>Cause</td>
              <td>Distribution</td>
              <td>Total amount</td>
            </tr>
          </thead>
          <tbody>
            {charities.map(({ cause, charity_name, percent }) => (
              <tr key={cause}>
                <td>
                  {charity_name}
                  <br />
                  <small>{cause}</small>
                </td>
                <td css={moneyCss}>{fmtNum(percent)}%</td>
                <td css={moneyCss}>${fmtNum((annual_distribution_percent / 100) * fund_value * (percent / 100))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
