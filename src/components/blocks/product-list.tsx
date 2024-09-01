"use client";

import React, { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { ProductCard } from "./product-card";
import useStore from "@/store/zustand-store";

interface ProductListProps {
  title: string;
  items: any[];
  categoryName: string;
  className?: string;
  listClassName?: string;
}

export const ProductList: React.FC<ProductListProps> = ({
  className,
  title,
  items,
  categoryName,
  listClassName,
}) => {
  const { updateCategory } = useStore();

  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 1,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      updateCategory(categoryName);
    }
  }, [intersection?.isIntersecting]);

  return (
    <div
      className={cn("product-list", className)}
      ref={intersectionRef}
      id={categoryName}
    >
      <Title text={title} size="lg" className="mb-5 font-extrabold" />

      <div
        className={cn(
          "grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-3",
          listClassName
        )}
      >
        {items.map((item) => (
          <ProductCard key={`${categoryName}-${item.id}`} {...item} />
        ))}
      </div>
    </div>
  );
};
