/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { SuccessProgressBar } from '@atlaskit/progress-bar';
import { DashboardData } from '../../api/types';
import { cardCss } from '../Card';
import { Button } from '@atlaskit/button/components/Button';
import PieChart from './PieChart';
import DonateMore from './DonateMore';
import { fmtNum } from './utils';

type Props = {
  dashboardData: DashboardData;
  onLogOut: () => void;
};

const moneyCss = css`
  color: #36b37e;
  font-size: 32px;
`;

const headingCss = css`
  margin: 0;
  font-size: 12px;
  color: #505f79;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const sectionCss = css`
  ${cardCss}
  display: flex;
  flex-direction: column;

  @media (min-width: 420px) {
    width: 50%;
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
          Welcome {first_name}
        </h1>

        <div>
          <h1 css={headingCss}>Your charity fund balance now:</h1>
          <div css={moneyCss}>${fmtNum(fund_value)}</div>
        </div>
      </section>

      <section css={sectionCss}>
        <h1 css={headingCss}>This year you will distribute {fmtNum(annual_distribution_percent)} %</h1>
        <div
          css={css`
            margin: 16px 0;

            span {
              background: #36b37e;
            }
          `}
        >
          <SuccessProgressBar value={annual_distribution_percent / 100} />
        </div>
        <div css={moneyCss}>${fmtNum((annual_distribution_percent / 100) * fund_value)}</div>
      </section>
      <section css={sectionCss}>
        <h1 css={headingCss}>Charity allocation percentage</h1>
        <PieChart dashboardData={dashboardData} />
      </section>
      <section css={sectionCss}>
        <h1 css={headingCss}>Donations received from you:</h1>
        <div css={moneyCss}>${fmtNum(donation_sum)}</div>
        <DonateMore />
      </section>
      <div
        css={css`
          ${sectionCss}
          padding-top: 8px;
          padding-bottom: 8px;

          background: #fff;

          > button {
            background: #fff;
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
