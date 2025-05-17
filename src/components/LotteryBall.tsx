import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface LotteryBallProps {
  number: number;
  isBonus?: boolean;
}

export function LotteryBall({ number, isBonus = false }: LotteryBallProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className={clsx(
        'lottery-ball',
        isBonus && 'ring-4 ring-lottery-gold'
      )}
    >
      {number}
    </motion.div>
  );
} 