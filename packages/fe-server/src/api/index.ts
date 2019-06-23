import axios from 'axios';
import { DashboardData } from './types';

const useMock = process.env.NODE_ENV !== 'production';
const baseUrl = `https://rhok-i4c-winter2019-fe-pyserv.herokuapp.com/`;

const mockData: DashboardData = {
  actual_distribution: 10143.18,
  annual_distribution_percent: 15.0,
  charities: [
    { cause: 'Underprivileged Youth', charity_name: 'Life for Koori Kids', percent: 10.0 },
    { cause: 'Refugees in Australia', charity_name: 'St Francis Social Services', percent: 10.0 },
    { cause: 'Child Slavery', charity_name: 'Connecting Hands', percent: 10.0 },
    { cause: 'Mental Health', charity_name: 'PANDA', percent: 10.0 },
    { cause: 'Women & Domestic Violence', charity_name: 'Port Macq Hastings Specialist Service', percent: 10.0 },
    { cause: 'Global Poverty', charity_name: 'Against Malaria Foundation', percent: 10.0 },
    { cause: 'Youth at Risk', charity_name: 'Streetwork Incorporated', percent: 20.0 },
    { cause: 'Social Enterprise', charity_name: 'The Bread and Butter Project', percent: 20.0 },
  ],
  donation_sum: 54305.33,
  first_name: 'Christophe',
  fund_value: 67621.1809563419,
};

export const getDashboardData = (email: string, password: string): Promise<{ data: DashboardData }> =>
  useMock
    ? new Promise(res => {
        setTimeout(res, 1000);
      }).then(() => ({ data: mockData }))
    : axios.post(`${baseUrl}/get`, {
        email,
        password,
      });
