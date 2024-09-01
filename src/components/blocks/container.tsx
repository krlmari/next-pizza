import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn("container mx-auto max-w-[1280px] pl-5 pr-5", className)}
    >
      {children}
    </div>
  );
};
