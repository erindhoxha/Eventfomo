import { cn } from '@/lib/utils';
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
 marginX?: MarginSpacing;
 marginY?: MarginSpacing;
 padding?: MarginSpacing;
 paddingTop?: MarginSpacing;
 paddingLeft?: MarginSpacing;
 paddingRight?: MarginSpacing;
 paddingBottom?: MarginSpacing;
 paddingX?: MarginSpacing;
 paddingY?: MarginSpacing;
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
   marginX,
   marginY,
   padding,
   paddingTop,
   paddingLeft,
   paddingRight,
   paddingBottom,
   paddingX,
   paddingY,
   className,
  },
  ref
 ) => {
  return (
   <div
    ref={ref}
    className={cn(
     {
      [`m-${margin}`]: margin,
      [`mt-${marginTop}`]: marginTop,
      [`ml-${marginLeft}`]: marginLeft,
      [`mr-${marginRight}`]: marginRight,
      [`mb-${marginBottom}`]: marginBottom,
      [`mx-${marginX}`]: marginX,
      [`my-${marginY}`]: marginY,
      [`p-${padding}`]: padding,
      [`pt-${paddingTop}`]: paddingTop,
      [`pl-${paddingLeft}`]: paddingLeft,
      [`pr-${paddingRight}`]: paddingRight,
      [`pb-${paddingBottom}`]: paddingBottom,
      [`px-${paddingX}`]: paddingX,
      [`py-${paddingY}`]: paddingY,
     },
     className
    )}
   >
    {children}
   </div>
  );
 }
);

Box.displayName = 'Box';

export { Box };
