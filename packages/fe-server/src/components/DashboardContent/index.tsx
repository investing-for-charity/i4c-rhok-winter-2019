/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { DashboardData } from '../../api/types';

type Props = {
  dashboardData: DashboardData;
};

const moneyCss = css`
  font-weight: bold;
  color: #36b37e;
  font-size: 32px;
`;

const fmtNum = (n: number) => n.toLocaleString(undefined, { maximumFractionDigits: 2 });

export default ({
  dashboardData: { first_name, donation_sum, annual_distribution_percent, charities, fund_value },
}: Props) => {
  return (
    <div>
      <h1
        css={css`
          font-size: 18px;
          color: #505f79;
        `}
      >
        Welcome {first_name}!
      </h1>
      <dl
        css={css`
          dd {
            margin-left: 0;
            margin-bottom: 16px;
          }
        `}
      >
        <dt>You have donated</dt>
        <dd>
          <span css={moneyCss}>${fmtNum(donation_sum)}</span>
        </dd>
        <dt>Your fund value is</dt>
        <dd>
          <span css={moneyCss}>${fmtNum(fund_value)}</span>
        </dd>
        <dt>Your annual distribution is</dt>
        <dd>
          <span css={moneyCss}>${fmtNum(annual_distribution_percent)}%</span>
        </dd>
      </dl>
      Each year, you distribute:
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
            <tr>
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
  );
};
