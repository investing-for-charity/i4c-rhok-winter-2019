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

export default ({ dashboardData }: Props) => {
  return (
    <div>
      <h1
        css={css`
          font-size: 18px;
          color: #505f79;
        `}
      >
        Welcome {dashboardData.first_name}!
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
          <span css={moneyCss}>${dashboardData.donation_sum.toLocaleString()}</span>
        </dd>
        <dt>Your fund value is</dt>
        <dd>
          <span css={moneyCss}>${dashboardData.fund_value.toLocaleString()}</span>
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
          </tr>
        </thead>
        <tbody>
          {Object.entries(dashboardData.charities).map(([cause, distribution]) => (
            <tr>
              <td>{cause}</td>
              <td css={moneyCss}>{distribution}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
