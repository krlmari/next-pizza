import { cn } from "@/lib/utils";
import React from "react";
import { Categories, SortPopup, Container } from ".";

interface TopBarProps {
  className?: string;
}

export const TopBar: React.FC<TopBarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "top-bar shadow-ld sticky top-0 z-10 bg-white py-5 shadow-black/5",
        className
      )}
    >
      <Container className="flex flex-wrap justify-between gap-4">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
