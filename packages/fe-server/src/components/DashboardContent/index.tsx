/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { DashboardData } from '../../api/types';
import { cardCss } from '../Card';
import { Button } from '@atlaskit/button/components/Button';
import PieChart from './PieChart';
import Captcha from './Captcha';
import { fmtNum } from './utils';

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

export default ({ dashboardData, onLogOut }: Props) => {
  const { first_name, donation_sum, annual_distribution_percent, charities, fund_value } = dashboardData;
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
      <section
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
      </section>
      <section css={sectionCss}>
        <dl>
          <dd>Your fund value is</dd>
          <dt css={moneyCss}>${fmtNum(fund_value)}</dt>
        </dl>
      </section>
      <section css={sectionCss}>
        <dl>
          <dd>Your annual distribution is</dd>
          <dt css={moneyCss}>{fmtNum(annual_distribution_percent)}%</dt>
        </dl>
      </section>
      <section css={sectionCss}>
        <h1
          css={css`
            margin: 0;
            font-size: 20px;
          `}
        >
          Charity allocation percentage
        </h1>
        <PieChart dashboardData={dashboardData} />
      </section>
      <section css={sectionCss}>
        <dl>
          <dd>BSB for Additional donations</dd>
        </dl>
        <Captcha /> 
      </section>
      <div
        css={css`
          ${sectionCss}
          padding-top: 8px;
          padding-bottom: 8px;

          background: #eee;

          > button {
            background: #eee;
            width: 100%;
            
            > span {
              width: 100%;
            }
          }
        `}
      >
        <Button onClick={onLogOut}>Log out</Button>
      </div>
    </div>
  );
};
