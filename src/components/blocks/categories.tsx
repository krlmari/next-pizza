import { cn } from "@/lib/utils";
import React from "react";

const categories = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктейли",
  "Кофе",
  "Напитки",
  "Десерты",
];
const activeIndex = 0;

interface CategoriesProps {
  className?: string;
}

export const Categories: React.FC<CategoriesProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "categories inline-flex gap-1 overflow-auto rounded-2xl bg-gray-50 p-1",
        className
      )}
    >
      {categories.map((category, index) => (
        <a
          className={cn(
            "flex h-11 items-center rounded-2xl px-5",
            activeIndex === index &&
              "bg-white text-primary shadow-md shadow-gray-200"
          )}
          key={index}
        >
          {category}
        </a>
      ))}
    </div>
  );
};
