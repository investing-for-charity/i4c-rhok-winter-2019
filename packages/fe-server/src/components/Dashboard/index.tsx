/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { useReducer, useCallback } from 'react';
import Login from '../Login';
import DashboardContent from '../DashboardContent';
import { getDashboardData } from '../../api';
import { DashboardData } from '../../api/types';

type Step = 'LOGIN' | 'DASHBOARD';
type State = {
  email: string;
  step: Step;
  dashboardData?: DashboardData;
};

const reducer = (state: State, action: Partial<State>): State => ({
  ...state,
  ...action,
});

export default () => {
  const [state, dispatch] = useReducer(reducer, {
    email: '',
    step: 'LOGIN',
    dashboardData: undefined,
  });

  const onLoginSubmit = useCallback(
    (async (formData, _, callback) => {
      const { data } = await getDashboardData(formData.email);
      console.log('response data', data);
      callback();

      dispatch({
        email: formData.email,
        step: 'DASHBOARD',
        dashboardData: data,
      });
    }) as React.ComponentProps<typeof Login>['onSubmit'],
    []
  );

  let component: React.ReactNode;
  switch (state.step) {
    case 'LOGIN': {
      component = <Login onSubmit={onLoginSubmit} />;
      break;
    }
    case 'DASHBOARD': {
      component = state.dashboardData && <DashboardContent dashboardData={state.dashboardData} />;
      break;
    }
  }

  return (
    <div
      css={css`
        height: 100vh;
        overflow-y: hidden;
        background: #57d9a3;
      `}
    >
      <div
        css={css`
          width: 50%;
          max-width: 700px;
          background: #fff;
          border-radius: 3px;
          padding: 32px;
          margin: 32px auto;
        `}
      >
        {component}
      </div>
    </div>
  );
};
