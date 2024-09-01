"use client";

import React from "react";
import { cn } from "@/lib/utils";
import useCategoryStore from "@/store/category";
import { categories } from "@/content/categories";

interface CategoriesProps {
  className?: string;
}

export const Categories: React.FC<CategoriesProps> = ({ className }) => {
  const { currentCategory } = useCategoryStore();

  return (
    <div
      className={cn(
        "categories inline-flex gap-1 overflow-auto rounded-2xl bg-gray-50 p-1",
        className
      )}
    >
      {categories.map(({ name, title }, index) => (
        <a
          className={cn(
            "flex h-11 cursor-pointer items-center rounded-2xl px-5",
            currentCategory === name &&
              "bg-white text-primary shadow-md shadow-gray-200"
          )}
          key={index}
          href={`/#${name}`}
        >
          {title}
        </a>
      ))}
    </div>
  );
};
