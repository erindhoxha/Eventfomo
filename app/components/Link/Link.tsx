import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { VariantProps } from 'class-variance-authority';
import Link from 'next/link';

const LinkComponent = ({
 href,
 children,
 variant,
 size,
 ...props
}: {
 href: string;
 children: React.ReactNode;
 variant?: VariantProps<typeof buttonVariants>['variant'];
 size?: VariantProps<typeof buttonVariants>['size'];
}) => {
 return (
  <Link
   href={href}
   className={cn(buttonVariants({ variant: variant ?? 'ghost', size: size }))}
   {...props}
  >
   {children}
  </Link>
 );
};

export default LinkComponent;
