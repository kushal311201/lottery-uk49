import axios from 'axios';

export interface LotteryResult {
  id: number;
  date: string;
  type: 'lunchtime' | 'teatime';
  drawTime: string;
  numbers: number[];
  bonusBall: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
});

export const getLotteryResults = async (
  page: number = 1,
  pageSize: number = 10,
  startDate?: string,
  endDate?: string,
  drawType?: 'lunchtime' | 'teatime'
): Promise<PaginatedResponse<LotteryResult>> => {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
      ...(startDate && { startDate }),
      ...(endDate && { endDate }),
      ...(drawType && { drawType }),
    });

    const response = await api.get<PaginatedResponse<LotteryResult>>(`/results?${params}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch lottery results');
  }
};

export const getLatestResults = async (): Promise<{
  lunchtime: LotteryResult | null;
  teatime: LotteryResult | null;
}> => {
  try {
    const response = await api.get('/results/latest');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch latest results');
  }
}; 