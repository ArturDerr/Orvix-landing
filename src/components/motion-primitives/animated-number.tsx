'use client';

import React, { useEffect, type JSX } from 'react';
import type { SpringOptions } from 'motion/react';
import { motion, useSpring, useTransform } from 'motion/react';
import { cn } from '@/lib/utils';

export type AnimatedNumberProps = {
  value: number;
  className?: string;
  springOptions?: SpringOptions;
  as?: keyof JSX.IntrinsicElements;
};

export function AnimatedNumber({
  value,
  className,
  springOptions,
  as: Component = 'span',
}: AnimatedNumberProps) {
  const spring = useSpring(value, springOptions);
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  const MotionComponent = motion(Component as any);

  return (
    <MotionComponent className={cn('tabular-nums', className)}>
      {display}
    </MotionComponent>
  );
}
