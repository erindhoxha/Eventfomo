type MarginSpacing = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 14 | 16;

interface BoxProps {
 children: React.ReactNode;
 marginTop?: MarginSpacing;
 marginLeft?: MarginSpacing;
 marginRight?: MarginSpacing;
 marginBottom?: MarginSpacing;
}

export function Box({
 children,
 marginTop,
 marginLeft,
 marginRight,
 marginBottom,
}: BoxProps) {
 return (
  <div
   className={`${marginTop && `mt-${marginTop}`} ${
    marginLeft && `ml-${marginLeft}`
   } ${marginRight && `mr-${marginRight}`} ${
    marginBottom && `mb-${marginBottom}`
   }`}
  >
   {children}
  </div>
 );
}
