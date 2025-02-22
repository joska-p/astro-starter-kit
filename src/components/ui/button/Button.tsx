import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { buttonVariants } from "./buttonVariants";
import { cn } from "#lib/cn";

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

function Button({
  ref,
  className,
  children,
  variant,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, className }))}
      type={type}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
