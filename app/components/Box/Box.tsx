'use client';

import clsx from 'clsx';
import { forwardRef } from 'react';
import React from 'react';

type MarginSpacing = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 14 | 16;

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
 children: React.ReactNode;
 margin?: MarginSpacing;
 marginTop?: MarginSpacing;
 marginLeft?: MarginSpacing;
 marginRight?: MarginSpacing;
 marginBottom?: MarginSpacing;
}

const Box = forwardRef<HTMLDivElement, BoxProps>(
 (
  {
   children,
   margin,
   marginTop,
   marginLeft,
   marginRight,
   marginBottom,
   className,
  },
  ref
 ) => {
  return (
   <div
    ref={ref}
    className={
     (clsx({
      [`m-${margin}`]: margin,
      [`mt-${marginTop}`]: marginTop,
      [`ml-${marginLeft}`]: marginLeft,
      [`mr-${marginRight}`]: marginRight,
      [`mb-${marginBottom}`]: marginBottom,
     }),
     className)
    }
   >
    {children}
   </div>
  );
 }
);

Box.displayName = 'Box';

export { Box };
