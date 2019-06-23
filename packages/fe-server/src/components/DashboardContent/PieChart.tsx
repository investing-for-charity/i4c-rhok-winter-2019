/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { DashboardData } from '../../api/types';
import { fmtNum } from './utils';
import { VictoryLegend, VictoryPie, VictoryLabel, VictoryTooltip } from 'victory';

type Props = {
  dashboardData: DashboardData;
};

const CustomLabel = props => {
  console.log('label props', props);
  return (
    <g>
      <VictoryLabel {...props} />
      <VictoryTooltip
        {...props}
        x={200}
        y={250}
        text={`$${props.datum.amount}`}
        orientation="top"
        pointerLength={0}
        cornerRadius={50}
        width={100}
        height={100}
        flyoutStyle={{ fill: 'white', stroke: 'transparent' }}
        style={{ fontSize: 30 }}
      />
    </g>
  );
};

// @ts-ignore
CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;

export default ({ dashboardData: { charities, annual_distribution_percent, fund_value } }: Props) => {
  const getAmountPerCharity = (charityPercent: number) =>
    (annual_distribution_percent / 100) * fund_value * (charityPercent / 100);

  return (
    <div
      css={css`
        @media (min-width: 420px) {
          display: flex;
        }
      `}
    >
      <VictoryPie
        style={{ labels: { fill: 'black' } }}
        padAngle={1}
        colorScale="qualitative"
        innerRadius={100}
        labelComponent={<CustomLabel />}
        data={charities
          .filter(x => x.percent > 0)
          .map(charity => ({
            x: charity.cause,
            y: charity.percent,
            label: `${charity.percent} %`,
            amount: fmtNum(getAmountPerCharity(charity.percent)),
          }))}
      />
      <VictoryLegend
        style={{ labels: { fontSize: 24 } }}
        colorScale="qualitative"
        x={50}
        data={charities
          .filter(x => x.percent > 0)
          .map(charity => ({
            name: charity.cause,
          }))}
      />
    </div>
  );
};
