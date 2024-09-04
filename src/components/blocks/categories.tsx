"use client";

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import useCategoryStore from "@/store/category";

interface CategoriesProps {
  categories: { name: string; title: string }[];
  className?: string;
}

export const Categories: React.FC<CategoriesProps> = ({
  categories,
  className,
}) => {
  const { currentCategory } = useCategoryStore();

  const scrollToElement = (name: string, offset = 100) => {
    const targetElement = document.getElementById(name);
    if (!targetElement) return;

    window.scrollTo({
      top: targetElement.getBoundingClientRect().top + window.scrollY - offset,
      behavior: "smooth",
    });
  };

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    name: string
  ) => {
    event.preventDefault();
    scrollToElement(name);
    window.history.pushState(null, "", `#${name}`);
  };

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) scrollToElement(hash);
  }, []);

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
          onClick={(event) => handleClick(event, name)}
        >
          {title}
        </a>
      ))}
    </div>
  );
};
