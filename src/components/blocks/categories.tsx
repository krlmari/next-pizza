"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import useStore from "@/store/zustand-store";

const categories = [
  {
    title: "Пиццы",
    name: "pizza",
  },
  {
    title: "Комбо",
    name: "combo",
  },
  {
    title: "Закуски",
    name: "snacks",
  },
  {
    title: "Коктейли",
    name: "cocktails",
  },
  {
    title: "Кофе",
    name: "coffee",
  },
  {
    title: "Напитки",
    name: "drinks",
  },
  {
    title: "Десерты",
    name: "desserts",
  },
];

interface CategoriesProps {
  className?: string;
}

export const Categories: React.FC<CategoriesProps> = ({ className }) => {
  const { currentCategory } = useStore();
  const [activeCategory, setActiveCategory] = useState("pizza");

  const OnClickCategory = (name: string) => {
    const section = document.getElementById(name);

    setActiveCategory(name);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  useEffect(() => {
    setActiveCategory(currentCategory);
  }, [currentCategory]);

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
            "flex h-11 cursor-pointer items-center rounded-2xl px-5",
            activeCategory === category.name &&
              "bg-white text-primary shadow-md shadow-gray-200"
          )}
          key={index}
          onClick={() => OnClickCategory(category.name)}
        >
          {category.title}
        </a>
      ))}
    </div>
  );
};
