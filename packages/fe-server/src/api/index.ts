import axios from 'axios';
import { DashboardData } from './types';

export const getDashboardData = (email: string): Promise<{ data: DashboardData }> =>
  axios
    .get(`http://10.1.4.241:5000/get/${email}`);
    // mock data
    // .then(() => ({
    //   data: {
    //     actual_distribution: 10143.18,
    //     charities: {
    //       'Against Malaria Foundation [Global Poverty]': '10%',
    //       'Connecting Hands [Child Slavery]': '10%',
    //       'Life for Koori Kids [Underprivileged Youth]': '10%',
    //       'PANDA [Mental Health]': '10%',
    //       'Port Macq Hastings Specialist Service [Women & Domestic Violence]': '10%',
    //       'St Francis Social Services [Refugees in Australia]': '10%',
    //       'Streetwork Incorporated [Youth at Risk]': '20%',
    //       'The Bread and Butter Project [Social Enterprise]': '20%',
    //     },
    //     donation_sum: 54305.33,
    //     first_name: 'Christophe',
    //     fund_value: 67621.1809563419,
    //   },
    // }));
