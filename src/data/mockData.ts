import { LotteryResult } from '@/services/api';

export const mockResults: LotteryResult[] = [
  {
    id: 1,
    date: '2024-02-14',
    type: 'lunchtime',
    drawTime: '12:49 PM',
    numbers: [3, 11, 24, 36, 42, 47],
    bonusBall: 19,
  },
  {
    id: 2,
    date: '2024-02-14',
    type: 'teatime',
    drawTime: '5:49 PM',
    numbers: [7, 13, 28, 31, 39, 45],
    bonusBall: 22,
  },
  {
    id: 3,
    date: '2024-02-13',
    type: 'lunchtime',
    drawTime: '12:49 PM',
    numbers: [5, 15, 22, 33, 41, 46],
    bonusBall: 27,
  },
  {
    id: 4,
    date: '2024-02-13',
    type: 'teatime',
    drawTime: '5:49 PM',
    numbers: [2, 9, 17, 25, 38, 44],
    bonusBall: 12,
  },
]; 