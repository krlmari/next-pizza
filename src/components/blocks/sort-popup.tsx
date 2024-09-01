import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import React from "react";

interface SortPopupProps {
  className?: string;
}

export const SortPopup: React.FC<SortPopupProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "sort-popup inline-flex h-[52px] cursor-pointer items-center gap-2 rounded-2xl bg-gray-50 px-5",
        className
      )}
    >
      <ArrowUpDown size={16} />
      <b>Сортировка:</b>
      <b className="text-primary">Популярное</b>
    </div>
  );
};
