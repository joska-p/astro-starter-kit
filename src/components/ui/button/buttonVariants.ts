import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-block rounded-sm px-8 py-3 text-sm font-medium transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
