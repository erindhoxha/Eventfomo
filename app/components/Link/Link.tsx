import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const LinkComponent = ({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className={cn(buttonVariants({ variant: 'ghost' }))}>
      {children}
    </Link>
  );
};

export default LinkComponent;
