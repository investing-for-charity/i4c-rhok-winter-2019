export type DashboardData = {
  actual_distribution: number;
  annual_distribution_percent: number;
  charities: Array<{ cause: string; charity_name: string; percent: number }>;
  donation_sum: number;
  first_name: string;
  fund_value: number;
};
