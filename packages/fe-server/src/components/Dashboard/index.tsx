/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { useReducer, useCallback } from 'react';
import Login from '../Login';
import DashboardContent from '../DashboardContent';
import { getDashboardData, mockData } from '../../api';
import { DashboardData } from '../../api/types';

type Step = 'LOGIN' | 'DASHBOARD';
type State = {
  step: Step;
  dashboardData?: DashboardData;
};

const useMock = false;

const reducer = (state: State, action: Partial<State>): State => ({
  ...state,
  ...action,
});

export default () => {
  const [state, dispatch] = useReducer(reducer, {
    step: useMock ? 'DASHBOARD' : 'LOGIN',
    dashboardData: useMock ? mockData : undefined,
  });

  const onLoginSubmit = useCallback(
    (async (formData, _, callback) => {
      const { data } = await getDashboardData(formData.email, formData.password);
      callback();

      dispatch({
        step: 'DASHBOARD',
        dashboardData: data,
      });
    }) as React.ComponentProps<typeof Login>['onSubmit'],
    []
  );

  const onLogOut = useCallback(() => {
    dispatch({
      step: 'LOGIN',
      dashboardData: undefined,
    });
  }, []);

  let component: React.ReactNode;
  switch (state.step) {
    case 'LOGIN': {
      component = <Login onSubmit={onLoginSubmit} />;
      break;
    }
    case 'DASHBOARD': {
      component = state.dashboardData && <DashboardContent dashboardData={state.dashboardData} onLogOut={onLogOut} />;
      break;
    }
  }

  return (
    <div
      css={css`
        min-height: 100vh;
        height: 100%;
        padding: 40px 0;
        background: #57d9a3;
      `}
    >
      {component}
    </div>
  );
};
