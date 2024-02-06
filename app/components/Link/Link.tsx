import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import Link from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  className?: string;
}

const LinkComponent = ({
  href,
  children,
  variant,
  size,
  className,
  ...props
}: LinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: variant ?? "ghost", size: size }),
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkComponent;
