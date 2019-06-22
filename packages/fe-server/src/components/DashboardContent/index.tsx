/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { DashboardData } from '../../api/types';

type Props = {
  dashboardData: DashboardData;
};

export default ({ dashboardData }: Props) => {
  return (
    <div>
      <pre>{JSON.stringify(dashboardData, null, 2)}</pre>
    </div>
  );
};
