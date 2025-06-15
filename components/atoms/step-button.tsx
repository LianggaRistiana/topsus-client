// components/step-button.tsx
'use client';

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils"; // asumsi kamu pakai `cn` dari shadcn/utils

// 1. Variants
const stepButtonVariants = cva(
  "rounded-full w-10 h-10 px-2 py-2 flex items-center justify-center text-xs transition-colors",
  {
    variants: {
      variant: {
        active: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        inactive: "bg-secondary text-secondary-foreground shadow hover:bg-secondary/80",
      },
    },
    defaultVariants: {
      variant: "inactive",
    },
  }
);

// 2. Props
type StepButtonProps = {
  isActive: boolean;
  isClickable?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
//   variant?: VariantProps<typeof stepButtonVariants>["variant"];
};

// 3. Component
export default function StepButton({
  isActive,
  isClickable = false,
  onClick,
  children,
  className,
}: StepButtonProps) {
  const variant = isActive ? "active" : "inactive";

  return (
    <button
      type="button"
      className={cn(stepButtonVariants({ variant }), className)}
      onClick={isClickable ? onClick : undefined}
      disabled={!isClickable}
    >
      {children}
    </button>
  );
}
